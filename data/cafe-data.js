export const CAFE_INFO = {
  name: "Shri Ram's Siddu Cafe",
  hindiName: "श्री राम'स सिद्दू कैफे ऋषिकेश",
  alsoKnownAs: "Siya Ram's Siddu Cafe (on Swiggy & Zomato)",
  tagline: "Taste of Himachal",
  ownerDescription:
    "Authentic Himachali flavours, served with love. Famous for delicious Siddu, fresh Kulchas, Momos & more. A cozy little place where every bite feels like home.",
  phoneDisplay: "+91 97364 81476",
  phoneHref: "tel:+919736481476",
  whatsappNumber: "919736481476",
  fssai: "22625028000397",
  address:
    "Shop No. 2, Aswal Ji Market, AIIMS Road, near Seema Dental College, Aam Bag, IDPL Colony (Labor Colony), Rishikesh, Uttarakhand 249203",
  plusCode: "37CG+MR Rishikesh, Uttarakhand",
  coordinates: { lat: 30.0716462, lng: 78.2770477 },
  links: {
    googleMaps:
      "https://www.google.com/maps/place/Shri+Ram's+Siddu+Cafe+Rishikesh/@30.0716462,78.2770477,17z/data=!3m1!4b1!4m6!3m5!1s0x39093f0e67710933:0x273e36208c7c95ce!8m2!3d30.0716462!4d78.2770477!16s%2Fg%2F11x77q2zfv",
    googleShare: "https://share.google/NRIhGPSoeqmj6R6YG",
    zomato: "http://zoma.to/r/22057847",
    swiggy:
      "https://www.swiggy.com/city/rishikesh/siya-rams-siddu-cafe-ram-jhula-rest1227601"
  },
  hours: {
    walkIn: "10:00 AM – 11:00 PM (Daily)",
    deliveryApps: "10:00 AM – 12:00 Midnight (Sun from 10:30 AM)"
  },
  ratings: [
    { platform: "Google", score: "4.7", detail: "91 reviews (81 five-star)" },
    { platform: "Zomato", score: "4.5", detail: "530 delivery ratings" },
    { platform: "Swiggy", score: "4.3", detail: "133 ratings" }
  ],
  highlights: [
    "100% Pure Vegetarian",
    "Women-Owned Business",
    "Dine-In, Takeaway & Delivery",
    "Wheelchair-Accessible Entrance & Seating",
    "Budget Friendly (₹1–₹200 per person)"
  ]
};

export const MENU_CATEGORIES = [
  { id: "all", label: "All Items" },
  { id: "siddu", label: "Himachali Siddu" },
  { id: "momos", label: "Atta Momos" },
  { id: "fast-food", label: "Fast Food & Chinese" },
  { id: "parantha", label: "Parantha" },
  { id: "naan", label: "Naan & Chur Chur" },
  { id: "kulcha", label: "Kulcha" },
  { id: "sandwich", label: "Sandwich" },
  { id: "soup", label: "Soup" },
  { id: "beverages", label: "Beverages" },
  { id: "combos", label: "Combos & Sides" }
];

export const MENU_ITEMS = [
  // Himachali Siddu
  {
    id: "salty-siddu",
    name: "Salty Siddu",
    category: "siddu",
    price: 110,
    bestseller: true,
    rating: "4.5★",
    image: "assets/images/salty-siddu.jpg",
    description:
      "Traditional steamed Himachali wheat bread stuffed with spiced walnut, poppy seed, peanut & lentil filling, served hot with desi ghee and fresh chutneys."
  },
  {
    id: "sweet-siddu",
    name: "Sweet Siddu",
    category: "siddu",
    price: 120,
    bestseller: false,
    rating: "3.7★",
    image: "assets/images/sweet-siddu.jpg",
    description:
      "Soft steamed Himachali bread filled with comforting jaggery and nuts, served warm."
  },
  {
    id: "siddu-combo",
    name: "Siddu Combo (Salty & Sweet)",
    category: "combos",
    price: 260,
    priceNote: "Online Menu",
    bestseller: true,
    image: "assets/images/siddu-combo.jpg",
    description:
      "A wholesome combo of both fluffy steamed Salty Siddu and Sweet Siddu with flavorful fillings and chutneys."
  },

  // Momos
  {
    id: "veg-momos",
    name: "Veg Atta Momos (8 Pcs)",
    category: "momos",
    price: 70,
    bestseller: true,
    rating: "4.4★",
    image: "assets/images/veg-momos.jpg",
    description:
      "Soft steamed whole-wheat (atta) momos stuffed with seasoned fresh vegetables, served with spicy red chutney."
  },
  {
    id: "paneer-momos",
    name: "Paneer Atta Momos (8 Pcs)",
    category: "momos",
    price: 80,
    bestseller: true,
    image: "assets/images/paneer-momos.jpg",
    description:
      "Steamed whole-wheat momos filled with soft, flavourful grated paneer stuffing."
  },
  {
    id: "veg-fried-momos",
    name: "Veg Fried Atta Momos (8 Pcs)",
    category: "momos",
    price: 90,
    bestseller: false,
    rating: "4.0★",
    image: "assets/images/veg-fried-momos.jpg",
    description: "Crispy golden-fried whole-wheat veg momos served hot with chutney."
  },
  {
    id: "paneer-fried-momos",
    name: "Paneer Fried Atta Momos (8 Pcs)",
    category: "momos",
    price: 100,
    bestseller: false,
    image: "assets/images/paneer-fried-momos.jpg",
    description: "Golden-fried atta momos stuffed with juicy spiced paneer filling."
  },
  {
    id: "veg-kurkure-momos",
    name: "Veg Kurkure Atta Momos (8 Pcs)",
    category: "momos",
    price: 120,
    bestseller: true,
    image: "assets/images/veg-kurkure-momos.jpg",
    description: "Extra crispy crunchy-coated veg atta momos with a bold spicy kick."
  },
  {
    id: "paneer-kurkure-momos",
    name: "Paneer Kurkure Atta Momos (8 Pcs)",
    category: "momos",
    price: 150,
    priceNote: "Online Menu",
    bestseller: true,
    image: "assets/images/paneer-kurkure-momos.jpg",
    description: "Extra crispy crunchy-coated paneer atta momos served with spicy chutney."
  },

  // Fast Food & Chinese
  {
    id: "vada-pav",
    name: "Vada Pav",
    category: "fast-food",
    price: 60,
    bestseller: true,
    rating: "4.4★",
    image: "assets/images/vada-pav.jpg",
    description:
      "Mumbai-style crispy spiced potato vada tucked into a soft buttered pav with chutney."
  },
  {
    id: "cheese-vada-pav",
    name: "Cheese Vada Pav",
    category: "fast-food",
    price: 90,
    priceNote: "Online Menu",
    bestseller: false,
    image: "assets/images/cheese-vada-pav.jpg",
    description: "Buttery pav stuffed with hot crispy vada and melted cheese."
  },
  {
    id: "potato-twister",
    name: "Potato Twister",
    category: "fast-food",
    price: 80,
    bestseller: true,
    rating: "4.5★",
    image: "assets/images/potato-twister.jpg",
    description: "Crispy spiral-cut fried potato on a skewer, seasoned with tangy spices."
  },
  {
    id: "veg-chowmein",
    name: "Veg Chowmein",
    category: "fast-food",
    price: 80,
    priceNote: "Zomato Menu",
    bestseller: false,
    image: "assets/images/veg-chowmein.jpg",
    description:
      "Wok-tossed noodles with crunchy fresh vegetables, aromatic spices, and sauces."
  },
  {
    id: "veg-fried-rice",
    name: "Veg Fried Rice",
    category: "fast-food",
    price: 90,
    priceNote: "Zomato Menu",
    bestseller: false,
    rating: "5.0★",
    image: "assets/images/veg-fried-rice.jpg",
    description:
      "Fresh vegetable ginger-garlic fried rice tossed with spices and served with spicy chutney."
  },

  // Sandwich (from Cafe Menu Card)
  {
    id: "veg-sandwich",
    name: "Veg Sandwich",
    category: "sandwich",
    price: 70,
    bestseller: false,
    description: "Freshly toasted vegetable sandwich from our cafe counter."
  },
  {
    id: "veg-cheese-sandwich",
    name: "Veg Cheese Sandwich",
    category: "sandwich",
    price: 100,
    bestseller: false,
    description: "Toasted veg sandwich loaded with melted cheese."
  },

  // Soup
  {
    id: "veg-soup",
    name: "Fresh Veg Soup",
    category: "soup",
    price: 60,
    bestseller: false,
    image: "assets/images/veg-soup.jpg",
    description: "Light, warm, and comforting vegetable soup made fresh daily."
  },
  {
    id: "hot-sour-soup",
    name: "Hot & Sour Soup",
    category: "soup",
    price: 60,
    bestseller: false,
    image: "assets/images/hot-sour-soup.jpg",
    description: "Tangy and spicy vegetable hot & sour soup served piping hot."
  },
  {
    id: "manchow-soup",
    name: "Veg Manchow Soup",
    category: "soup",
    price: 70,
    bestseller: false,
    image: "assets/images/manchow-soup.jpg",
    description: "Flavorful Indo-Chinese veg soup best enjoyed fresh and hot."
  },
  {
    id: "noodle-soup",
    name: "Veg Noodle Soup",
    category: "soup",
    price: 80,
    bestseller: true,
    rating: "4.5★",
    image: "assets/images/noodle-soup.jpg",
    description: "Comforting hot noodle soup with fresh veggies and light spices."
  },

  // Parantha (Tawa & Tandoor from Cafe Menu Card)
  {
    id: "aloo-parantha",
    name: "Aloo Parantha",
    category: "parantha",
    price: 50,
    variants: [
      { label: "Tawa", price: 50 },
      { label: "Tandoor", price: 60 }
    ],
    bestseller: false,
    rating: "4.3★",
    image: "assets/images/aloo-paratha.jpg",
    description: "Soft stuffed potato paratha cooked hot on Tawa (₹50) or in Tandoor (₹60)."
  },
  {
    id: "onion-parantha",
    name: "Onion (Pyaz) Parantha",
    category: "parantha",
    price: 60,
    variants: [
      { label: "Tawa", price: 60 },
      { label: "Tandoor", price: 70 }
    ],
    bestseller: false,
    image: "assets/images/pyaz-paratha.jpg",
    description: "Aromatic seasoned onion-stuffed paratha on Tawa (₹60) or Tandoor (₹70)."
  },
  {
    id: "gobhi-parantha",
    name: "Gobhi Parantha",
    category: "parantha",
    price: 70,
    variants: [
      { label: "Tawa", price: 70 },
      { label: "Tandoor", price: 80 }
    ],
    bestseller: false,
    image: "assets/images/gobhi-paratha.jpg",
    description: "Flaky golden paratha stuffed with spiced cauliflower — Tawa (₹70) or Tandoor (₹80)."
  },
  {
    id: "mix-parantha",
    name: "Mix Parantha",
    category: "parantha",
    price: 70,
    variants: [
      { label: "Tawa", price: 70 },
      { label: "Tandoor", price: 80 }
    ],
    bestseller: false,
    image: "assets/images/mix-paratha.jpg",
    description: "Hearty mixed vegetable stuffed paratha — Tawa (₹70) or Tandoor (₹80)."
  },
  {
    id: "paneer-parantha",
    name: "Paneer Parantha",
    category: "parantha",
    price: 80,
    variants: [
      { label: "Tawa", price: 80 },
      { label: "Tandoor", price: 90 }
    ],
    bestseller: false,
    image: "assets/images/paneer-paratha.jpg",
    description: "Rich spiced grated paneer stuffed paratha — Tawa (₹80) or Tandoor (₹90)."
  },
  {
    id: "aloo-pyaz-cheese-parantha",
    name: "Aloo Pyaz Cheese Parantha",
    category: "parantha",
    price: 100,
    variants: [
      { label: "Tawa", price: 100 },
      { label: "Tandoor", price: 110 }
    ],
    bestseller: false,
    image: "assets/images/aloo-pyaz-cheese-paratha.jpg",
    description: "Potato, onion & melted cheese stuffed paratha — Tawa (₹100) or Tandoor (₹110)."
  },

  // Naan & Chur Chur (Cafe Menu Card)
  {
    id: "butter-naan",
    name: "Butter Naan",
    category: "naan",
    price: 40,
    bestseller: false,
    description: "Freshly baked soft tandoori naan brushed with butter."
  },
  {
    id: "stuffed-naan",
    name: "Stuffed Naan",
    category: "naan",
    price: 60,
    bestseller: false,
    description: "Tandoori naan stuffed with spiced potato & herbs."
  },
  {
    id: "paneer-cheese-naan",
    name: "Paneer Cheese Naan",
    category: "naan",
    price: 90,
    bestseller: false,
    description: "Tandoori naan generously stuffed with paneer and cheese."
  },
  {
    id: "aloo-garlic-chur-chur",
    name: "Aloo Garlic Chur Chur Naan",
    category: "naan",
    price: 110,
    bestseller: false,
    description: "Flaky crushed tandoori naan with spiced aloo and roasted garlic."
  },
  {
    id: "stuffed-chur-chur",
    name: "Stuffed Chur Chur Naan",
    category: "naan",
    price: 120,
    bestseller: false,
    description: "Crisp layered chur chur naan served with tasty chole."
  },
  {
    id: "paneer-chur-chur",
    name: "Paneer Chur Chur Naan",
    category: "naan",
    price: 130,
    bestseller: false,
    description: "Crisp buttered chur chur naan with rich paneer stuffing."
  },
  {
    id: "paneer-cheese-chur-chur",
    name: "Paneer Cheese Chur Chur Naan",
    category: "naan",
    price: 150,
    bestseller: false,
    description: "Indulgent chur chur naan loaded with paneer and cheese."
  },

  // Kulcha (Cafe Menu Card)
  {
    id: "aloo-kulcha",
    name: "Aloo Kulcha",
    category: "kulcha",
    price: 100,
    bestseller: false,
    description: "Crisp tandoori kulcha stuffed with spiced mashed potato."
  },
  {
    id: "aloo-garlic-kulcha",
    name: "Aloo Garlic Kulcha",
    category: "kulcha",
    price: 110,
    bestseller: false,
    description: "Tandoori potato kulcha infused with fresh garlic flavour."
  },
  {
    id: "mix-veg-kulcha",
    name: "Mix Veg Kulcha",
    category: "kulcha",
    price: 130,
    bestseller: false,
    description: "Flaky baked kulcha filled with spiced mixed vegetables."
  },
  {
    id: "paneer-kulcha",
    name: "Paneer Kulcha",
    category: "kulcha",
    price: 140,
    bestseller: false,
    description: "Crisp golden kulcha stuffed with seasoned paneer."
  },
  {
    id: "cheese-paneer-kulcha",
    name: "Cheese Paneer Kulcha",
    category: "kulcha",
    price: 150,
    bestseller: false,
    description: "Freshly baked kulcha stuffed with paneer and melted cheese."
  },
  {
    id: "jumbo-kulcha",
    name: "Jumbo Kulcha",
    category: "kulcha",
    price: 220,
    bestseller: false,
    description: "Hearty jumbo-sized signature stuffed kulcha."
  },

  // Beverages
  {
    id: "tea",
    name: "Tea (Chai)",
    category: "beverages",
    price: 20,
    bestseller: false,
    description: "Hot freshly brewed Indian chai."
  },
  {
    id: "masala-tea",
    name: "Masala Tea",
    category: "beverages",
    price: 25,
    bestseller: false,
    description: "Aromatic spiced masala chai brewed fresh."
  },
  {
    id: "coffee",
    name: "Hot Coffee",
    category: "beverages",
    price: 40,
    bestseller: false,
    description: "Warm classic cafe coffee."
  },
  {
    id: "cold-coffee",
    name: "Cold Coffee",
    category: "beverages",
    price: 70,
    bestseller: false,
    image: "assets/images/cold-coffee.jpg",
    description: "Thick, creamy, and chilled cafe-style cold coffee."
  },
  {
    id: "sweet-lassi",
    name: "Sweet Lassi",
    category: "beverages",
    price: 60,
    bestseller: false,
    image: "assets/images/sweet-lassi.jpg",
    description: "Thick, creamy, and refreshing traditional sweet lassi."
  },
  {
    id: "buttermilk",
    name: "Buttermilk (Chaach)",
    category: "beverages",
    price: 80,
    priceNote: "Zomato Menu",
    bestseller: false,
    image: "assets/images/buttermilk.jpg",
    description: "Cooling buttermilk blended with a hint of salt and aromatic spices."
  },

  // Combos & Accompaniments
  {
    id: "veg-momos-meal",
    name: "Veg Momos Meal (1 Box)",
    category: "combos",
    price: 149,
    priceNote: "Online Menu",
    bestseller: false,
    image: "assets/images/veg-momos-meal.jpg",
    description: "Soft veg atta momos (8 pieces) paired with hot veg soup."
  },
  {
    id: "paneer-momos-meal",
    name: "Paneer Momos Meal (1 Box)",
    category: "combos",
    price: 179,
    priceNote: "Online Menu",
    bestseller: false,
    image: "assets/images/paneer-momos-meal.jpg",
    description: "Paneer momos (8 pieces) paired with veg soup and chutney."
  },
  {
    id: "momos-feast-meal",
    name: "Momos Feast Meal (Family, 16 Pcs)",
    category: "combos",
    price: 210,
    priceNote: "Online Menu",
    bestseller: false,
    image: "assets/images/momos-feast.jpg",
    description: "Veg & paneer momos (16 pieces) with soup, ideal for sharing."
  },
  {
    id: "green-chutney",
    name: "Extra Green Chutney",
    category: "combos",
    price: 10,
    priceNote: "Zomato Menu",
    bestseller: false,
    image: "assets/images/green-chutney.jpg",
    description: "Fresh herb green chutney that pairs wonderfully with Siddu & Paranthas."
  },
  {
    id: "orange-chutney",
    name: "Extra Orange Chutney",
    category: "combos",
    price: 10,
    priceNote: "Zomato Menu",
    bestseller: false,
    image: "assets/images/orange-chutney.jpg",
    description: "Signature spicy orange chutney specially prepared for Himachali Siddu."
  },
  {
    id: "red-chutney",
    name: "Extra Red Chutney",
    category: "combos",
    price: 10,
    priceNote: "Zomato Menu",
    bestseller: false,
    image: "assets/images/red-chutney.jpg",
    description: "Fiery red chilli chutney made to complement momos."
  }
];

export const POSITIVE_REVIEWS = [
  {
    author: "NITIN DHIMAN",
    rating: 5,
    date: "Recently",
    tag: "siddu",
    meta: "Food 5/5 · Service 5/5 · Atmosphere 5/5",
    text: "Tried both Namkeen and Sweet Siddu for the very first time today, and it was an amazing culinary experience! The steamed bread was super soft and fresh. The savory Siddu had a rich, flavorful, and well-spiced filling that paired wonderfully with chutney and ghee, while the sweet version had the perfect comforting sweetness of jaggery and nuts. Authentic, wholesome, and definitely worth trying!"
  },
  {
    author: "priya aryan",
    rating: 5,
    date: "9 months ago",
    tag: "siddu",
    meta: "Google Review",
    text: "Two guys at this little spot slinging the most heavenly siddu. No basic dal or just walnuts and khaskhas—it's a killer mix of all that plus peanuts, with two bomb chutneys. Hands down one of the best I've had!"
  },
  {
    author: "Sandhli Thakur",
    rating: 5,
    date: "1 year ago",
    tag: "momos",
    meta: "Food 5/5 · Service 5/5 · Atmosphere 5/5",
    text: "If you're looking for a truly authentic taste experience in Rishikesh, you should definitely try Siddu Food Shop. The Siddus are made in the authentic hill style – soft, fluffy, and the filling is so tasty that you'll be craving more after just one bite. Their atta momos are also a healthy and delicious option – light, fresh, and utterly home-style."
  },
  {
    author: "CHANDRA MOHAN SINGH RAWAT",
    rating: 5,
    date: "5 months ago",
    tag: "momos",
    meta: "₹1–200 · Wait time: Up to 10 min",
    text: "I absolutely loved the momo and siddu here! Everything was so fresh and incredibly tasty, and you can tell they keep things spotless. Highly recommend!"
  },
  {
    author: "keshab dutt joshi",
    rating: 5,
    date: "3 weeks ago",
    tag: "momos",
    meta: "Food 5/5 · Service 5/5 · Atmosphere 4/5",
    text: "One of the best momos in Rishikesh and the siddu filling is just very comforting. If you want to try something different, do give this a shot."
  },
  {
    author: "Sachin bhatt",
    rating: 5,
    date: "1 month ago",
    tag: "kulcha",
    meta: "Google Review",
    text: "I ate Chur Chur Naan and Kulcha here today.. they were made very well, especially their Chole is very tasty and I also liked their Veg Aata Momos, overall it was fantastic taste."
  },
  {
    author: "mr. manjeet",
    rating: 5,
    date: "1 month ago",
    tag: "siddu",
    meta: "Dinner · Google Review",
    text: "I had eaten Siddu in Himachal, never expected to eat anything better than that… When I ate it in Rishikesh, it tasted the best ever."
  },
  {
    author: "Mayur Backup",
    rating: 5,
    date: "2 months ago",
    tag: "momos",
    meta: "Swiggy Order",
    text: "I ordered from this cafe via Swiggy and it was so good that I had to land up here to write this review. I had vegetable soup and kurkure momos. Highly recommendable."
  },
  {
    author: "Aahana Bisht",
    rating: 5,
    date: "1 month ago",
    tag: "ambiance",
    meta: "Lunch · ₹1–200",
    text: "The food was really good, especially siddu, staff was very nice and polite. Best cafe to visit in Rishikesh."
  },
  {
    author: "Gautam Sharma",
    rating: 5,
    date: "1 month ago",
    tag: "ambiance",
    meta: "Google Review",
    text: "Amazing food, great ambience and excellent service! Perfect place to chill with friends. Highly recommended!"
  },
  {
    author: "Akash Kashyap",
    rating: 5,
    date: "1 month ago",
    tag: "siddu",
    meta: "₹1–200",
    text: "Must try once....both sweet and salty siddhu, ultimate taste and healthy option."
  },
  {
    author: "RAJAT CHOUDHARY",
    rating: 5,
    date: "1 month ago",
    tag: "siddu",
    meta: "Google Review",
    text: "Exceptional taste of native Himachali Siddu.. Must visit place in Rishikesh."
  },
  {
    author: "Nidhi Patel",
    rating: 5,
    date: "1 year ago",
    tag: "ambiance",
    meta: "Google Review",
    text: "Amazing food very traditional Himachali comfort, tasty preparation and excellent quality. Also great behaviour talking with customers and such a good hearted family."
  },
  {
    author: "Sourabh Kumar",
    rating: 5,
    date: "11 months ago",
    tag: "ambiance",
    meta: "₹1–200",
    text: "They prepare with love and passion. You can feel the siddu vibes here like Himachal. Place is quiet and clean."
  },
  {
    author: "vyas rathaur",
    rating: 5,
    date: "1 year ago",
    tag: "ambiance",
    meta: "Vegetarian options · ₹1–200",
    text: "Very nice experience, good staff and hygienic food. Good staff and healthy, yummy food."
  },
  {
    author: "ANKUSH KUMAR",
    rating: 5,
    date: "3 months ago",
    tag: "ambiance",
    meta: "Brunch · Google Review",
    text: "Great ambiance, delicious food, and friendly service. Loved the vibe — definitely coming back."
  },
  {
    author: "monty patel",
    rating: 5,
    date: "Recently",
    tag: "siddu",
    meta: "Breakfast · ₹1–200",
    text: "Tried first time in Rishikesh, our family liked it most."
  },
  {
    author: "Yadunandan singh chouhan",
    rating: 5,
    date: "1 year ago",
    tag: "siddu",
    meta: "Lunch · ₹200–400",
    text: "Gone there with family and specially we love their siddu. The taste was so amazing."
  },
  {
    author: "Era Chaudhary",
    rating: 5,
    date: "1 year ago",
    tag: "siddu",
    meta: "Dine in · ₹200–400",
    text: "First time I tried Siddu at Siyaram Siddu Cafe. The taste was very good and very healthy food. Want to try again and again."
  },
  {
    author: "Anshika Goswami",
    rating: 5,
    date: "1 year ago",
    tag: "siddu",
    meta: "₹1–200",
    text: "Very best! One of the finest siddu I have tried in Rishikesh."
  },
  {
    author: "Ritesh",
    rating: 5,
    date: "1 month ago",
    tag: "siddu",
    meta: "Dinner · ₹1–200",
    text: "They are serving awesome siddu in Rishikesh, I really loved it."
  },
  {
    author: "Mintoo Jakhmola",
    rating: 5,
    date: "2 months ago",
    tag: "siddu",
    meta: "Food 5/5 · Service 5/5 · Atmosphere 4/5",
    text: "Siddu was very delicious. Highly recommended!"
  },
  {
    author: "Jivesh Kumar",
    rating: 5,
    date: "1 month ago",
    tag: "siddu",
    meta: "Google Review",
    text: "Amazing place to fill your empty stomach with lovely Siddu."
  },
  {
    author: "Kenil patel",
    rating: 5,
    date: "Recently",
    tag: "siddu",
    meta: "Google Review",
    text: "Awesome taste of authentic siddu."
  },
  {
    author: "Relaxing music",
    rating: 5,
    date: "2 months ago",
    tag: "siddu",
    meta: "₹1–200",
    text: "I tried Siddu here for the first time, I liked it very much, enjoyed the proper Himachali taste."
  },
  {
    author: "ravi sharma",
    rating: 5,
    date: "1 year ago",
    tag: "siddu",
    meta: "Google Review",
    text: "This place with siddu... and siddu is shandaar."
  },
  {
    author: "Aryan Kuliyal",
    rating: 5,
    date: "1 year ago",
    tag: "siddu",
    meta: "Google Review",
    text: "Mindblowing, I like this siddu."
  }
];

export const GALLERY_PHOTOS = [
  {
    src: "assets/images/hero-siddu.jpg",
    alt: "Steamed Himachali Siddu stuffed with walnuts and spices served with mint and orange chutneys",
    caption: "Signature Himachali Siddu with Two Chutneys"
  },
  {
    src: "assets/images/google-1.jpg",
    alt: "Shri Ram Siddu Cafe interior wall emblem and counter bar stools",
    caption: "Inside Shri Ram's Siddu Cafe, Rishikesh"
  },
  {
    src: "assets/images/google-7.jpg",
    alt: "Cafe interior banner reading Taste of Himachal, Pure Ingredients, Himachali Tradition",
    caption: "Pure Ingredients & Himachali Tradition"
  },
  {
    src: "assets/images/google-3.jpg",
    alt: "Fresh steamed Siddu served sliced on a traditional plate with green and orange chutney",
    caption: "Freshly Steamed Siddu Platter"
  },
  {
    src: "assets/images/google-6.jpg",
    alt: "Both Sweet and Salty Siddu served alongside the cafe menu card",
    caption: "Sweet & Salty Siddu Combo"
  },
  {
    src: "assets/images/google-8.jpg",
    alt: "Cozy seating counter corner with framed food art and plants",
    caption: "Cozy Corner Seating"
  },
  {
    src: "assets/images/gallery-zomato.webp",
    alt: "Close-up of soft steamed Siddu served with green and tangy orange chutney",
    caption: "Soft, Fluffy Steamed Siddu"
  },
  {
    src: "assets/images/hero-cover.jpg",
    alt: "Golden pan-roasted stuffed paranthas stacked in a woven basket",
    caption: "Hot Stuffed Tawa & Tandoor Paranthas"
  }
];
