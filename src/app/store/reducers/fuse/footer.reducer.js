import * as Actions from '../../actions/fuse/index';

const initialState = {
    event  : {},
    options: []
};

const footer = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.GET_FOOTER_SETTING:
        {
            return {
                ...state
            };
        }
        case Actions.SET_FOOTER_SETTING:
        {
            return {
                ...state,
                options:[...action.options]
            };
        }
        case Actions.EMIT_FOOTER_EVENT:
        {
            return {
                ...state,
                event:{...action.event}
            };
        }
        case Actions.RESET_FOOTER_EVENT:
        {
            return {
                ...state,
                event:{...initialState.event}
            };
        }
        default:
        {
            return state;
        }
    }
};

export default footer;
