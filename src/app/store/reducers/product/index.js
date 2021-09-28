import {combineReducers} from 'redux';
import prods from './prod.reducer';

const prodsReducers = combineReducers({
    prods    
});

export default prodsReducers;
