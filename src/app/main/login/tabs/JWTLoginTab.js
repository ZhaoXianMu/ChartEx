import React, {useEffect, useRef, useState} from 'react';
// import clsx from 'clsx';
import {Button} from '@material-ui/core';
// import FormGroup from '@material-ui/core/FormGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import { makeStyles } from '@material-ui/core/styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

// import {TextFieldFormsy} from '@fuse';
import Formsy from 'formsy-react';
import * as authActions from 'app/auth/store/actions';
import {useDispatch} from 'react-redux';
import history from '@history';
import { Input } from '@progress/kendo-react-inputs';
// import { Checkbox } from '@progress/kendo-react-inputs';
import utilService from '../../components/common/utilService'


function JWTLoginTab(props)
{
    
    const dispatch = useDispatch();

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);

    const [isOpenDlg, setIsOpenDlg] = useState(false);
    const formRef = useRef(null);

    function disableButton()
    {
        // setIsFormValid(false);
    }

    function enableButton()
    {
        // setIsFormValid(true);
    }

    function handleSubmit(model)
    {
        // history.push('/home')       
        console.log( 'username =', userName )
        dispatch(authActions.submitLogin({
            email : userName,
            password : password,
            companyId: 0
        })); 
    }

    const handleClickOpen = () => {
        setIsOpenDlg(true);        
    };
    
    const handleClose = () => {
        setIsOpenDlg(false);
    };

    const handleSendForgotPwd = () => {
        const emailForgot = document.getElementById('email-forgot-pwd').value
        setIsOpenDlg(false);
        dispatch(authActions.submitForgotPwd({
            email : emailForgot,            
        })); 
    };

    const changeUserName = (e) => {
        setUserName( e.target.value )
    }

    const changePassword = (e) => {
        setPassword( e.target.value )
    }

    const changeRememberState = (e) => {
        setRemember( !remember )
        localStorage.setItem('remember', !remember )
    }
    
    // "email": "test@acomp.com",
    // "password": "Pa$$w0rd"
    
    return (
        
        <div className="w-full">
            <Formsy
                onValidSubmit={handleSubmit}
                onValid={enableButton}
                onInvalid={disableButton}
                ref={formRef}
                className="flex flex-col justify-center w-full"
            >
                <Input
                    name="text"
                    type="text"
                    style={{width:'100%', height:'50px', marginBottom: '16px'}}
                    value={userName}
                    onChange={changeUserName}
                />

                <Input
                    name="Password"
                    type="password"
                    style={{width:'100%',height:'50px', marginBottom: '16px'}}
                    value={password}
                    onChange={changePassword}
                />

                <div className="flex flex-row items-center">
                    <div className="mr-32">
                        {/* <Checkbox label={utilService.getLangByCode('Standard_Home.Remember user')} style={{color:'blue'}} checked={remember} onClick={changeRememberState}/> */}
                    </div>
                    
                    <Button className="normal-case" color="secondary" style={{height:'25px', fontSize:'15'}} onClick={handleClickOpen} >
                         {utilService.getLangByCode('Standard_Home.I forgot my password')}
                            </Button>
                </div>
                
                <Button
                    type="submit"
                    variant="contained"
                    className="w-full mx-auto mt-16 normal-case text-white"
                    aria-label="LOG IN"
                    value="legacy"
                    style={{backgroundColor: '#0fa9c0', color:'white'}}                                
                >
                    {utilService.getLangByCode('Standard_Home.Sign In')}
                </Button>

            </Formsy>
            
            <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={isOpenDlg} >
                <DialogTitle id="simple-dialog-title">{utilService.getLangByCode('Standard_Home.I forgot my password')}</DialogTitle>
                <div className="w-full sm:w-full md:w-512" style={{padding:'12px'}}>
                    <h6 className="mb-12 ml-12 mr-12">{utilService.getLangByCode('Common.forgot_content')}</h6>
                    
                    <div className="flex flex-row ml-12 mr-12">
                        <Input
                            id="email-forgot-pwd"
                            name="email"
                            type="text"
                            style={{width:'100%'}}                            
                        />
                    </div>
                    
                    <div className="flex flex-row ml-12 mr-12 mt-12 mb-12">                        
                        <Button
                            variant="contained"
                            className="w-full mx-auto mt-16 normal-case text-white"
                            aria-label="LOG IN"                                                        
                            style={{backgroundColor: '#0fa9c0', width:'70%', height:'30px', color:'white' }}
                            onClick={handleSendForgotPwd}                                                      
                        >
                            {utilService.getLangByCode('Common.Send ')}
                        </Button>
                        <Button
                            variant="contained"
                            className="w-full mx-auto mt-16 normal-case text-white ml-12"
                            aria-label="LOG IN"
                            // disabled={!isFormValid}
                            value="legacy"
                            style={{backgroundColor: '#0fa9c0', width:'30%', height:'30px', color:'white'}}
                            onClick={handleClose}                            
                        >
                            {utilService.getLangByCode('Common.Cancel')}
                        </Button>
                    </div>
                </div>
            </Dialog>
        </div>        
    );
}

export default JWTLoginTab;
