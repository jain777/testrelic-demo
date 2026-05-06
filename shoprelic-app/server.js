const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const crypto = require('crypto');
const path = require('path');
const products = require('./data/products');

const app = express();
const PORT = process.env.PORT || 3000;

// --- Environment variable flags ---
const BREAK_CHECKOUT = process.env.BREAK_CHECKOUT === 'true';
const BREAK_PROFILE = process.env.BREAK_PROFILE === 'true';
const FLAKY_SEARCH = process.env.FLAKY_SEARCH === 'true';

// --- View engine and middleware ---
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

// --- In-memory stores ---
const users = [
  {
    id: 1,
    name: 'Demo User',
    email: 'demo@shoprelic.com',
    password: 'password123'
  }
];

const sessions = {};   // sessionId -> { userId }
const carts = {};       // sessionId -> [ { productId, quantity } ]
const orders = [];      // { id, userId, items: [{product, quantity}], total, date, status, shipping }

let nextUserId = 2;
let nextOrderId = 1001;

// --- Session middleware ---
app.use((req, res, next) => {
  let sessionId = req.cookies.sessionId;
  if (!sessionId) {
    sessionId = crypto.randomUUID();
    res.cookie('sessionId', sessionId, { httpOnly: true, maxAge: 7 * 24 * 60 * 60 * 1000 });
  }
  req.sessionId = sessionId;

  // Attach user if logged in
  const session = sessions[sessionId];
  if (session) {
    req.user = users.find(u => u.id === session.userId) || null;
  } else {
    req.user = null;
  }

  // Ensure cart exists for this session
  if (!carts[sessionId]) {
    carts[sessionId] = [];
  }
  req.cart = carts[sessionId];

  // Make common data available to all views
  res.locals.user = req.user;
  res.locals.cartCount = req.cart.reduce((sum, item) => sum + item.quantity, 0);

  next();
});

// ==================== ROUTES ====================

// --- GET / (Landing page) ---
app.get('/', (req, res) => {
  const featured = products.slice(0, 6);
  res.render('index', { title: 'ShopRelic - Your One-Stop Shop', featured });
});

// --- GET /products (Catalog) ---
app.get('/products', (req, res) => {
  const { search, category, sort } = req.query;

  // Flaky search simulation
  if (FLAKY_SEARCH && search && search.trim().length > 0) {
    if (Math.random() < 0.5) {
      return setTimeout(() => {
        let filtered = filterAndSortProducts(search, category, sort);
        res.render('products', { title: 'Products - ShopRelic', products: filtered, search: search || '', category: category || '', sort: sort || '' });
      }, 6000);
    }
  }

  let filtered = filterAndSortProducts(search, category, sort);
  res.render('products', { title: 'Products - ShopRelic', products: filtered, search: search || '', category: category || '', sort: sort || '' });
});

function filterAndSortProducts(search, category, sort) {
  let filtered = [...products];

  if (search && search.trim().length > 0) {
    const q = search.toLowerCase().trim();
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
    );
  }

  if (category && category.trim().length > 0) {
    filtered = filtered.filter(p => p.category === category);
  }

  if (sort === 'price-asc') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === 'price-desc') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sort === 'name') {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  }

  return filtered;
}

// --- GET /products/:id (Product detail) ---
app.get('/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) {
    return res.status(404).send('Product not found');
  }
  res.render('product-detail', { title: `${product.name} - ShopRelic`, product });
});

// --- POST /cart/add ---
app.post('/cart/add', (req, res) => {
  const productId = parseInt(req.body.productId);
  const quantity = parseInt(req.body.quantity) || 1;

  const product = products.find(p => p.id === productId);
  if (!product) {
    return res.status(404).send('Product not found');
  }

  const existingItem = req.cart.find(item => item.productId === productId);
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    req.cart.push({ productId, quantity });
  }

  res.redirect('/cart');
});

// --- GET /cart ---
app.get('/cart', (req, res) => {
  const cartItems = req.cart.map(item => {
    const product = products.find(p => p.id === item.productId);
    return { product, quantity: item.quantity };
  }).filter(item => item.product);

  const subtotal = cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

  res.render('cart', { title: 'Cart - ShopRelic', cartItems, subtotal });
});

// --- POST /cart/update ---
app.post('/cart/update', (req, res) => {
  const productId = parseInt(req.body.productId);
  const quantity = parseInt(req.body.quantity);

  if (quantity <= 0) {
    carts[req.sessionId] = req.cart.filter(item => item.productId !== productId);
  } else {
    const item = req.cart.find(item => item.productId === productId);
    if (item) {
      item.quantity = quantity;
    }
  }

  res.redirect('/cart');
});

// --- POST /cart/remove ---
app.post('/cart/remove', (req, res) => {
  const productId = parseInt(req.body.productId);
  carts[req.sessionId] = req.cart.filter(item => item.productId !== productId);
  res.redirect('/cart');
});

// --- GET /login ---
app.get('/login', (req, res) => {
  if (req.user) {
    return res.redirect('/');
  }
  res.render('login', { title: 'Sign In - ShopRelic', error: null });
});

// --- POST /login ---
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);

  if (!user) {
    return res.render('login', { title: 'Sign In - ShopRelic', error: 'Invalid email or password' });
  }

  sessions[req.sessionId] = { userId: user.id };
  res.redirect('/');
});

// --- GET /signup ---
app.get('/signup', (req, res) => {
  if (req.user) {
    return res.redirect('/');
  }
  res.render('signup', { title: 'Sign Up - ShopRelic', error: null });
});

// --- POST /signup ---
app.post('/signup', (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  if (!name || !email || !password) {
    return res.render('signup', { title: 'Sign Up - ShopRelic', error: 'All fields are required' });
  }

  if (password !== confirmPassword) {
    return res.render('signup', { title: 'Sign Up - ShopRelic', error: 'Passwords do not match' });
  }

  if (users.find(u => u.email === email)) {
    return res.render('signup', { title: 'Sign Up - ShopRelic', error: 'An account with this email already exists' });
  }

  const newUser = {
    id: nextUserId++,
    name,
    email,
    password
  };
  users.push(newUser);
  sessions[req.sessionId] = { userId: newUser.id };
  res.redirect('/');
});

// --- POST /logout ---
app.post('/logout', (req, res) => {
  delete sessions[req.sessionId];
  res.redirect('/');
});

// --- GET /checkout ---
app.get('/checkout', (req, res) => {
  if (!req.user) {
    return res.redirect('/login');
  }

  const cartItems = req.cart.map(item => {
    const product = products.find(p => p.id === item.productId);
    return { product, quantity: item.quantity };
  }).filter(item => item.product);

  if (cartItems.length === 0) {
    return res.redirect('/cart');
  }

  const subtotal = cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

  res.render('checkout', { title: 'Checkout - ShopRelic', cartItems, subtotal, error: null });
});

// --- POST /checkout ---
app.post('/checkout', (req, res) => {
  if (!req.user) {
    return res.redirect('/login');
  }

  if (BREAK_CHECKOUT) {
    const cartItems = req.cart.map(item => {
      const product = products.find(p => p.id === item.productId);
      return { product, quantity: item.quantity };
    }).filter(item => item.product);
    const subtotal = cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
    return res.status(500).render('checkout', {
      title: 'Checkout - ShopRelic',
      cartItems,
      subtotal,
      error: 'Payment processing failed: Gateway timeout'
    });
  }

  const cartItems = req.cart.map(item => {
    const product = products.find(p => p.id === item.productId);
    return { product, quantity: item.quantity };
  }).filter(item => item.product);

  if (cartItems.length === 0) {
    return res.redirect('/cart');
  }

  const total = cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

  const order = {
    id: nextOrderId++,
    userId: req.user.id,
    items: cartItems.map(item => ({
      productId: item.product.id,
      name: item.product.name,
      price: item.product.price,
      quantity: item.quantity
    })),
    total: total,
    date: new Date().toISOString(),
    status: 'Confirmed',
    shipping: {
      name: req.body.shippingName,
      address: req.body.address,
      city: req.body.city,
      state: req.body.state,
      zip: req.body.zip
    }
  };

  orders.push(order);

  // Clear cart
  carts[req.sessionId] = [];

  res.redirect(`/order-confirmation/${order.id}`);
});

// --- GET /order-confirmation/:id ---
app.get('/order-confirmation/:id', (req, res) => {
  const order = orders.find(o => o.id === parseInt(req.params.id));
  if (!order) {
    return res.status(404).send('Order not found');
  }

  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 5);

  res.render('order-confirmation', {
    title: 'Order Confirmed - ShopRelic',
    order,
    deliveryDate: deliveryDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
  });
});

// --- GET /profile ---
app.get('/profile', (req, res) => {
  if (!req.user) {
    return res.redirect('/login');
  }

  let userOrders;
  if (BREAK_PROFILE) {
    userOrders = [];
  } else {
    userOrders = orders.filter(o => o.userId === req.user.id);
  }

  res.render('profile', { title: 'My Profile - ShopRelic', userOrders });
});

// --- GET /api/health ---
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// --- Start server ---
app.listen(PORT, () => {
  console.log(`ShopRelic is running at http://localhost:${PORT}`);
  if (BREAK_CHECKOUT) console.log('[FLAG] BREAK_CHECKOUT is enabled - checkout will fail');
  if (BREAK_PROFILE) console.log('[FLAG] BREAK_PROFILE is enabled - profile orders will appear empty');
  if (FLAKY_SEARCH) console.log('[FLAG] FLAKY_SEARCH is enabled - search may be slow');
});
