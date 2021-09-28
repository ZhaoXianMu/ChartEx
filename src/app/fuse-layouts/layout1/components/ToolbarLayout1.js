import React, {useState} from 'react';
import {Typography, AppBar, Hidden, Toolbar, Button, Popover, OutlinedInput, Tooltip} from '@material-ui/core';
import { Popup } from '@progress/kendo-react-popup';
import {makeStyles, ThemeProvider} from '@material-ui/styles';
import clsx from 'clsx';
import NavbarMobileToggleButton from 'app/fuse-layouts/shared-components/NavbarMobileToggleButton';
import {useSelector, useDispatch} from 'react-redux';
import * as authActions from 'app/auth/store/actions';

import utilService from 'app/main/components/common/utilService';
import history from '@history';

const useStyles = makeStyles(theme => ({
    separator: {
        width          : 1,
        height         : 100,
        backgroundColor: theme.palette.divider
    },
    header: {
        height : 100,
        backgroundColor: '#00ccff',
        borderBottom: '10px solid #4d4d4d'    
    },
    appBar: {
        boxShadow: 'none'        
    }
}));


function ToolbarLayout1(props)
{
    const dispatch = useDispatch();
    
    const config = useSelector(({fuse}) => fuse.settings.current.layout.config);
    const toolbarTheme = useSelector(({fuse}) => fuse.settings.toolbarTheme);
    // const companies = useSelector(({company}) => company.company.users_in_company);
    const user = useSelector(({auth}) => auth.user);
    const login = useSelector(({auth}) => auth.login);

    const classes = useStyles(props);

    const [isShowPopUp, setIsShowPopUp] = useState(false);
    const [isAnimate, setIsAnimate] = useState(false);
    const [openDuration, setOpenDuration] = useState(300);
    const [closeDuration, setCloseDuration] = useState(300);
    const [anchor, setAnchor] = useState(null)
    const [popupAlign, setPopupAlign] = useState(  {
        horizontal: 'right',
        vertical: 'top'
    })
    const [anchorAlign, setAnchorAlign] = useState({
        horizontal: 'right',
        vertical: 'bottom'
    })
    const [offset, setOffset] = useState({
        left: 550,
        top: 80
    })
    const [isLocked1, setIsLocked1] = useState(false)
    const [isLocked2, setIsLocked2] = useState(false)
    const [isLocked3, setIsLocked3] = useState(false)
    const [isLocked4, setIsLocked4] = useState(false)
   
    function handleChangeShowPopUp(event)
    {
       setIsShowPopUp( !isShowPopUp )
    }

    function handleChangeAnchor(event, value)
    {        
        var obj = document.getElementById("comTitle");        
        setAnchor(obj)        
    }

    function handleLocked1(event)
    {
        setIsLocked1( true )
        setIsLocked2( false )
        setIsLocked3( false )
        setIsLocked4( false )

    }
    function handleLocked2(event)
    {
        setIsLocked1( false )
        setIsLocked2( true )
        setIsLocked3( false )
        setIsLocked4( false )
    }
    function handleLocked3(event)
    {
        setIsLocked1( false )
        setIsLocked2( false )
        setIsLocked3( true )
        setIsLocked4( false )
    }
    function handleLocked4(event)
    {
        setIsLocked1( false )
        setIsLocked2( false )
        setIsLocked3( false )
        setIsLocked4( true )
    }

    function handlePopup(event)
    {
        setIsShowPopUp(false)
    }

    return (
        <ThemeProvider theme={toolbarTheme}>
            <AppBar id="fuse-toolbar" className={clsx(classes.appBar, "flex relative z-10")} color="default">
                <Toolbar className={clsx(classes.header, "p-0")}>

                    {config.navbar.display && config.navbar.position === 'left' && (
                        <Hidden lgUp>
                            <NavbarMobileToggleButton className="w-64 h-64 p-0"/>
                            {/* <div className={classes.separator}/> */}
                        </Hidden>
                    )}

                    <div className="flex flex-1">
                        {/* <Hidden mdDown>
                            <FuseShortcuts className="px-16"/>
                        </Hidden> */}
                        {/* <Hidden mdDown>
                            <img src="assets/images/header/header_logo.png" alt="App Logo" style={{ width: '224px', marginLeft:'40px' }} />
                        </Hidden>
                        <Hidden lgUp>
                            <img src="assets/images/header/header_logo.png" alt="App Logo" style={{ width: '224px' }} />
                        </Hidden>  */}
                        {/* <Hidden lgUp>
                            <Hidden xsDown>
                            <img src="assets/images/header/header_logo.png" alt="App Logo" style={{ width: '224px' }} />
                            </Hidden>
                        </Hidden> */}
                        
                    </div>

                    <div className="flex">

                            <div className="flex flex-col items-end flex-1 flex-shrink-0 pr-40">                            
                                                           
                               
                                {/* <div className="flex mb-5">
                                    
                                     <div className="flex cursor-pointer mr-48" onClick={() => {
                                        history.push({
                                            pathname: '/admin/users/detail'
                                        });
                                    }}>
                                        <Tooltip title={<h3 className="exo-regular">{utilService.getLangByCode("layout.header.Aprobador")}</h3>} placement="bottom-start">
                                            <img src="assets/images/header/header_usuario.png" alt="" style={{ height:'25px', objectFit:'contain'}}/>
                                        </Tooltip>
                                        <Hidden xsDown>
                                        <Typography className="exo-bold text-16 ml-12 text-white">{utilService.getLangByCode("layout.header.Aprobador")}</Typography>
                                        </Hidden>
                                    </div>
                                    <div className="flex cursor-pointer" onClick={() => {
                                        console.log( "call authAction" );
                                        dispatch(authActions.logoutUser());                                        
                                    }}>
                                        <Tooltip title={<h3 className="exo-regular">{utilService.getLangByCode("layout.header.Cerrar Sesión")}</h3>} placement="bottom-start">
                                            <img src="assets/images/header/header_cerrar_sesion.png" alt="" style={{ height:'25px', objectFit:'contain'}}/>
                                        </Tooltip>
                                        <Hidden xsDown>
                                            <Typography className="exo-bold text-16 ml-12 text-white">{utilService.getLangByCode("layout.header.Cerrar Sesión")}</Typography>
                                        </Hidden>
                                    </div>
                                </div> */}
                            </div>
                        
                        {/* <Hidden lgUp>
                            <UserMenu/>
                        </Hidden>  */}
                    </div>

                    {config.navbar.display && config.navbar.position === 'right' && (
                        <Hidden lgUp>
                            <NavbarMobileToggleButton/>
                        </Hidden>
                    )}
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    );
}

export default ToolbarLayout1;