
import prodService from 'app/services/common/prodService';

export const GET_ALL_PRODS_ERROR = "GET_ALL_PRODS_ERROR";
export const GET_ALL_PRODS_SUCCES = "GET_ALL_PRODS_SUCCES";

export function handleGetAllProducts()
{    

    console.log( 'action -')
    return (dispatch) => 
            prodService.getAllProducts()    
            .then((ret) => {
                    return dispatch({
                        type: GET_ALL_PRODS_SUCCES,
                        payload: ret
                    });
                }
            )
            .catch(error => {
                return dispatch({
                    type   : GET_ALL_PRODS_ERROR,
                    payload: error
                });
            });
      
}
