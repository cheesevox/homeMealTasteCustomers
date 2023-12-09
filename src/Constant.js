
// <<<<<<< HEAD
export const imageorder ={
		image: require("../assets/images/pizza.png"),
}

export const item = [
	{
		"createDate": "11/15/2023 12:00:00 AM",
		"kitchenDtoForMealSession":
		{
			"address": "TPHCM",
			"kitchenId": 1,
			"name": "TriKitchen",
			"userId": 1
		},
		"mealDtoForMealSession":
		{
			"createDate": "11/15/2023 12:00:00 AM",
			"description": "tat ca la do cong san",
			"image": "https://homemealtaste.blob.core.windows.net/meal-image/80f4cc34-2a0f-476a-9c92-c95e0d89a663_meal-image",
			"kitchenId": 1,
			"mealId": 14,
			"name": "dory fish"
		},
		"mealSessionId": 8,
		"price": 85000,
		"quantity": 100,
		"remainQuantity": 96,
		"sessionDtoForMealSession":
		{
			"areaDtoForMealSession": [Object],
			"createDate": "11/13/2023 12:00:00 AM",
			"endDate": "11/13/2023 12:00:00 AM",
			"endTime": "11/13/2023 7:00:00 PM",
			"sessionId": 27,
			"sessionType": "Dinner",
			"startTime": "11/13/2023 5:00:00 PM",
			"status": true,
			"userId": 2
		},
		"status": "APPROVED"
	}
]


export const area = [
	{
		"areaId": 1,
		"address": "10Bis",
		"districtDtoAreaResponseModel": {
			"districtId": 9,
			"districtName": "Quận 9"
		},
		"areaName": "First Area ke"
	},
	{
		"areaId": 2,
		"address": "11Bis",
		"districtDtoAreaResponseModel": {
			"districtId": 2,
			"districtName": "Quận 2"
		},
		"areaName": "Second Area"
	}
]

export const mealinsession = [
	{
		"mealSessionId": 9,
		"mealDtoForMealSession": {
			"mealId": 20,
			"name": "dori-hihi",
			"image": "https://homemealtaste.blob.core.windows.net/meal-image/ff3c7e7b-3739-4a9b-9791-35a33c2a99e2_meal-image",
			"kitchenId": 1,
			"createDate": "11/17/2023 12:00:00 AM",
			"description": "ngon qua"
		},
		"sessionDtoForMealSession": {
			"sessionId": 11,
			"createDate": "10/31/2023 12:00:00 AM",
			"startTime": "10/31/2023 5:00:00 PM",
			"endTime": "10/31/2023 5:00:00 PM",
			"endDate": "10/31/2023 12:00:00 AM",
			"userId": 1,
			"status": true,
			"sessionType": "Lunch",
			"areaDtoForMealSession": {
				"areaId": 1,
				"address": "Quận Bình Tân Thái Văn Cơ",
				"areaName": "Quận 12",
				"districtDtoForMealSession": {
					"districtId": 13,
					"districtName": "Quận Tân Bình"
				}
			}
		},
		"price": 95000.0,
		"quantity": 15,
		"remainQuantity": 8,
		"status": "REJECTED",
		"createDate": "11/17/2023 12:00:00 AM",
		"kitchenDtoForMealSession": {
			"kitchenId": 1,
			"userId": 1,
			"name": "TriKitchen",
			"address": "TPHCM"
		}
	}
]
export const RouteName = {
  CHEF_HOME: "ChefHome",
  DISH_MANAGEMENT: "DishManagement",
  KITCHEN: "KitchenScreen",
  MARKET_SCREEN: "MarketScreen",
  FORM_DISH: "FormDish",
  MEAL_MANAGEMENT: "MealManagement",
  FORM_MEAL: "FormMeal",
  SESSION: "Session",
  AREA: "Area",
  MARKET: "Market",
  MEAL_SESSION: "MealSessionScreen",
};

export const colors = {
  COLOR_PRIMARY: "#f96163",
  COLOR_LIGHT: "#fff",
  COLOR_DARK: "#000",
  COLOR_DARK_ALT: "#262626",
};

export const Option = [
	{
		id: "1",
		name: "Add monney"
	},
	{
		id: "2",
		name: "Add monney"
	}, {
		id: "3",
		name: "Add monney"
	}, {
		id: "4",
		name: "Add monney"
	},
]

export const order = [
	{
		"orderId": 4,
		image: require("../assets/images/tuna.png"),
		"customerDto2": {
			"customerId": 2,
			"userId": 13,
			"name": "Truong",
			"phone": "0384619027",
			"districtId": 5,
			"areaId": 2
		},
		"status": "PAID",
		"mealSessionDto2": {
			"mealSessionId": 7,
			"mealDto2": {
				"mealId": 8,
				"name": "Mâm cơm mùa hè",
				"image": "https://media.istockphoto.com/id/1082421544/vi/anh/b%E1%BB%AFa-%C4%83n-%E1%BA%A9m-th%E1%BB%B1c-th%C3%A1i-lan-theo-phong-c%C3%A1ch-mi%E1%BB%81n-b%E1%BA%AFc.jpg?s=2048x2048&w=is&k=20&c=rxf7CjAPAIWGaysKPKLd-C26yXcAzYrus6849yF5ZYo=",
				"kitchenDto2": {
					"kitchenId": 1,
					"userId": 3,
					"name": "TriKitchen",
					"address": "TPHCM",
					"areaId": 1
				},
				"createDate": "21-11-2023",
				"description": "tat ca la do cong san"
			},
			"sessionDto2": {
				"sessionId": 27,
				"createDate": "2023-11-13",
				"startTime": "Nov 13 2023  5:00PM",
				"endTime": "Nov 13 2023  7:00PM",
				"endDate": "2023-11-13",
				"userId": 2,
				"status": true,
				"sessionType": "Dinner",
				"areaId": 1
			},
			"price": 75000,
			"quantity": 1,
			"remainQuantity": 1,
			"status": "REJECTED",
			"createDate": "21-11-2023"
		},
		"totalPrice": 75000,
		"quantity": 1,
		"time": "Nov 14 2023  5:23PM"
	}
]


export const images=[{
	image: require("../assets/images/avatar.jpg")
}]


export const userimage = [{
	id: "1",
	name: "Phương Đại Ka",
	image: require("../assets/images/avatar.jpg"),
	wallet: "150.000"

}]

const listProducts = [
	{
		id: 1,
		name: 'Chinese Fresh Cabbage',
		type: 1,
		pricePerKg: '$5.66',
	},
	{
		id: 2,
		name: 'Fresh Red Tomato',
		type: 1,
		pricePerKg: '$5.66',
	},
	{
		id: 3,
		name: 'Purple Sweet Potato',
		type: 2,
		pricePerKg: '$5.66',
	},
	{
		id: 4,
		name: 'Green Beans',
		type: 2,
		pricePerKg: '$5.66',
	},
	{
		id: 5,
		name: 'Fresh Broccoli',
		type: 1,
		pricePerKg: '$5.66',
	},
	{
		id: 6,
		name: 'Potato',
		type: 3,
		pricePerKg: '$5.66',
	},
]
// =======
// export const order = [
//   {
//     id: "01",
//     sessionmeal: "02",
//     orderid: "02",
//     totalamount: "30,000",
//     quantity: 1,
//   },
// >>>>>>> CaoVanTruong/chef
// ];

// export const user = [
//   {
//     id: "1",
//     name: "Phương Đại Ka",
//     image: require("../assets/images/avatar.jpg"),
//     wallet: "150.000",
//   },
// ];

// const listProducts = [
//   {
//     id: 1,
//     name: "Chinese Fresh Cabbage",
//     type: 1,
//     pricePerKg: "$5.66",
//   },
//   {
//     name: "Fresh Red Tomato",
//     type: 1,
//     pricePerKg: "$5.66",
//   },
//   {
//     id: 3,
//     name: "Purple Sweet Potato",
//     type: 2,
//     pricePerKg: "$5.66",
//   },
//   {
//     id: 4,
//     name: "Green Beans",
//     type: 2,
//     pricePerKg: "$5.66",
//   },
//   {
//     id: 5,
//     name: "Fresh Broccoli",
//     type: 1,
//     pricePerKg: "$5.66",
//   },
//   {
//     id: 6,
//     name: "Potato",
//     type: 3,
//     pricePerKg: "$5.66",
//   },
// ];

// export const categories = [
//   {
//     id: "01",
//     category: "Sky 9",
//   },
//   {
//     id: "02",
//     category: "VinHome",
//   },
//   {
//     id: "03",
//     category: "Grand Park",
//   },
//   {
//     id: "04",
//     category: "Home Meal",
//   },
//   {
//     id: "05",
//     category: "Manchester",
//   },
// ];

// const orderamount = [
//   {
//     totalamount: "50",
//   },
// ];
const foods = [
	{
		id: '1',
		name: 'Mâm Salad',
		ingredients: 'Mixed Pizza',
		quantity: "5",
		price: '30000',
		image: require("../assets/images/tuna.png"),
	},
]

// ];
// export default foods;
// export const session = [
// 	{
// 		id: '1',
// 		sessionname: 'Lunch'
// 	},
// 	{
// 		id: '2',
// 		sessionname: 'Dinner'
// 	}
// ]


export const recipeList = [
	{
		id: "01",
		name: "Mâm Salad",
		session: "Lunch",
		image: require("../assets/images/pizza.png"),
		rating: "4.2",
		price: "2 point",
		area: "sky9",
		dishes: [
			{
				id: 1,
				name: 'pizza',
				description: 'cheezy garlic pizza',
				price: 10,
				image: require('../assets/images/pizzaDish.png')
			},
			{
				id: 2,
				name: 'pizza',
				description: 'cheezy garlic pizza',
				price: 10,
				image: require('../assets/images/pizzaDish.png')
			},
			{
				id: 3,
				name: 'pizza',
				description: 'cheezy garlic pizza',
				price: 10,
				image: require('../assets/images/pizzaDish.png')
			},
		]

	},
	{
		id: "02",
		name: "Mâm Phô Mai",
		image: require("../assets/images/pizza.png"),
		rating: "3.6",
		price: "2 point",
		area: "Home Meal",
		session: "Dinner",
		dishes: [
			{
				id: 1,
				name: 'pizza',
				description: 'cheezy garlic pizza',
				price: 10,
				image: require('../assets/images/pizzaDish.png')
			},
			{
				id: 2,
				name: 'pizza',
				description: 'cheezy garlic pizza',
				price: 10,
				image: require('../assets/images/pizzaDish.png')
			},
			{
				id: 3,
				name: 'pizza',
				description: 'cheezy garlic pizza',
				price: 10,
				image: require('../assets/images/pizzaDish.png')
			},
		]
	},
	{
		id: "03",
		name: "Hot Dog Xúc Xích",
		image: require("../assets/images/hotdog.png"),
		rating: "4.6",
		price: "2 point",
		area: "sky9",
		session: "Lunch",

		dishes: [
			{
				id: 1,
				name: 'pizza',
				description: 'cheezy garlic pizza',
				price: 10,
				image: require('../assets/images/pizzaDish.png')
			},
			{
				id: 2,
				name: 'pizza',
				description: 'cheezy garlic pizza',
				price: 10,
				image: require('../assets/images/pizzaDish.png')
			},
			{
				id: 3,
				name: 'pizza',
				description: 'cheezy garlic pizza',
				price: 10,
				image: require('../assets/images/pizzaDish.png')
			},
		]

	},
	{
		id: "04",
		name: "Mâm Gà",
		image: require("../assets/images/manchurian.png"),
		rating: "3.6",
		price: "2 point",
		area: "Grand Park",
		session: "Lunch",

		dishes: [
			{
				id: 1,
				name: 'pizza',
				description: 'cheezy garlic pizza',
				price: 10,
				image: require('../assets/images/pizzaDish.png')
			},
			{
				id: 2,
				name: 'pizza',
				description: 'cheezy garlic pizza',
				price: 10,
				image: require('../assets/images/pizzaDish.png')
			},
			{
				id: 3,
				name: 'pizza',
				description: 'cheezy garlic pizza',
				price: 10,
				image: require('../assets/images/pizzaDish.png')
			},
		]

	},
	{
		id: "05",
		name: "Mâm gà luộc",
		image: require("../assets/images/chicken.png"),
		rating: "2.2",
		price: "2 point",
		area: "Grand Park",
		session: "Dinner",

		dishes: [
			{
				id: 1,
				name: 'pizza',
				description: 'cheezy garlic pizza',
				price: 10,
				image: require('../assets/images/pizzaDish.png')
			},
			{
				id: 2,
				name: 'pizza',
				description: 'cheezy garlic pizza',
				price: 10,
				image: require('../assets/images/pizzaDish.png')
			},
			{
				id: 3,
				name: 'pizza',
				description: 'cheezy garlic pizza',
				price: 10,
				image: require('../assets/images/pizzaDish.png')
			},
		]

	},
	{
		id: "06",
		name: "Mâm Cakes",
		image: require("../assets/images/cupcakes.png"),
		rating: "5.0",
		price: "2 point",
		area: "sky9",
		session: "Lunch",

		dishes: [
			{
				id: 1,
				name: 'pizza',
				description: 'cheezy garlic pizza',
				price: 10,
				image: require('../assets/images/pizzaDish.png')
			},
			{
				id: 2,
				name: 'pizza',
				description: 'cheezy garlic pizza',
				price: 10,
				image: require('../assets/images/pizzaDish.png')
			},
			{
				id: 3,
				name: 'pizza',
				description: 'cheezy garlic pizza',
				price: 10,
				image: require('../assets/images/pizzaDish.png')
			},
		]
	},
	{
		id: "07",
		name: "Lẩu Nướng",
		image: require("../assets/images/curry.png"),
		rating: "4.8",
		price: "2 point",
		area: "sky9",
		session: "Dinner",
		dishes: [
			{
				id: 1,
				name: 'pizza',
				description: 'cheezy garlic pizza',
				price: 10,
				image: require('../assets/images/pizzaDish.png')
			},
			{
				id: 2,
				name: 'pizza',
				description: 'cheezy garlic pizza',
				price: 10,
				image: require('../assets/images/pizzaDish.png')
			},
			{
				id: 3,
				name: 'pizza',
				description: 'cheezy garlic pizza',
				price: 10,
				image: require('../assets/images/pizzaDish.png')
			},
		]
	},
	{
		id: "08",
		name: "Mì Ramen Hảo Hảo",
		image: require("../assets/images/ramen-org.png"),
		rating: "4.2",
		price: "2 point",
		area: "sky9",
		session: "Dinner",
		dishes: [
			{
				id: 1,
				name: 'pizza',
				description: 'cheezy garlic pizza',
				price: 10,
				image: require('../assets/images/pizzaDish.png')
			},
			{
				id: 2,
				name: 'pizza',
				description: 'cheezy garlic pizza',
				price: 10,
				image: require('../assets/images/pizzaDish.png')
			},
			{
				id: 3,
				name: 'pizza',
				description: 'cheezy garlic pizza',
				price: 10,
				image: require('../assets/images/pizzaDish.png')
			},
		]
	},

	// getOrderByID()


// =======
  {
    id: "1",
    name: "Mâm Salad",
    ingredients: "Mixed Pizza",
    quantity: "5",
    price: "30000",
    image: require("../assets/images/tuna.png"),
  },
];
export default foods;
export const session = [
  {
    id: "1",
    sessionname: "Lunch",
  },
  {
    id: "2",
    sessionname: "Dinner",
  },
// >>>>>>> CaoVanTruong/chef
];

// export const recipeList = [
//   {
//     id: "01",
//     name: "Mâm Salad",
//     session: "Lunch",
//     image: require("../assets/images/tuna.png"),
//     rating: "4.2",
//     price: "2 point",
//     area: "sky9",
//     dish0: "thịt kho",
//     typedish0: "kho",
//     dish1: "cá rim",
//     typedish1: "rim",
//     dish2: "rau luộc",
//     typedish2: "luộc",
//     dish3: "Mắm cá",
//     typedish3: "mắm",
//     dish4: "Cơm",
//     typedish4: "cơm",
//     dish5: "Salad",
//     typedish5: "Salad",
//     color: "#006A4E",
//     description:
//       "Mâm cơm bao gồm thịt, cá, rau, củ đầy đủ, thành phần, Hãy liên hệ chatbox",
//   },
//   {
//     id: "02",
//     name: "Mâm Phô Mai",
//     image: require("../assets/images/lasgana.png"),
//     rating: "3.6",
//     price: "2 point",
//     area: "Home Meal",
//     session: "Dinner",
//     dish0: "thịt kho",
//     typedish0: "kho",
//     dish1: "cá rim",
//     typedish1: "rim",
//     dish2: "rau luộc",
//     typedish2: "luộc",
//     dish3: "Mắm cá",
//     typedish3: "mắm",
//     dish4: "Cơm",
//     typedish4: "cơm",
//     dish5: "Salad",
//     typedish5: "Salad",
//     color: "#f39c12",
//     description:
//       "Mâm cơm bao gồm thịt, cá, rau, củ đầy đủ, thành phần, Hãy liên hệ chatbox",
//   },
//   {
//     id: "03",
//     name: "Hot Dog Xúc Xích",
//     image: require("../assets/images/hotdog.png"),
//     rating: "4.6",
//     price: "2 point",
//     area: "sky9",
//     session: "Lunch",

//     dish0: "thịt kho",
//     typedish0: "kho",

//     dish1: "cá rim",
//     typedish1: "rim",
//     dish2: "rau luộc",
//     typedish2: "luộc",
//     dish3: "Mắm cá",
//     typedish3: "mắm",
//     dish4: "Cơm",
//     typedish4: "cơm",
//     dish5: "Salad",
//     typedish5: "Salad",
//     color: "#FF0000",
//     // description, steps to prepare
//     description:
//       "Mâm cơm bao gồm thịt, cá, rau, củ đầy đủ, thành phần, Hãy liên hệ chatbox",
//   },
//   {
//     id: "04",
//     name: "Mâm Gà",
//     image: require("../assets/images/manchurian.png"),
//     rating: "3.6",
//     price: "2 point",
//     area: "Grand Park",
//     session: "Lunch",

//     dish0: "thịt kho",
//     typedish0: "kho",
//     dish1: "cá rim",
//     typedish1: "rim",
//     dish2: "rau luộc",
//     typedish2: "luộc",
//     dish3: "Mắm cá",
//     typedish3: "mắm",
//     dish4: "Cơm",
//     typedish4: "cơm",
//     dish5: "Salad",
//     typedish5: "Salad",
//     color: "#d35400",
//     description:
//       "Mâm cơm bao gồm thịt, cá, rau, củ đầy đủ, thành phần, Hãy liên hệ chatbox",
//   },
//   {
//     id: "05",
//     name: "Mâm gà luộc",
//     image: require("../assets/images/chicken.png"),
//     rating: "2.2",
//     price: "2 point",
//     area: "Grand Park",
//     session: "Dinner",

//     dish0: "thịt kho",
//     typedish0: "kho",
//     dish1: "cá rim",
//     typedish1: "rim",
//     dish2: "rau luộc",
//     typedish2: "luộc",
//     dish3: "Mắm cá",
//     typedish3: "mắm",
//     dish4: "Cơm",
//     typedish4: "cơm",
//     dish5: "Salad",
//     typedish5: "Salad",
//     color: "#8d4004",
//     description:
//       "Mâm cơm bao gồm thịt, cá, rau, củ đầy đủ, thành phần, Hãy liên hệ chatbox",
//   },
//   {
//     id: "06",
//     name: "Mâm Cakes",
//     image: require("../assets/images/cupcakes.png"),
//     rating: "5.0",
//     price: "2 point",
//     area: "sky9",
//     session: "Lunch",

//     dish0: "thịt kho",
//     typedish0: "kho",
//     dish1: "cá rim",
//     typedish1: "rim",
//     dish2: "rau luộc",
//     typedish2: "luộc",
//     dish3: "Mắm cá",
//     typedish3: "mắm",
//     dish4: "Cơm",
//     typedish4: "cơm",
//     dish5: "Salad",
//     typedish5: "Salad",
//     description:
//       "Mâm cơm bao gồm thịt, cá, rau, củ đầy đủ, thành phần, Hãy liên hệ chatbox",
//   },
//   {
//     id: "07",
//     name: "Lẩu Nướng",
//     image: require("../assets/images/curry.png"),
//     rating: "4.8",
//     price: "2 point",
//     area: "sky9",
//     session: "Dinner",
//     dish0: "thịt kho",
//     typedish0: "kho",
//     dish1: "cá rim",
//     typedish1: "rim",
//     dish2: "rau luộc",
//     typedish2: "luộc",
//     dish3: "Mắm cá",
//     typedish3: "mắm",
//     dish4: "Cơm",
//     typedish4: "cơm",
//     dish5: "Salad",
//     typedish5: "Salad",
//     color: "#d35400",

//     description:
//       "Mâm cơm bao gồm thịt, cá, rau, củ đầy đủ, thành phần, Hãy liên hệ chatbox",
//   },
//   {
//     id: "08",
//     name: "Mì Ramen Hảo Hảo",
//     image: require("../assets/images/ramen-org.png"),
//     rating: "4.2",
//     price: "2 point",
//     area: "sky9",
//     session: "Dinner",
//     dish0: "thịt kho",
//     typedish0: "kho",
//     dish1: "cá rim",
//     typedish1: "rim",
//     dish2: "rau luộc",
//     typedish2: "luộc",
//     dish3: "Mắm cá",
//     typedish3: "mắm",
//     dish4: "Cơm",
//     typedish4: "cơm",
//     dish5: "Salad",
//     typedish5: "Salad",
//     color: "#f96163",
//     description:
//       "Mâm cơm bao gồm thịt, cá, rau, củ đầy đủ, thành phần, Hãy liên hệ chatbox",
//   },

//   // getOrderByID()
// ];
