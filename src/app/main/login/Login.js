import React, {useState, useEffect} from 'react'
import {Card, CardContent, Divider, Hidden } from '@material-ui/core';
import JWTLoginTab from './tabs/JWTLoginTab';
import {makeStyles} from '@material-ui/styles';
import utilService from '../components/common/utilService'
import {useDispatch, useSelector} from 'react-redux';
import history from '@history';

const useStyles = makeStyles(theme => ({
    root: {
        // background: 'linear-gradient(to right, ' + theme.palette.primary.dark + ' 0%, ' + darken(theme.palette.primary.dark, 0.5) + ' 100%)',        
        // backgroundImage: url("assets/images/start/imagen.jpg"),        
        color     : theme.palette.primary.contrastText
    }
}));

function Login()
{
    const login = useSelector(({auth}) => auth.login);
    const forgotPwd = useSelector(({auth}) => auth.forgotPwd);
    const [retryCnt, setRetrycnt] = useState(0);

    useEffect(() => {
        setRetrycnt(retryCnt+1)     
        // if ( login.error.status && (login.error.status === 401 || login.error.status === 500) )
        // {
        //     setRetrycnt(retryCnt+1)     
        //     console.log( "retrycount" , retryCnt )       
        // }
    }, [login.error]);

    // var token = localStorage.getItem('jwt_access_token')
    // if ( token ){ 
    //     history.push('/home')
    // }

    var token = localStorage.getItem('jwt_access_token')    
    console.log('token', token)
    if ( token ){
        history.push('/home')    
    }
    return (
        // <div className={clsx(classes.root, "h-full flex flex-col flex-1 flex-shrink-0 p-24 md:flex-row md:p-0")}>
        
        <div className="max-h-full flex flex-col flex-1 flex-shrink-0 p-24 md:flex-row md:p-0" style={{backgroundImage: "url('assets/images/start/imagen.jpg')"}}>

            <Hidden smDown>
                <div className="flex flex-col flex-grow">                    
                    <img src="assets/images/start/imagen.jpg" className="max-w-full h-full object-cover" alt=""/>                    
                </div>
            </Hidden>            
           
            <Card className="w-full max-w-512 mx-auto m-16 md:m-0" square>
                
                <CardContent className="flex flex-col items-center justify-center p-32 md:p-48 h-full">

                    <img alt="" className="mr-12 w-full" src="assets/images/start/logo.png" alt="" style={{objectFit:'contain'}}/>
                        <h1 className="text-center md:w-full mb-12 md:pt-160">{utilService.getLangByCode('Common.Log in')}</h1>
                    <JWTLoginTab />

                    <div className="flex flex-col items-center justify-center pt-32">
                        <span className="font-medium text-12 mb-6">{utilService.getLangByCode('Common.No User')} <a href="#">{utilService.getLangByCode('Common.here')} </a> {utilService.getLangByCode('Common.for solicitor')}</span>
                        {retryCnt > 0 && <span className="font-medium text-12" style={{color:'#ff0000'}}>{utilService.getLangByCode('Common.Incorrect password')} - {retryCnt}/5</span> }                        
                        {retryCnt > 0 && <span className="font-medium text-12" style={{color:'#ff0000'}}>{utilService.getLangByCode('Common.Locked User')}</span>}
                    </div>
                    <div className="flex flex-col items-center justify-center pt-32 mt-auto">
                        <span className="font-medium">{utilService.getLangByCode('Common.See Supplier Portal')}</span>
                        <Divider className="mb-8 w-360"/>
                        <span className="text-10">{utilService.getLangByCode('Common.Info Message')}</span>
                    </div>

                </CardContent>
            </Card>
            
        </div>
    )
}

export default Login;
