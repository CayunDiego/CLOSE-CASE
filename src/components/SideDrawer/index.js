import React from 'react';
import NavSideDrawer from './NavSideDrawer';
import {
    BackdropStyled
} from './sideDrawer.styles';

const SideDrawer = ({click, sideDraweOpen}) => {
    return (
        <>
            <NavSideDrawer show={sideDraweOpen} setShow={click}/>
            {sideDraweOpen && (<BackdropStyled onClick={click}/>)}
        </>
    )
}

export default SideDrawer;