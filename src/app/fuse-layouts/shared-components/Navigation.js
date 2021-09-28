import React from 'react';
import {FuseNavigation} from '@fuse';
import clsx from 'clsx';
import {useSelector} from 'react-redux';
import utilService from 'app/main/components/common/utilService'

function Navigation(props)
{
    const navigation = useSelector(({fuse}) => fuse.navigation);

    return (
        <FuseNavigation className={clsx("navigation", props.className)} navigation={navigation} layout={props.layout} dense={props.dense} active={props.active}>
            {translateNavbarTitles(navigation[0])}            
        </FuseNavigation>
    );
}


function translateNavbarTitles(navigation)
{
    var title = navigation.title;

    var newTitle_code = 'sidebar.menu.' + title;
    var newTitle = utilService.getLangByCode(newTitle_code); 

    if ( newTitle_code === newTitle ) {
    
    } else {
        navigation.title = newTitle
    }

    if (navigation.children !== undefined && navigation.children.length > 0 ) {
        for (var i = 0; i < navigation.children.length; i++){
            translateNavbarTitles(navigation.children[i])
        }
    }

    return true
}



Navigation.defaultProps = {
    layout: "vertical"
};

export default Navigation;
