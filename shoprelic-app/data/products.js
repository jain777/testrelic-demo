const products = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    price: 79.99,
    description: "Premium over-ear wireless headphones with active noise cancellation, 30-hour battery life, and ultra-comfortable memory foam ear cushions. Features Bluetooth 5.3 for seamless connectivity and built-in microphone for hands-free calls.",
    image: "https://placehold.co/400x400/e2e8f0/1e293b?text=Headphones",
    category: "Electronics",
    rating: 4.5,
    reviewCount: 234,
    reviews: [
      { author: "Sarah M.", rating: 5, text: "Best headphones I've ever owned. The noise cancellation is incredible for my daily commute." },
      { author: "James K.", rating: 4, text: "Great sound quality and comfortable fit. Battery life is impressive. Wish the case was a bit smaller." },
      { author: "Priya R.", rating: 5, text: "Crystal clear audio and the Bluetooth connection is rock solid. Highly recommend!" }
    ]
  },
  {
    id: 2,
    name: "Organic Cotton T-Shirt",
    price: 29.99,
    description: "Classic fit crew-neck t-shirt made from 100% certified organic cotton. Pre-shrunk, breathable fabric with reinforced stitching for lasting durability. Available in multiple earth-tone colors.",
    image: "https://placehold.co/400x400/e2e8f0/1e293b?text=T-Shirt",
    category: "Clothing",
    rating: 4.2,
    reviewCount: 187,
    reviews: [
      { author: "Alex T.", rating: 4, text: "Super soft fabric and fits true to size. Love that it's organic cotton." },
      { author: "Michelle W.", rating: 5, text: "My new favorite everyday shirt. Washes well and doesn't shrink." },
      { author: "David L.", rating: 4, text: "Great quality for the price. The color is exactly as shown online." }
    ]
  },
  {
    id: 3,
    name: "Smart Home Security Camera",
    price: 129.99,
    description: "1080p HD indoor/outdoor security camera with night vision, two-way audio, and motion detection alerts. Works with Alexa and Google Assistant. Includes free cloud storage for 7 days of recordings.",
    image: "https://placehold.co/400x400/e2e8f0/1e293b?text=Camera",
    category: "Electronics",
    rating: 4.3,
    reviewCount: 412,
    reviews: [
      { author: "Robert F.", rating: 5, text: "Easy setup and the video quality is excellent. Night vision works great." },
      { author: "Lisa N.", rating: 4, text: "Good camera for the price. Motion alerts are reliable and the app is intuitive." },
      { author: "Tom H.", rating: 4, text: "Solid security camera. Love the two-way audio feature for talking to delivery drivers." }
    ]
  },
  {
    id: 4,
    name: "Stainless Steel Water Bottle",
    price: 24.99,
    description: "Double-wall vacuum insulated 32oz water bottle that keeps drinks cold for 24 hours or hot for 12 hours. BPA-free, leak-proof lid with carrying loop. Durable powder-coated finish.",
    image: "https://placehold.co/400x400/e2e8f0/1e293b?text=Bottle",
    category: "Sports",
    rating: 4.7,
    reviewCount: 531,
    reviews: [
      { author: "Emma S.", rating: 5, text: "Keeps my water ice cold all day at the gym. The powder coating prevents condensation." },
      { author: "Marcus J.", rating: 5, text: "Finally a water bottle that doesn't leak in my bag. Great insulation too." },
      { author: "Karen P.", rating: 4, text: "Love this bottle. Sturdy construction and the lid is easy to open one-handed." }
    ]
  },
  {
    id: 5,
    name: "Ceramic Plant Pot Set",
    price: 39.99,
    description: "Set of 3 modern ceramic plant pots with drainage holes and bamboo saucers. Minimalist matte finish in white, gray, and terracotta. Perfect for succulents, herbs, or small houseplants.",
    image: "https://placehold.co/400x400/e2e8f0/1e293b?text=Plant+Pots",
    category: "Home",
    rating: 4.4,
    reviewCount: 156,
    reviews: [
      { author: "Nina C.", rating: 5, text: "These pots look so elegant on my windowsill. The bamboo saucers are a nice touch." },
      { author: "Chris B.", rating: 4, text: "Good quality ceramics. The drainage holes work perfectly for my succulents." },
      { author: "Ashley G.", rating: 4, text: "Beautiful minimalist design. They're the perfect size for small to medium plants." }
    ]
  },
  {
    id: 6,
    name: "Running Shoes - UltraBoost",
    price: 149.99,
    description: "Lightweight performance running shoes with responsive cushioning and adaptive knit upper. Engineered mesh provides breathability while the rubber outsole delivers exceptional grip on any surface.",
    image: "https://placehold.co/400x400/e2e8f0/1e293b?text=Shoes",
    category: "Sports",
    rating: 4.6,
    reviewCount: 389,
    reviews: [
      { author: "Jake R.", rating: 5, text: "These shoes feel like running on clouds. My best purchase this year." },
      { author: "Samantha D.", rating: 4, text: "Very comfortable for long runs. The knit upper keeps my feet cool." },
      { author: "Mike T.", rating: 5, text: "Great traction on wet pavement. Lightweight and supportive at the same time." }
    ]
  },
  {
    id: 7,
    name: "Portable Bluetooth Speaker",
    price: 59.99,
    description: "Waterproof IPX7 portable speaker with 360-degree sound and deep bass. 20-hour battery life, built-in microphone, and the ability to pair two speakers for stereo sound. Compact and rugged design.",
    image: "https://placehold.co/400x400/e2e8f0/1e293b?text=Speaker",
    category: "Electronics",
    rating: 4.4,
    reviewCount: 278,
    reviews: [
      { author: "Daniel W.", rating: 5, text: "Took this to the beach and the pool - sounds amazing and truly waterproof." },
      { author: "Rachel M.", rating: 4, text: "Impressive bass for such a small speaker. Battery lasts all weekend." },
      { author: "Kevin S.", rating: 4, text: "Great sound quality and the pairing feature for stereo is awesome." }
    ]
  },
  {
    id: 8,
    name: "Linen Throw Blanket",
    price: 54.99,
    description: "Luxuriously soft stonewashed linen throw blanket, 50x70 inches. Breathable and temperature-regulating for year-round comfort. Pre-washed for a relaxed, lived-in texture. Machine washable.",
    image: "https://placehold.co/400x400/e2e8f0/1e293b?text=Blanket",
    category: "Home",
    rating: 4.8,
    reviewCount: 203,
    reviews: [
      { author: "Olivia H.", rating: 5, text: "The softest throw I've ever felt. Gets even better after each wash." },
      { author: "Brian C.", rating: 5, text: "Perfect weight for the couch. Not too heavy, not too light." },
      { author: "Laura K.", rating: 4, text: "Beautiful texture and color. Looks great draped over our sofa." }
    ]
  },
  {
    id: 9,
    name: "Yoga Mat - Premium",
    price: 44.99,
    description: "Extra thick 6mm non-slip yoga mat with alignment markers. Made from eco-friendly TPE material, free of PVC and latex. Includes carrying strap. Provides excellent cushioning for joints.",
    image: "https://placehold.co/400x400/e2e8f0/1e293b?text=Yoga+Mat",
    category: "Sports",
    rating: 4.5,
    reviewCount: 167,
    reviews: [
      { author: "Jessica L.", rating: 5, text: "The alignment markers are so helpful for my practice. Great grip even when sweaty." },
      { author: "Raj P.", rating: 4, text: "Thick and comfortable. Nice that it's eco-friendly too." },
      { author: "Anna W.", rating: 5, text: "Best yoga mat I've owned. The carrying strap makes it easy to bring to class." }
    ]
  },
  {
    id: 10,
    name: "Denim Jacket - Classic Fit",
    price: 89.99,
    description: "Timeless classic-fit denim jacket crafted from premium heavyweight cotton denim. Features button-flap chest pockets, adjustable waist tabs, and a slightly faded vintage wash. A wardrobe essential.",
    image: "https://placehold.co/400x400/e2e8f0/1e293b?text=Jacket",
    category: "Clothing",
    rating: 4.3,
    reviewCount: 142,
    reviews: [
      { author: "Tyler N.", rating: 5, text: "Perfect fit and the denim quality is top-notch. Already getting compliments." },
      { author: "Maria G.", rating: 4, text: "Love the vintage wash color. Runs slightly large, consider sizing down." },
      { author: "Steve A.", rating: 4, text: "Great everyday jacket. The denim is heavy enough to feel substantial but not stiff." }
    ]
  },
  {
    id: 11,
    name: "LED Desk Lamp",
    price: 42.99,
    description: "Modern LED desk lamp with 5 brightness levels and 3 color temperature modes. Features USB charging port, flexible gooseneck, and touch controls. Energy-efficient LEDs last up to 50,000 hours.",
    image: "https://placehold.co/400x400/e2e8f0/1e293b?text=Desk+Lamp",
    category: "Home",
    rating: 4.6,
    reviewCount: 198,
    reviews: [
      { author: "Paul D.", rating: 5, text: "The USB charging port is a game changer. Perfect for my desk setup." },
      { author: "Jennifer F.", rating: 4, text: "Great lamp with adjustable brightness. The warm light mode is perfect for reading." },
      { author: "Sean M.", rating: 5, text: "Sleek design and very functional. Love being able to adjust color temperature." }
    ]
  },
  {
    id: 12,
    name: "Fleece Pullover Hoodie",
    price: 49.99,
    description: "Ultra-soft brushed fleece pullover hoodie with kangaroo pocket and adjustable drawstring hood. Ribbed cuffs and hem for a snug fit. Perfect for layering or casual everyday wear.",
    image: "https://placehold.co/400x400/e2e8f0/1e293b?text=Hoodie",
    category: "Clothing",
    rating: 4.4,
    reviewCount: 256,
    reviews: [
      { author: "Zach T.", rating: 5, text: "Incredibly cozy. I've been wearing this every day since it arrived." },
      { author: "Megan R.", rating: 4, text: "Great quality fleece that doesn't pill. The fit is perfect." },
      { author: "Carlos V.", rating: 5, text: "Best hoodie I've ever bought. The brushed fleece interior is so warm and soft." }
    ]
  }
];

module.exports = products;
