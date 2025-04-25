import { LOGINFAILURE, LOGINLOADING, LOGINSUCCESS } from "./actionType"

const initialLoginState = {
    loading: false,
    error: false,
    login: false,
    data: "",
    role: "",
    email: "",
    userDetails: ""
}

export const loginReducer = (state = initialLoginState, action) => {
    switch (action.type) {
        case LOGINLOADING:
            return {
                ...state, loading: true
            }
        case LOGINSUCCESS:
            return {
                ...state, loading: false, login: true, role: action.payload.role, email: action.payload.email, userDetails: action.payload
            }
        case LOGINFAILURE:
            return {
                ...state, email: "", loading: false, login: false, error: action.payload, data: action.payload
            }
       
        default:
            return state
    }

}


