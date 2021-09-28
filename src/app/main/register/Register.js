import React, {useState} from 'react';
import {Card, CardContent, Divider, Hidden} from '@material-ui/core';
// import {FuseAnimate} from '@fuse';
//import clsx from 'clsx';
import JWTRegisterTab from './tabs/JWTRegisterTab';
import {makeStyles} from '@material-ui/styles';
import utilService from '../components/common/utilService'



const useStyles = makeStyles(theme => ({
    root: {
        // background: 'linear-gradient(to right, ' + theme.palette.primary.dark + ' 0%, ' + darken(theme.palette.primary.dark, 0.5) + ' 100%)',
        color     : theme.palette.primary.contrastText
    }
}));

function Register()
{
    //const classes = useStyles();
    // const [setSelectedTab] = useState(0);
    const [ProfileImg, setProfileImg] = useState(null);

    const changeImage = (e) => {
        if (e)
            e.preventDefault();
        
            var event = new MouseEvent('click', {
                'view': window, 
                'bubbles': true, 
                'cancelable': false
            });
            var node = document.getElementById('profileImageFile');
            node.dispatchEvent(event);    
    };
    
    const uploadProfileImage = (event) => {    
        event.preventDefault();     
        setProfileImg( URL.createObjectURL(event.target.files[0]) )
    }   
  
    return (
        

        // <div className={clsx(classes.root, "max-h-full flex flex-col flex-1 flex-shrink-0 p-24 md:flex-row md:p-0")}>
        <div className="max-h-full flex flex-col flex-1 flex-shrink-0 p-24 md:flex-row md:p-0"  style={{backgroundImage: "url('assets/images/start/imagen.jpg')"}}>
        <Hidden smDown>
            <div className="flex flex-col flex-grow">                    
                <img src="assets/images/start/imagen.jpg" className="max-w-full h-full object-cover" alt=""/>                    
            </div>
        </Hidden>            

        {/* <FuseAnimate animation={{translateX: [0, '100%']}}> */}

            <Card className="w-full max-w-512 mx-auto m-16 md:m-0" square>

                <CardContent className="flex flex-col items-center justify-center p-32 md:p-48 h-full">

                    <img className="mr-12 w-full" src="assets/images/start/logo.png" alt="" style={{objectFit:'contain'}}/>
                        <h1 className="exo-bold md:w-full ml-64 mb-12 mt-12">{utilService.getLangByCode('Common.Confirm user data')}</h1>
                    <div className="flex flex-row w-full ml-64">
                    <div className="mr-32 inline">
                            <a href="" onClick={changeImage}>
                            { ProfileImg == null ? <img id="profileImage" src={'assets/images/start/perfil_de_usuario.png'}
                                        className="w-full" alt={""} style={{width:'100px', height:'100px', objectFit:'contain'}} /> :
                                        <img id="profileImage" src={ProfileImg }
                                        className="w-full bg-invoice-gray-color" alt={""} style={{width:'100px', height:'100px', objectFit:'contain', borderRadius:'50px'}} />}                                            
                           
                            </a>

                            <div className="form-group" style={{ display:'none' }}>                            
                                <input type="file"  className="form-control" id="profileImageFile" name="profileImageFile" onChange={uploadProfileImage} accept="image/*" />
                            </div>
                        </div>

                        <div className="flex flex-col mt-16">
                            <h3 className="exo-bold mb-6">Nombre Apellido</h3>
                            <div className="flex flex-row items-center">
                                <h5 className="exo-bold inline mr-12">{utilService.getLangByCode('Common.E-mail:')}</h5>
                                <h6>usuario@empresa.com</h6>
                            </div>                            
                        </div>
                    </div>

                    <h1 className="text-center md:w-full mb-12 md:pt-160">{utilService.getLangByCode('Common.Log in')}</h1>
                    <JWTRegisterTab />

                    <div className="flex flex-col items-center justify-center pt-32">
                        <span className="font-medium text-12 mb-6">{utilService.getLangByCode('Common.No User')} <a href="#">{utilService.getLangByCode('Common.here')}</a> {utilService.getLangByCode('Common.for solicitor')}</span>
                        <span className="font-medium text-12" style={{color:'#ff0000', display:'none'}}>{utilService.getLangByCode('Common.Incorrect password')} - 1/5</span>
                        <span className="font-medium text-12" style={{color:'#ff0000', display:'none'}}>{utilService.getLangByCode('Common.Locked User')}</span>
                    </div>
                    <div className="flex flex-col items-center justify-center pt-32 mt-auto">
                        <span className="font-medium">{utilService.getLangByCode('Common.See Supplier Portal')}</span>
                        <Divider className="mb-8 w-360"/>
                        <span className="text-10">{utilService.getLangByCode('Common.Info Message')}</span>
                    </div>

                </CardContent>
            </Card>
        {/* </FuseAnimate> */}
    </div>
    )
}

export default Register;
