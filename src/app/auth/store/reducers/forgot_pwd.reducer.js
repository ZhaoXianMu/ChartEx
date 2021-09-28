import * as Actions from '../actions';

const initialState = {
    success: false,    
};

const forgotPwd = function (state = initialState, action) {
    
    switch ( action.type )
    {
        case Actions.FORGOT_PWD_SUCCESS:
        {
            return {
                ...initialState,
                success: true
            };
        }
        case Actions.FORGOT_PWD_ERROR:
        {
            return {
                success: false,                
            };
        }
        default:
        {
            return state
        }
    }
};

export default forgotPwd;