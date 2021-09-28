import {combineReducers} from 'redux';
import user from './user.reducer';
import login from './login.reducer';
import register from './register.reducer';
import forgotPwd from './forgot_pwd.reducer';

const authReducers = combineReducers({
    user,
    login,
    register,
    forgotPwd
});

export default authReducers;