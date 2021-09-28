import * as Actions from '../../actions/product/index';

const initialState = {
    state  : null,
    prods: []
};

const prods = function (state = initialState, action) {

    
    switch ( action.type )
    {
        case Actions.GET_ALL_PRODS_SUCCES:
        {
            console.log( 'reducer =', action.payload )
            return {
                state  : true,
                prods : action.payload
            };
        }
        case Actions.GET_ALL_PRODS_ERROR:
        {
            return {
                ...state,
                state: null
            };
        }        
        default:
        {
            return state;
        }
    }
};

export default prods;
