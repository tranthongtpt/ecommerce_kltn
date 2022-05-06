import { CATEROGY_CREATE_FAIL, CATEROGY_CREATE_REQUEST, CATEROGY_CREATE_RESET, CATEROGY_CREATE_SUCCESS, CATEROGY_DELETE_FAIL, CATEROGY_DELETE_REQUEST, CATEROGY_DELETE_SUCCESS, CATEROGY_EDIT_FAIL, CATEROGY_EDIT_REQUEST, CATEROGY_EDIT_SUCCESS, CATEROGY_LIST_FAIL, CATEROGY_LIST_REQUEST, CATEROGY_LIST_SUCCESS, CATEROGY_UPDATE_FAIL, CATEROGY_UPDATE_REQUEST, CATEROGY_UPDATE_RESET, CATEROGY_UPDATE_SUCCESS } from "../Constants/Caterogy"


//all category
export const caterogyListReducer = (state = {categories:[]}, action) => {
    switch (action.type){
        case CATEROGY_LIST_REQUEST:
            return{ loading: true, categories: []}
        case CATEROGY_LIST_SUCCESS:
            return{ loading: false, categories: action.payload}
        case CATEROGY_LIST_FAIL:
            return{ loading: false, error: action.payload}        
        default:
            return state
    }
}

//delete category
export const caterogyDeleteReducer = (state = {}, action) => {
    switch (action.type){
        case CATEROGY_DELETE_REQUEST:
            return{ loading: true,}
        case CATEROGY_DELETE_SUCCESS:
            return{ loading: false, success: true}
        case CATEROGY_DELETE_FAIL:
            return{ loading: false, error: action.payload}        
        default:
            return state
    }
}

//create category
export const caterogyCreateReducer = (state = {}, action) => {
    switch (action.type){
        case CATEROGY_CREATE_REQUEST:
            return{ loading: true,}
        case CATEROGY_CREATE_SUCCESS:
            return{ loading: false, success: true, caterogy: action.payload}
        case CATEROGY_CREATE_FAIL:
            return{ loading: false, error: action.payload}
        case CATEROGY_CREATE_RESET:
            return{}        
        default:
            return state
    }
}

//edit category
export const caterogyEditReducer = (state = {caterogy:{}}, action) => {
    switch (action.type){
        case CATEROGY_UPDATE_REQUEST:
            return{ ...state, loading: true,}
        case CATEROGY_UPDATE_SUCCESS:
            return{ loading: false, caterogy: action.payload}
        case CATEROGY_UPDATE_FAIL:
            return{ loading: false, error: action.payload}
        case CATEROGY_UPDATE_RESET:
            return{caterogy: {}}
        default:
            return state
    }
}