import React, {useEffect, useRef, useState} from 'react';
import Formsy from 'formsy-react';
import {Button} from '@material-ui/core';

// import * as authActions from 'app/auth/store/actions';
import {useSelector} from 'react-redux';
// import {useDispatch} from 'react-redux';
import history from '@history';
import { Input } from '@progress/kendo-react-inputs';
import { Checkbox } from '@progress/kendo-react-inputs';
import utilService from '../../components/common/utilService'

function JWTRegisterTab(props)
{
    // const dispatch = useDispatch();
    const register = useSelector(({auth}) => auth.register);

    const [setIsFormValid] = useState(false);
    const formRef = useRef(null);

    useEffect(() => {
        if ( register.error && (register.error.username || register.error.password || register.error.email) )
        {
            formRef.current.updateInputsWithError({
                ...register.error
            });
            disableButton();
        }
    }, [register.error]);

    function disableButton()
    {
        setIsFormValid(false);
    }

    function enableButton()
    {
        setIsFormValid(true);
    }

    function handleSubmit(model)
    {
        // dispatch(authActions.submitRegister(model));
        history.push("/home")
    }

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
                    name="Email"
                    type="email"
                   
                    minLength={1}
                    maxLength={18}
                    style={{width:'100%', height:'50px', marginBottom: '16px'}}
                   
                />

                <Input
                    name="Password"
                    type="password"
                    // label="Confirm Password"
                    // required={true}
                    minLength={1}
                    maxLength={18}
                    style={{width:'100%', height:'50px', marginBottom: '16px'}}
                    // validationMessage={passwordValidationMessage}
                />
                <Input
                    name="confirmPassword"
                    type="Password"
                    // label="Confirm Password"
                    // required={true}
                    minLength={1}
                    maxLength={18}
                    style={{width:'100%', height:'50px', marginBottom: '16px'}}
                    // validationMessage={passwordValidationMessage}
                />
                <Checkbox label={utilService.getLangByCode('Standard_Home.Remember user')}/>
                
                <Button
                    type="submit"
                    variant="contained"
                    className="w-full mx-auto mt-16 normal-case"
                    aria-label="REGISTER"
                    // disabled={!isFormValid}
                    value="legacy"
                    style={{backgroundColor: '#0fa9c0', color:'white'}}
                >
                    {utilService.getLangByCode('Standard_Home.Sign In')}
                </Button>

            </Formsy>

        </div>
    );
}

export default JWTRegisterTab;
