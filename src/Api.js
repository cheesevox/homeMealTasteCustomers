import axios from "axios";
import { RouteName } from "./Constant";
export const login = async (values, navigation, Toast) => {
  console.log(values);
  try {
    const response = await axios.post(
      `https://homemealtaste.azurewebsites.net/api/User/login`,
      values
    );
    // dispatch(getUserInfor(response.data));
    if (response.data) {
      console.log("role", response.data);
      const roleId = response.data.roleId;
      if (roleId === 2) {
        await navigation.navigate("CustomerHome", { user: response.data });
        Toast?.show({
          type: "success",
          text1: "Home Meal Taste",
          text2: "This is some something 👋",
        });
      }
    } else {
      Toast?.show({
        type: "error",
        text1: "Home Meal Taste",
        text2: "Login Failed.Check Your Credentials. 👋",
      });
    }
  } catch (error) {
    console.log("Error in login", error);
  }
};

export const getOrderByUserID = (id) => {
  try {
    const repose = axios.get(
      `https://homemealtaste.azurewebsites.net/api/Order/get-order-by-user-id?id=${id}`
    );
    return repose.data;
  } catch (error) {
    console.log("error get user order by id");
  }
};
export const loginUser = () => {
  try {
    const repose = axios.get(
      `https://homemealtaste.azurewebsites.net/api/User/login`
    );
    return repose.data;
  } catch (error) {
    console.log("login error in here");
  }
};
// <<<<<<< HEAD
// export const getOrderByID = async (id) => {
//   try {
//     const repose = await axios.get(
// =======
export const getOrderByID = (id) => {
  try {
    const repose = axios
      .get
      // >>>>>>> CaoVanTruong/chef
      //       `https://homemealtaste.azurewebsites.net/api/Order/get-order-by-order-id?id=${id}`
      ();
    return repose.data;
  } catch (error) {
    console.log("error by id get order");
  }
};
// <<<<<<< HEAD

export const getAllMealInSessionID = async (id) => {
  try {
    const repose = await axios.get(
      `https://homemealtaste.azurewebsites.net/api/MealSession/get-all-meal-session-by-session-id?sessionid=${id}`
    );
    return repose.data;
  } catch (error) {
    console.log("err in get all meal in sesion id", error);
  }
};

export const getAllArea = async () => {
  try {
    const repose = await axios.get(
      `https://homemealtaste.azurewebsites.net/api/Area/get-all-area`
    );
    return repose.data;
  } catch (error) {}
};
// =======
// distrct,area
export const getAllDistrict = async () => {
  try {
    const response = await axios.get(
      "https://homemealtaste.azurewebsites.net/api/District/get-all-district"
    );
    return response.data;
  } catch (error) {
    console.log("Error get all district", error);
  }
};
export const getAreaByDistrictId = async (id) => {
  try {
    const response = await axios.get(
      `https://homemealtaste.azurewebsites.net/api/Area/get-area-by-district-id?districtid=${id}`
    );
    return response.data;
  } catch (error) {
    console.log("Get area by district id", error);
  }
  // >>>>>>> CaoVanTruong/chef
};
export const getAllSessionByAreaId = async (id) => {
  try {
    const response = await axios.get(
      `https://homemealtaste.azurewebsites.net/api/Session/get-all-session-by-area-id-with-status-true?areaid=${id}`
    );
    return response.data;
  } catch (error) {
    console.log("get all session by area Id", error);
  }
};
// <<<<<<< HEAD
export const getAllSessionByAreaIdchef = async (id) => {
  try {
    const response = await axios.get(
      `https://homemealtaste.azurewebsites.net/api/Session/get-all-session-by-area-id?areaid=${id}`
      // `https://homemealtaste.azurewebsites.net/api/Session/get-all-session-by-area-id-with-status-true?areaid=${id}`
    );
    return response.data;
  } catch (error) {
    console.log("get all session by area Id", error);
  }
};
export const getMealInSessionBySessionId = async (id) => {
  try {
    const response = await axios.get(
      `https://homemealtaste.azurewebsites.net/api/MealSession/get-all-meal-session-by-session-id?sessionid=${id}`
    );
    return response.data;
  } catch (error) {
    console.log("get all meal in session by session id");
  }
};
export const getAllMealSession = async () => {
  try {
    const response = await axios.get(
      "https://homemealtaste.azurewebsites.net/api/MealSession/get-all-meal-session"
    );
    return response.data;
  } catch (error) {
    console.log("get all meal ss", error);
  }
};
export const getDishByMealId = async (id) => {
  try {
    const response = await axios.get(
      `https://homemealtaste.azurewebsites.net/api/Meal/get-single-meal-by-meal-id?mealid=${id}`
    );
    return response.data;
  } catch (error) {
    console.log("get dish by mela id", error);
  }
};
export const createOrderUser = async (values) => {
  console.log("values creaorder ///////////////", values);
  try {
    const response = await axios.post(
      "https://homemealtaste.azurewebsites.net/api/Order/create-order",
      values
    );
  } catch (error) {
    console.log("create order", error);
  }
};

export const getAllOrderByCutomerId = async (id) => {
  try {
    const response = await axios.get(
      `https://homemealtaste.azurewebsites.net/api/Order/get-order-by-customer-id?id=${id}`
    );
    return response.data;
  } catch (error) {
    console.log("erroe all order by cutomer id", error);
  }
};

export const getAllAreaByDistrictId = async (id) => {
  try {
    const response = await axios.get(
      `https://homemealtaste.azurewebsites.net/api/Area/get-area-by-district-id?districtid=${id}`
    );
    console.log("tra ve area cho kaooooooooooo", response.data);
    return response.data;
  } catch (error) {
    console.log("error in getall area by district");
  }
};
// export const getAllDistrict = async () => {
//   try {
//     const repose = await axios.get(
//       `https://homemealtaste.azurewebsites.net/api/District/get-all-district`
//     );
//     return repose.data;
//   } catch (error) {}
// };

export const getUserByID = async (id) => {
  try {
    const response = await axios.get(
      `https://homemealtaste.azurewebsites.net/api/User/get-user-by-id?id=${id}`
    );
    return response.data;
  } catch (error) {
    console.log("error user by id ", error);
  }
};

export const createFeedBackOrder = async (values) => {
  console.log("values create feedback///////////////", values);
  try {
    const response = await axios.post(
      "https://homemealtaste.azurewebsites.net/api/Feedback/create-feedback",
      values
    );
  } catch (error) {
    console.log("create feedback", error);
  }
};

export const getAllFeedbackByKitchenId = async (id) => {
  try {
    const response = await axios.get(
      `https://homemealtaste.azurewebsites.net/api/Feedback/get-feedback-by-kitchen-id?kitchenid=${id}`
    );
    return response.data;
  } catch (error) {
    console.log("error feedback", error);
  }
};

export const createPayment = async (values) => {
  console.log("values create Payemnet$$$$$", values);
  try {
    const response = await axios.post(
      "https://homemealtaste.azurewebsites.net/api/Payment",
      values
    );
    return response.data;
  } catch (error) {
    console.log("create payment $$$$", error);
  }
};
// =======
// chef dish
export const getAllDishByKitchenId = async (id) => {
  try {
    const response = await axios.get(
      `https://homemealtaste.azurewebsites.net/api/Dish/get-dish-by-kitchen-id?kitchenid=${id}`
    );
    return response.data;
  } catch (error) {
    console.log("Error at get all dish by kitchen", error);
  }
};
export const deleteDishByDishId = async (id) => {
  try {
    await axios.delete(
      `https://homemealtaste.azurewebsites.net/api/Dish?id=${id}`
    );
    console.log("Delete successfully.");
  } catch (error) {
    console.log("delete dish", error);
  }
};
export const createNewDish = async (image, attribute) => {
  const formData = new FormData();
  formData.append("image", {
    uri: image,
    type: "image/jpeg", // or 'image/png'
    name: "myImage.jpg",
  });

  // Append additional attributes to FormData
  Object.entries(attribute).forEach(([key, value]) => {
    formData.append(key, value);
  });
  try {
    const response = await axios.post(
      "https://homemealtaste.azurewebsites.net/api/Dish",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    if (response.status === 200) {
      console.log("Create new dish successfully.");
      console.log(response.data);
    }
  } catch (error) {
    console.error("Error creating new dish:", error.message);
    console.error("Error details:", error.response);

    // Log the entire error object for more information
    console.error("Full error object:", error);

    // If error.response is not available, log the entire error object
    if (!error.response) {
      console.error("Error object without response:", error);
    }
  }
};

export const getAllDishType = async () => {
  try {
    const response = await axios.get(
      "https://homemealtaste.azurewebsites.net/api/DishType/get-all-dish-type"
    );
    return response.data.data;
  } catch (error) {
    console.log("get all dishtype error", error);
  }
};
export const getAllMealByKitchen = async (id) => {
  try {
    const response = await axios.get(
      `https://homemealtaste.azurewebsites.net/api/Meal/get-all-meal-by-kitchen-id?id=${id}`
    );
    return response.data;
  } catch (error) {
    console.log("get all meal by kitchen error", error);
  }
};
// export const getDishByMealId = async (id)=>{
//     try {
//         const response = await axios.get(`https://homemealtaste.azurewebsites.net/api/Dish/get-dish-id-by-meal-id?mealid=${id}`)

//     } catch (error) {
//     }
// }

export const getMealById = async (id) => {
  try {
    const response = await axios.get(
      `https://homemealtaste.azurewebsites.net/api/Meal/get-single-meal-by-meal-id?mealid=${id}`
    );
    return response.data;
  } catch (error) {
    console.log("get meal by id", error);
  }
};
// >>>>>>> CaoVanTruong/chef

// kitchen
export const getOrderByKitchenId = async (id) => {
  try {
    const response = await axios.get(
      `https://homemealtaste.azurewebsites.net/api/Order/get-order-by-kitchen-id?kitchenid=${id}`
    );
    return response.data;
  } catch (error) {
    console.log("get order by kitchen id", error);
  }
};
export const postStatusPaidToCompleted = async (id) => {
  try {
    console.log(id);
    await axios.patch(
      `https://homemealtaste.azurewebsites.net/api/Order/change-status-order-to-COMPLETED?orderid=${id}`
    );
  } catch (error) {
    console.log("post status paid to complete errror", error);
  }
};
export const getAllMealSessionWithStatus = async () => {
  try {
    const response = await axios.get(
      `https://homemealtaste.azurewebsites.net/api/MealSession/get-all-meal-session-with-status-APPROVED-and-REMAINQUANTITY->-0`
    );
    return response.data;
  } catch (error) {
    console.log("err log all meal with approve ", error);
  }
};
export const getAllMealSessionByKitchen = async (id) => {
  console.log(id);
  try {
    const response = await axios.get(
      `https://homemealtaste.azurewebsites.net/api/MealSession/get-all-meal-session-by-kitchen-id?kitchenId=${id}`
    );
    return response.data;
  } catch (error) {
    console.log("get all meal session by kitchen error", error);
  }
};
export const createMealSession = async (values) => {
  console.log(values);
  try {
    const response = await axios.post(
      "https://homemealtaste.azurewebsites.net/api/MealSession",
      values
    );
    if (response.status == 200) {
      console.log("Create meal session successfully.");
    }
  } catch (error) {
    console.log("create meal session", error);
  }
};

export const getAllOrderByMealSessionId = async (id) => {
  console.log(id);
  try {
    const response = await axios.get(
      `https://homemealtaste.azurewebsites.net/api/Order/get-all-order-by-mealsession-id?mealsessionid=${id}`
    );
    return response.data;
  } catch (error) {
    console.log("get all order by meal sesison id err", error);
  }
};

export const postStatusOrderForCustomer = async (id, value) => {
  try {
    console.log("posrtttttttttt id", id);
    console.log("valuuuuuuuuu post", value);
    await axios.patch(
      `https://homemealtaste.azurewebsites.net/api/Order/change-status-order-to-DONE?mealsessionid=${id}&status=${value}`
    );
  } catch (error) {
    console.log("post status for order customer", error);
  }
};

export const getMealSessionById = async (id) => {
  try {
    const response = await axios.get(
      `https://homemealtaste.azurewebsites.net/api/MealSession/get-single-meal-session-by-meal-session-id?mealsessionid=${id}`
    );
    return response.data;
  } catch (error) {
    console.log("get meal session by id", error);
  }
};

export const getAllMealSessionInDayApprove = async () => {
  try {
    const response = await axios.get(
      `https://homemealtaste.azurewebsites.net/api/MealSession/get-all-meal-session-with-status-APPROVED-and-REMAINQUANTITY-%3e-0-IN-DAY`
    );
    return response.data;
  } catch (error) {
    console.log("err log all meal with approve ", error);
  }
};

export const createNewMeal = async (image, attribute, dishes) => {
  console.log("tung thanh phan", image, attribute, dishes);
  const formData = new FormData();
  formData.append("Image", {
    uri: image,
    type: "image/jpeg", // or 'image/png'
    name: "mealImage.jpg",
  });
  Object.entries(attribute).forEach(([key, value]) => {
    formData.append(key, value);
  });
  dishes.forEach((dishId, index) => {
    formData.append("DishIds", dishId);
  });
  // formData.append("DishIds", dishes);

  console.log("formdata la", formData);
  console.log("dish dc gui sang api la", dishes);
  try {
    const response = await axios.post(
      "https://homemealtaste.azurewebsites.net/api/Meal/create-meal",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    if (response.status === 200) {
      console.log("Create new meal successfully.");
      console.log(response.data);
    }
  } catch (error) {
    console.error("Error creating new dish:", error.message);
    console.error("Error details:", error.response);

    // Log the entire error object for more information
    console.error("Full error object:", error);

    // If error.response is not available, log the entire error object
    if (!error.response) {
      console.error("Error object without response:", error);
    }
  }
};
export const getAllApprovedMealSessionBySessionId = async (id) => {
  try {
    const response = await axios.get(
      `https://homemealtaste.azurewebsites.net/api/MealSession/get-all-meal-session-by-session-id-with-status-approved-and-remain-quantity->0-IN-DAY?sessionid=${id}`
    );
    return response.data;
  } catch (error) {
    console.log("Error At get all approved meal session by session id", error);
  }
};
export const getKitchenByKitchenId = async (id) => {
  try {
    const response = await axios.get(
      `https://homemealtaste.azurewebsites.net/api/Kitchen/get-all-kitchen-by-kitchen-id?id=${id}`
    );
    return response.data;
  } catch (error) {
    console.log("Error at get kitchen by kitchen ID", error);
  }
};
export const getAllMealSessionApprovedQuantityMoreThanZero = async (id) => {
  try {
    const response = await axios.get(
      `https://homemealtaste.azurewebsites.net/api/MealSession/get-all-meal-session-by-kitchen-id-with-status-approved-and-remain-quantity->0-IN-DAY?kitchenid=${id}`
    );
    return response.data;
  } catch (error) {
    console.log(
      "Error at get all meal session approved quantity more than zero",
      error
    );
  }
};
export const getAllTransactionByUserId = async (id) => {
  try {
    const response = await axios.get(
      `https://homemealtaste.azurewebsites.net/api/Transaction/get-all-transaction-by-user-id?userid=${id}`
    );
    return response.data;
  } catch (error) {
    console.log("Error at get all transaction", error);
  }
};
