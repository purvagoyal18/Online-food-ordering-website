const foodItem= [
{
    id: 1,
    name: 'Chicken Hot and Sour Soup',
    category : 'chinese',
    rating : 4.1,
    price: 199,
    img: 'images/chinese/chicken hot and sour soup.jpg',
    quantity: 1
},
{
    id: 2,
    name: 'Chicken Spring Rolls',
    category : 'chinese',
    rating : 4.3,
    price: 290,
    img: 'images/chinese/chicken spring rolls.jpg',
    quantity: 1
},
{
    id: 3,
    name: 'Dim Sums',
    category : 'chinese',
    rating : 4.0,
    price: 199,
    img: 'images/chinese/dim sums.jpg',
    quantity: 1
},
{
    id: 4,
    name: 'Honey Chilli Potato',
    category : 'chinese',
    rating : 3.9,
    price: 179,
    img: 'images/chinese/honey chilli potato.jpg',
    quantity: 1
},
{
    id: 5,
    name: 'Noodles',
    category : 'chinese',
    rating : 4.1,
    price: 110,
    img: 'images/chinese/noodles.jpg',
    quantity: 1
},
{
    id: 6,
    name: 'Szechwan Chilli Chicken',
    category : 'chinese',
    rating : 4.2,
    price: 370,
    img: 'images/chinese/Szechwan Chilli Chicken.jpg',
    quantity: 1
},
{
    id: 7,
    name: 'Veg Fried Rice',
    category : 'chinese',
    rating : 4.0,
    price: 115,
    img: 'images/chinese/veg fried rice.jpg',
    quantity: 1
},
{
    id: 8,
    name: 'Veg Hakka Noodles',
    category : 'chinese',
    rating : 3.8,
    price: 179,
    img: 'images/chinese/veg hakka noodles.jpg',
    quantity: 1
},
{
    id: 9,
    name: 'Veg Hot and Sour Soup',
    category : 'chinese',
    rating : 4.1,
    price: 150,
    img: 'images/chinese/veg hot and sour soup.jpg',
    quantity: 1
},
{
    id: 10,
    name: 'Veg Spring Rolls',
    category : 'chinese',
    rating : 4.4,
    price: 148,
    img: 'images/chinese/veg spring rolls.jpg',
    quantity: 1
},
{
    id: 11,
    name: 'Burrata Pizza',
    category : 'italian',
    rating : 4.2,
    price:545,
    img: 'images/italian/burrata pizza.jpg',
    quantity: 1
},
{
    id: 12,
    name: 'Margherita Pizza',
    category : 'italian',
    rating : 4.0,
    price:200,
    img: 'images/italian/margherita pizza.jpg',
    quantity: 1
},
{
    id: 13,
    name: 'Corn Pizza',
    category : 'italian',
    rating : 4.4,
    price:105,
    img: 'images/italian/corn pizza.jpg',
    quantity: 1
},
{
    id: 14,
    name: 'Mushroom Capsicum Pizza',
    category : 'italian',
    rating : 3.8,
    price:135,
    img: 'images/italian/mushroom capsicum pizza.jpg',
    quantity: 1
},
{
    id: 15,
    name: 'Paneer Onion Pizza',
    category : 'italian',
    rating : 3.9,
    price:159,
    img: 'images/italian/paneer onion pizza.jpg',
    quantity: 1
},
{
    id: 16,
    name: 'Pizza Mania',
    category : 'italian',
    rating : 4.2,
    price:299,
    img: 'images/italian/pizza mania.jpg',
    quantity: 1
},
{
    id: 17,
    name: 'Cheesy Beaf and Spinach Lasagne',
    category : 'italian',
    rating : 4.1,
    price:270,
    img: 'images/italian/cheesy beaf and spinach lasagne.jpg',
    quantity: 1
},
{
    id: 18,
    name: 'Classic Lasagne',
    category : 'italian',
    rating : 4.3,
    price:200,
    img: 'images/italian/classic lasagne.jpg',
    quantity: 1
},
{
    id: 19,
    name: 'Mushroom Spaghetti',
    category : 'italian',
    rating : 4.2,
    price:325,
    img: 'images/italian/mushroom spaghetti.jpg',
    quantity: 1
},
{
    id: 20,
    name: 'Spicy Tomato Spaghetti',
    category : 'italian',
    rating : 3.6,
    price:275,
    img: 'images/italian/spicy tomato spaghetti.jpg',
    quantity: 1
},
{
    id: 21,
    name: 'Red Sauce Pasta',
    category : 'italian',
    rating : 4.0,
    price:200,
    img: 'images/italian/red sauce pasta.jpeg',
    quantity: 1
},
{
    id: 22,
    name: 'White Sauce Pasta',
    category : 'italian',
    rating : 4.2,
    price:200,
    img: 'images/italian/white sauce pasta.jpg',
    quantity: 1
},
{
    id: 23,
    name: 'Coconut Rice',
    category : 'south-indian',
    rating : 4.2,
    price: 250,
    img: 'images/south indian/coconut rice.jpg',
    quantity: 1
},
{
    id: 24,
    name: 'Idli-Sambhar',
    category : 'south-indian',
    rating : 3.9,
    price: 130,
    img: 'images/south indian/idli.jpg',
    quantity: 1
},
{
    id: 25,
    name: 'Vada-sambhar',
    category : 'south-indian',
    rating : 4.0,
    price: 45,
    img: 'images/south indian/vada.jpg',
    quantity: 1
},
{
    id: 26,
    name: 'Masala Dos',
    category : 'south-indian',
    rating : 4.2,
    price: 175,
    img: 'images/south indian/masala dosa.jpg',
    quantity: 1
},
{
    id: 27,
    name: 'Plain Dosa',
    category : 'south-indian',
    rating : 4.0,
    price: 140,
    img: 'images/south indian/plain dosa.jpg',
    quantity: 1
},
{
    id: 28,
    name: 'Payasam',
    category : 'south-indian',
    rating : 4.2,
    price: 159,
    img: 'images/south indian/payasam.jpg',
    quantity: 1
},
{
    id: 29,
    name: 'Pongal',
    category : 'south-indian',
    rating : 4.3,
    price: 59,
    img: 'images/south indian/pongal.jpg',
    quantity: 1
},
{
    id: 30,
    name: 'Uttapam',
    category : 'south-indian',
    rating : 4.3,
    price: 93,
    img: 'images/south indian/uttapam.jpg',
    quantity: 1
},
{
    id:31,
    name: 'Aloo Paratha',
    category : 'north-indian',
    rating : 4.1,
    price: 55,
    img: 'images/north indian/aloo paratha.jpg',
    quantity: 1
},
{
    id:32,
    name: 'Onion Paratha',
    category : 'north-indian',
    rating : 4.2,
    price: 99,
    img: 'images/north indian/onion paratha.jpg',
    quantity: 1
},
{
    id:33,
    name: 'Butter Chicken',
    category : 'north-indian',
    rating : 4.0,
    price: 255,
    img: 'images/north indian/butter chicken.jpg',
    quantity: 1
},
{
    id:34,
    name: 'Egg Curry',
    category : 'north-indian',
    rating : 3.9,
    price: 120,
    img: 'images/north indian/egg curry.jpg',
    quantity: 1
},
{
    id:35,
    name: 'Butter Naan',
    category : 'north-indian',
    rating : 3.6,
    price: 56,
    img: 'images/north indian/butter naan.jpg',
    quantity: 1
},
{
    id:36,
    name: 'Plain Naan',
    category : 'north-indian',
    rating : 4.2,
    price: 40,
    img: 'images/north indian/plain naan.jpg',
    quantity: 1
},
{
    id:37,
    name: 'Tandoori Roti',
    category : 'north-indian',
    rating : 4.0,
    price: 20,
    img: 'images/north indian/tandoori roti.jpg',
    quantity: 1
},
{
    id:38,
    name: 'Tawa Roti',
    category : 'north-indian',
    rating : 4.1,
    price: 14,
    img: 'images/north indian/tawa roti.jpg',
    quantity: 1
},
{
    id:39,
    name: 'Chole Kulche',
    category : 'north-indian',
    rating : 4.4,
    price: 199,
    img: 'images/north indian/chole kulche.jpg',
    quantity: 1
},
{
    id:40,
    name: 'Dal Makhni',
    category : 'north-indian',
    rating : 4.1,
    price: 185,
    img: 'images/north indian/dal makhni.jpg ',
    quantity: 1
},
{
    id:41,
    name: 'Dal Tadka',
    category : 'north-indian',
    rating : 4.0,
    price: 110,
    img: 'images/north indian/dal tadka.jpg',
    quantity: 1
},
{
    id:42,
    name: 'Kadai Paneer',
    category : 'north-indian',
    rating : 4.2,
    price: 130,
    img: 'images/north indian/kadai paneer.jpg',
    quantity: 1
},
{
    id:43,
    name: 'Kashmiri Dum Aloo',
    category : 'north-indian',
    rating : 4.3,
    price: 190,
    img: 'images/north indian/kashmiri dum aloo.jpg',
    quantity: 1
},
{
    id:44,
    name: 'Mix Veg',
    category : 'north-indian',
    rating : 4.0,
    price: 158,
    img: 'images/north indian/mix veg.jpg',
    quantity: 1
},
{
    id:45,
    name: 'Rajma Chawal',
    category : 'north-indian',
    rating : 4.1,
    price: 199,
    img: 'images/north indian/rajma chawal.jpg',
    quantity: 1
},
{
    id:46,
    name: 'Kadhi Chawal',
    category : 'north-indian',
    rating : 4.2,
    price: 199,
    img: 'images/north indian/kadhi-chawal.jpg',
    quantity: 1
},
{
    id:47,
    name: 'Tea',
    category : 'beverages',
    rating : 4.7,
    price: 49,
    img: 'images/beverages/tea.jpg',
    quantity: 1
},
{
    id:48,
    name: 'Cold Coffee',
    category : 'beverages',
    rating : 4.1,
    price: 100,
    img: 'images/beverages/cold coffee.jpg',
    quantity: 1
},
{
    id:49,
    name: 'Cold Coffee with icecream',
    category : 'beverages',
    rating : 4.2,
    price: 180,
    img: 'images/beverages/cold coffee with icecream.jpg',
    quantity: 1
},
{
    id:50,
    name: 'Chocolate Cold Coffee',
    category : 'beverages',
    rating : 4.2,
    price: 120,
    img: 'images/beverages/chocolate cold coffee.jpg',
    quantity: 1
},
{
    id:51,
    name: 'Hazelnut Frappe',
    category : 'beverages',
    rating : 4.0,
    price: 119,
    img: 'images/beverages/hazelnut frappe.jpg',
    quantity: 1
},
{
    id:52,
    name: 'Hot Coffee',
    category : 'beverages',
    rating : 4.5,
    price: 55,
    img: 'images/beverages/hot coffee.jpg',
    quantity: 1
},
{
    id:53,
    name: 'Hot Coffee Latte(Caramel)',
    category : 'beverages',
    rating : 4.3,
    price: 120,
    img: 'images/beverages/hot coffee latte(caramel).jpg',
    quantity: 1
},
{
    id:54,
    name: 'Nutella Hot Coffee',
    category : 'beverages',
    rating : 4.0,
    price: 80,
    img: 'images/beverages/nutella hot coffee.jpg',
    quantity: 1
},
{
    id:55,
    name: 'Mango Milkshake',
    category : 'beverages',
    rating : 4.1,
    price: 89,
    img: 'images/beverages/mango milk shake.jpg',
    quantity: 1
},
{
    id:56,
    name: 'Oreo Milkshake',
    category : 'beverages',
    rating : 4.1,
    price: 95,
    img: 'images/beverages/oreo milkshake.jpg',
    quantity: 1
},
{
    id:57,
    name: 'Chocolate Milkshake',
    category : 'beverages',
    rating : 4.2,
    price: 90,
    img: 'images/beverages/chocolate milk shakes.jpg',
    quantity: 1
},
{
    id:58,
    name: 'Strawberry Milkshake',
    category : 'beverages',
    rating : 4.2,
    price: 129,
    img: 'images/beverages/strawberry milk shake.jpg',
    quantity: 1
},
{
    id:59,
    name: 'Vanilla Milkshake',
    category : 'beverages',
    rating : 4.1,
    price: 159,
    img: 'images/beverages/vanilla milk shake.jpg',
    quantity: 1
},
{
    id: 60,
    name: 'Gajar-Halwa',
    category : 'desserts',
    rating : 4.3,
    price: 170,
    img: 'images/desserts/gajar-halwa.webp',
    quantity: 1
},
{
    id: 61,
    name: 'Gulab Jamun',
    category : 'desserts',
    rating : 4.6,
    price: 60,
    img: 'images/desserts/gulab jamun(2 pcs).jpg',
    quantity: 1
},
{
    id: 62,
    name: 'Jalebi',
    category : 'desserts',
    rating : 4.0,
    price: 135,
    img: 'images/desserts/jalebi (5 pcs).jpg',
    quantity: 1
},
{
    id: 63,
    name: 'Kesar Pista Kulfi',
    category : 'desserts',
    rating : 4.3,
    price: 95,
    img: 'images/desserts/kesar pista kulfi.jpg',
    quantity: 1
},
{
    id: 64,
    name: 'Mango Kulfi',
    category : 'desserts',
    rating : 4.6,
    price: 85,
    img: 'images/desserts/mango kulfi.jpg',
    quantity: 1
},
{
    id: 65,
    name: 'Matka Kulfi',
    category : 'desserts',
    rating : 3.9,
    price: 145,
    img: 'images/desserts/matka kulfi.jpg',
    quantity: 1
},
{
    id: 66,
    name: 'Rasmalai',
    category : 'desserts',
    rating : 4.0,
    price: 45,
    img: 'images/desserts/rasmalai.jpg',
    quantity: 1
},
{
    id: 67,
    name: 'Rice Kheer',
    category : 'desserts',
    rating : 4.1,
    price: 80,
    img: 'images/desserts/rice-kheer.jpg',
    quantity: 1
},
{
    id: 68,
    name: 'Seviyaan Kheer',
    category : 'desserts',
    rating : 3.6,
    price: 130,
    img: 'images/desserts/Seviyan Kheer.jpg',
    quantity: 1
},
{
    id: 69,
    name: 'Shahi Tukda',
    category : 'desserts',
    rating : 4.2,
    price:120,
    img: 'images/desserts/shahi tukda.jpg',
    quantity: 1
},
{
    id: 70,
    name: 'Besan Chilla',
    category : 'miscellaneous',
    rating : 4.0,
    price:158,
    img: 'images/miscellaneous/besan chilla.jpg',
    quantity: 1
},
{
    id: 71,
    name: 'Moong Dal Chilla',
    category : 'miscellaneous',
    rating : 4.1,
    price:158,
    img: 'images/miscellaneous/moong dal chilla.jpg',
    quantity: 1
},
{
    id: 72,
    name: 'Hamburger',
    category : 'miscellaneous',
    rating : 4.5,
    price:100,
    img: 'images/miscellaneous/Hamburger.jpg',
    quantity: 1
},
{
    id: 73,
    name: 'Ultimate Veggie Burger',
    category : 'miscellaneous',
    rating : 3.9,
    price:115,
    img: 'images/miscellaneous/ultimate veggie burger.jpg',
    quantity: 1
},
{
    id: 74,
    name: 'Chicken Burger',
    category : 'miscellaneous',
    rating : 4.2,
    price:150,
    img: 'images/miscellaneous/chicken burger.jpg',
    quantity: 1
},
{
    id: 75,
    name: 'French Fries',
    category : 'miscellaneous',
    rating : 4.1,
    price:200,
    img: 'images/miscellaneous/french fries.jpg',
    quantity: 1
},
{
    id: 76,
    name: 'Peri-Peri French fries',
    category : 'miscellaneous',
    rating : 4.1,
    price:279,
    img: 'images/miscellaneous/peri-peri french fries.jpeg',
    quantity: 1
},
{
    id: 77,
    name: 'Chole Bhature',
    category : 'miscellaneous',
    rating : 4.6,
    price:189,
    img: 'images/miscellaneous/chole bhature.jpg',
    quantity: 1
},
{
    id: 78,
    name: 'Samosa',
    category : 'miscellaneous',
    rating : 4.4,
    price:29,
    img: 'images/miscellaneous/samosa (2 pcs).jpg',
    quantity: 1
},
{
    id: 79,
    name: 'Vada Pav',
    category : 'miscellaneous',
    rating : 3.6,
    price:69,
    img: 'images/miscellaneous/vada pav.jpg',
    quantity: 1
},
{
    id: 80,
    name: 'Pav Bhaji',
    category : 'miscellaneous',
    rating : 4.6,
    price:80,
    img: 'images/miscellaneous/pav bhaji.jpg',
    quantity: 1
},
]

export {foodItem};