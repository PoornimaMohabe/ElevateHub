
import axios from "axios"
import { LOGINFAILURE, LOGINLOADING, LOGINSUCCESS, LOGOUTFAILURE, LOGOUTLOADING, LOGOUTSUCCESS } from "./actionType"
import { loginUrl, mentorLogin } from "../utils/url"


export const loginFunction = (fromData, showToast, navigate) => {
    return async (dispatch) => {
        dispatch({ type: LOGINLOADING })
        try {
            const url = fromData.role === "mentor" ? mentorLogin : loginUrl;

            const response = await axios.post(url, fromData)
            console.log("this is from loginfuntion", response.data);
            
              if (response.data.msg == 'please register first or please check email') {
        
                showToast('please register first', `${response.data.msg}` , "error" )
                dispatch({ type: LOGINFAILURE, payload: response.data })
            }

            else if (response.data.msg == 'user login successfully') {
                console.log(response.data);
                
         
                
                 const token = response.data.token
                localStorage.setItem("token", response.data.token)
                localStorage.setItem("user", JSON.stringify(response.data.user))
                showToast('Login successfull', `${response.data.msg}`  )
                const redirectPath = localStorage.getItem("redirectPath")
               if (redirectPath) {
                    localStorage.removeItem("redirectPath")
                    navigate(redirectPath)
                }
                else {
                    navigate("/")
                }
                dispatch({ type: LOGINSUCCESS, payload: response.data })
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




export function logoutfunction(navigate,showToast ) {

    return async (dispatch) => {
        dispatch({ type: LOGOUTLOADING })
        try {
                dispatch({ type: LOGOUTSUCCESS  })
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                // localStorage.removeItem('user');
                navigate("/login")
                 
                showToast(`Logout successfully` , "Logout successfully"  )

        
        } catch (error) {
            dispatch({ type: LOGOUTFAILURE, payload: error.message })
            showToast(`${error.message}` ,`${error.message}` , "error" )

        }
    }
}