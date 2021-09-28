import React from 'react';
import {FuseScrollbars} from '@fuse';
import Navigation from 'app/fuse-layouts/shared-components/Navigation';

function NavbarLayout2()
{
    return (
        <div className="flex flex-auto justify-between items-center w-full h-full container p-0 lg:px-24">

            <FuseScrollbars className="flex h-full items-center">
                <Navigation className="w-full" layout="horizontal"/>
            </FuseScrollbars>
        </div>
    );
}

export default NavbarLayout2;


