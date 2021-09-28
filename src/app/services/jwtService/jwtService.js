import axios from 'axios';
import jwtDecode from 'jwt-decode';
import FuseUtils from '@fuse/FuseUtils';
import Config from 'app/main/components/common/Config'

class jwtService extends FuseUtils.EventEmitter {

    init()
    {
        this.setInterceptors();
        this.handleAuthentication();
    }

    setInterceptors = () => {
        axios.interceptors.response.use(response => {
            return response;
        }, err => {
            return new Promise((resolve, reject) => {
                if ( err.response.status === 401 && err.config && !err.config.__isRetryRequest )
                {
                    // if you ever get an unauthorized response, logout the user
                    this.emit('onAutoLogout', 'Invalid access_token');
                    this.setSession(null);
                }
                throw err;
            });
        });
    };

    handleAuthentication = () => {

        let access_token = this.getAccessToken();

        if ( !access_token )
        {
            this.emit('onNoAccessToken');

            return;
        }

        if ( this.isAuthTokenValid(access_token) )
        {
            this.setSession(access_token);
            this.emit('onAutoLogin', true);
        }
        else
        {
            this.setSession(null);
            this.emit('onAutoLogout', 'access_token expired');
        }
    };

    createUser = (data) => {
        return new Promise((resolve, reject) => {
            axios.post( Config.security_domain_url + '/api/auth/register', data)
                .then(response => {
                    if ( response.data.user )
                    {
                        this.setSession(response.data.access_token);
                        resolve(response.data.user);
                    }
                    else
                    {
                        reject(response.data.error);
                    }
                });
        });
    };

    signInWithEmailAndPassword = (email, password, companyId) => { 
        
        console.log( 'Config.login', Config.login )

        return new Promise((resolve, reject) => {

            axios.post( Config.login, {
                "email" : email,
                "password" : password,
                "companyId" : companyId
            })
            .then(response => {
                if ( response === undefined ){
                    
                }else {
                    if ( response && response.data && response.data.data && response.data.data.user )
                    {
                        localStorage.setItem('user_id', response.data.data.user.id);
                        this.setSession(response.data.data.token);
                        resolve(response.data.data.user);
                    }
                    else
                    {
                        reject(response.data.error);
                    }
                }
            })
            .catch(err => {
                const error = err.response;
                console.log( 'login error =', err )
                if ( error != undefined ){
                    // if error is 401 
                    if (error.status===401 || error.status === 500) {
                        console.log( "Login error , ", error )
                        reject(error);
                        return error
                    } 
                }else{
                    reject("error");
                    return error
                }
            })

            axios.interceptors.response.use(undefined, err => {
                const error = err.response;
                console.log( "Login error , ", error )
                // if error is 401 
                // if (error.status === 401 || error.status === 500) {
                    console.log( "Login error , ", error )
                    reject(error);
                    return error
                // } 
            });
        });
    };

    sendForgotPwd = (email) => {
        console.log(" send Forgot Pwd" , Config.forgot_pwd )
        
        return new Promise((resolve, reject) => {

            axios.post( Config.forgot_pwd, {
                "email" : email,
            })
                .then(response => {
                    if ( response.status === 200 ){
                        resolve( response )
                    }else{
                        reject( response )
                    }
                    console.log( "send Forgot pwd response ========>", response )                   
                });           
        });
    };
  

    signInWithToken = () => {
        return new Promise((resolve, reject) => {
            axios.get( Config.security_domain_url + '/api/auth/access-token', {
                data: {
                    access_token: this.getAccessToken()
                }
            })
                .then(response => {
                    if ( response.data.user )
                    {
                        this.setSession(response.data.access_token);
                        resolve(response.data.user);
                    }
                    else
                    {
                        this.logout();
                        reject('Failed to login with token.');
                    }
                })
                .catch(error => {
                    this.logout();
                    reject('Failed to login with token.');
                });
        });
    };

    updateUserData = (user) => {
        return axios.post('/api/auth/user/update', {
            user: user
        });
    };

    setSession = access_token => {
        if ( access_token )
        { 
            localStorage.setItem('jwt_access_token', access_token);
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
        }
        else
        { 
            localStorage.removeItem('jwt_access_token');
            delete axios.defaults.headers.common['Authorization'];
        }
    };

    logout = () => {
        this.setSession(null);        
    };

    isAuthTokenValid = access_token => {
        if ( !access_token )
        {
            return false;
        }
        const decoded = jwtDecode(access_token);
        const currentTime = Date.now() / 1000;
        if ( decoded.exp < currentTime )
        {
            console.warn('access token expired');
            return false;
        }
        else
        {
            return true;
        }
    };

    getAccessToken = () => {
        return window.localStorage.getItem('jwt_access_token');
    };
}

const instance = new jwtService();

export default instance;
