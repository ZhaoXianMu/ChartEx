
import jwtService from 'app/services/jwtService';

export const FORGOT_PWD_ERROR = "FORGOT_ERROR";
export const FORGOT_PWD_SUCCESS = "FORGOT_SUCCESS";

export function submitForgotPwd({email})
{
    return (dispatch) => 
    jwtService.sendForgotPwd(email)
            .then((ret) => {
                    // dispatch(setUserData(user));
                    console.log( "forgot pwd success =>" )
                    return dispatch({
                        type: FORGOT_PWD_SUCCESS
                    });
                }
            )
            .catch(error => {
                console.log( "forgot pwd error =>", error )
                return dispatch({
                    type   : FORGOT_PWD_ERROR,
                    payload: error
                });
            });
      
}

