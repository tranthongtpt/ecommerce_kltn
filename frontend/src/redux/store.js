import {createStore, combineReducers, applyMiddleware} from "redux"
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { productCreateReviewReducer, productDetailsReducer, productListReducer } from "./Reducers/ProductReducers"
import { userDetailsReducer, userLoginReducer, userRegisterReducer, userUpdateProfileReducer } from "./Reducers/userReducer"
import { cartReducer } from "./Reducers/CartReducers"
import { orderCreateReducer, orderDetailsReducer, orderListMyReducer, orderPayReducer } from "./Reducers/OrderReducers"
import { categoryListReducer } from "./Reducers/CaterogyReducer"

const reducer = combineReducers({
    productList: productListReducer,
    productDetails : productDetailsReducer,
    productReviewCreate: productCreateReviewReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    cart: cartReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    orderListMy: orderListMyReducer,
    categoryList: categoryListReducer
})
//cart

const cartItemsFromLocalStorage = localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];
//login
const userInfoFromLocalStorage = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null

//shippingAddress
const shippingAddressFromLocalStorage = localStorage.getItem("shippingAddress")
    ? JSON.parse(localStorage.getItem("shippingAddress"))
    : {}
    
const initialState = {
    userLogin:{userInfo: userInfoFromLocalStorage},
    cartItems: cartItemsFromLocalStorage,
    shippingAddress: shippingAddressFromLocalStorage
}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store