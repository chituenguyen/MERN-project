import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userReducer } from "./reducers/userReducers";


const reducers = combineReducers({
  userLogin:userReducer
//   productList: productListReducers,
//   productDetail: productDetailReducers,
//   cart: cartReducers,
//   userLogin: userReducer,
//   userRegister: userRegisterReducer,
//   userProfile: userGetProfileReducer,
//   orderCreate: orderCreateReducer,
//   adminListOrder: adminListOrder,
//   userGetOrder: userGetOrderReducer,
//   userGetMyOrder: userGetMyOrder,
//   orderPay: orderPayReducer,
//   adminListUser: adminListUserReducer,
//   adminDeleteProduct: adminDeleteProductReducer,
//   adminCreateNewProduct: adminCreateNewProductReducer,
//   adminUpdateProductStore: adminUpdateProductReducer,

//   orderDeliver: orderDeliverReducer,
});


const initialState = {
//   cart: {
//     cartItems: cartItemsFromLocalStorage,
//     shipping: AddressFromLocalStorage,
//   },
//   userLogin: { userInfo: userInfoFromLocalStorage },
};
const middleware = [thunk];

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;