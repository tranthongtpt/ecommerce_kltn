import {createStore, combineReducers, applyMiddleware} from "redux"
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { userListReducer, userLoginReducer } from "./Reducers/userReducer"
import { productCreateReducer, productDeleteReducer, productEditReducer, productListReducer, productUpdateReducer } from "./Reducers/ProductReducers"
import { orderDeliveredReducer, orderDetailsReducer, orderListReducer } from "./Reducers/OrderReducers"
import { caterogyCreateReducer, caterogyDeleteReducer, caterogyEditReducer, caterogyListReducer } from "./Reducers/Caterogy"

const reducer = combineReducers({
    
    userLogin: userLoginReducer,
    userList: userListReducer,
    productList: productListReducer,
    productDelete: productDeleteReducer,
    productCreate: productCreateReducer,
    productEdit: productEditReducer,
    productUpdate: productUpdateReducer,
    orderList: orderListReducer,
    orderDetails: orderDetailsReducer,
    orderDelivered: orderDeliveredReducer,
    caterogyList: caterogyListReducer,
    caterogyDelete: caterogyDeleteReducer,
    caterogyCreate: caterogyCreateReducer,
    caterogyEdit: caterogyEditReducer
    
})


//login
 const userInfoFromLocalStorage = localStorage.getItem("userInfo")
     ? JSON.parse(localStorage.getItem("userInfo"))
     : null


const initialState = {
    userLogin:{userInfo: userInfoFromLocalStorage},
}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store