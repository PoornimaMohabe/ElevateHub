
import axios from "axios"
import { LOGINFAILURE, LOGINLOADING, LOGINSUCCESS } from "./actionType"
import { loginUrl } from "../utils/url"


export const loginFunction = (fromData, showToast, navigate) => {
    return async (dispatch) => {
        dispatch({ type: LOGINLOADING })
        try {
            const response = await axios.post(loginUrl, fromData)
              if (response.data.msg == 'please register first or please check email') {
        
                showToast('please register first', `${response.data.msg}` , "error" )
                dispatch({ type: LOGINFAILURE, payload: response.data })
            }

            else if (response.data.msg == 'user login successfully') {
                console.log("Enter in success phase");
                console.log("user details : " , response.data.user);
                
                 const token = response.data.token
                localStorage.setItem("token", response.data.token)
                localStorage.setItem("user", JSON.stringify(response.data.user))
             
                showToast('Login successfull', `${response.data.msg}`  )
                navigate("/")
                dispatch({ type: LOGINSUCCESS, payload: response.data.user })
            }

            else if (response.data.msg == 'please check password') {
               
                showToast('Check password.',  "please check password." , "error")
                dispatch({ type: LOGINFAILURE, payload: response.data.msg })
            }

            else {
               
        
                showToast(`${response.data.mes}`, `${response.data.mes}` , "error")
                dispatch({ type: LOGINFAILURE, payload: response.data.msg })
            }


        } catch (error) {
            dispatch({ type: LOGINFAILURE, payload: error.message })
        }
    }
}



