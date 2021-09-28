import * as Actions from '../../actions/audit/index';

const initialState = {
    state  : null,
    audits: [],
    audit: {}
};

const audit = function (state = initialState, action) {

    switch ( action.type )
    {
        case Actions.AUDIT_TRAIL_SUCESS:
        {
            return {
                state  : true,
                audits: action.payload
            };
        }
        case Actions.AUDIT_TRAIL_ERROR:
        {
            return {
                ...state,
                state: null
            };
        }
        case Actions.AUDIT_TRAIL_BY_ID_SUCESS:
        {
            return {
                state  : true,
                audit: action.payload
            };
        }
        case Actions.AUDIT_TRAIL_BY_ID_ERROR:
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

export default audit;
