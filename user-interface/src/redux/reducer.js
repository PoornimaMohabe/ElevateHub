import { LOGINFAILURE, LOGINLOADING, LOGINSUCCESS, LOGOUTFAILURE, LOGOUTLOADING, LOGOUTSUCCESS } from "./actionType"

const initialLoginState = {
    loading: false,
    error: false,
    login: false,
    data: "",
    role: "",
    email: "",
    userDetails: "", 
 
}

export const loginReducer = (state = initialLoginState, action) => {
    switch (action.type) {
        case LOGINLOADING:
            return {
                ...state, loading: true
            }
        case LOGINSUCCESS:
            return {
                ...state, loading: false, login: true, role: action.payload.user.role, email: action.payload.user.email, userDetails: action.payload.user, token : action.payload.token, data: action.payload.msg
            }
        case LOGINFAILURE:
            return {
                ...state, email: "", loading: false, login: false, error: action.payload, data: action.payload
            }
        case LOGOUTLOADING:
            return {
                ...state, loading: true
            };
        case LOGOUTSUCCESS:
            return {
                ...state, email: "", login: false, loading: false, data: action.payload, role: "", token : "", userDetails: ""
            };
        case LOGOUTFAILURE:
            return {
                ...state, loading: false, error: action.payload
            };
        default:
            return state
    }

}



