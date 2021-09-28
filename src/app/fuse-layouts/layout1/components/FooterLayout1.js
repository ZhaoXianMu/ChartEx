import React from 'react';
import {AppBar, Toolbar,Typography, Hidden, Tooltip} from '@material-ui/core';
import {makeStyles, ThemeProvider} from '@material-ui/styles';
import clsx from 'clsx';
import {useSelector, useDispatch} from 'react-redux';
import * as Actions from '../../../store/actions';

function FooterLayout1(props)
{
    const footerTheme = useSelector(({fuse}) => fuse.settings.footerTheme);
    const footerOptions = useSelector(({fuse}) => fuse.footer.options);
    const dispatch = useDispatch();

    const useStyles = makeStyles(theme => ({
        footer: {
             backgroundColor: '#4d4d4d'    
        }
    }));
    const classes = useStyles(props);

    const toggleFooterButton = footerOption => {
        let event = {};
        event.type = footerOption.type;
        if ( footerOption.enable == undefined ){
            dispatch(Actions.emitFooterEvent(event));      
        }else{
            if ( footerOption.enable ){
                dispatch(Actions.emitFooterEvent(event));      
            }
        }        
    }

    return (
        <ThemeProvider theme={footerTheme}>
            <AppBar id="fuse-footer" className={clsx(classes.footer, "relative z-10")} color="default">
                <Toolbar className="xl:pl-512 lg:pl-256 md:pl-64 sm:pl-32 lg:pr-256 md:pr-128 sm:pr-32 py-0 flex items-center justify-center">
                    {
                        footerOptions.map((footerOption,index) => {
                            return (
                                <div key={index} className="flex cursor-pointer pl-24 pr-24" onClick={() => toggleFooterButton(footerOption)}>
                                    <div className="flex items-center">
                                        <Tooltip title={<h3 className="exo-regular">{footerOption.title}</h3>} placement="top">
                                            { footerOption.enable == undefined ?  <img src={`assets/images/bottom_bar_actions/${footerOption.iconName}.png`} alt=""/> :
                                             footerOption.enable ?  <img src={`assets/images/bottom_bar_actions/${footerOption.iconName}.png`} alt=""/>
                                            : <img src={`assets/images/bottom_bar_actions/${footerOption.iconName}.png`} alt="" style={{opacity: '0.5'}}/> }                                            
                                        </Tooltip>
                                    </div>
                                    <Hidden smDown>
                                        { footerOption.enable == undefined ? <Typography className="exo-bold text-16 ml-12 text-white">{footerOption.title}</Typography> :
                                        footerOption.enable ? <Typography className="exo-bold text-16 ml-12 text-white">{footerOption.title}</Typography>
                                        : <Typography className="exo-bold text-16 ml-12 text-white" style={{opacity: '0.5'}}>{footerOption.title}</Typography> }                                        
                                    </Hidden>                        
                                </div>
                            )
                        })
                    }                    
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    );
}

export default FooterLayout1;
