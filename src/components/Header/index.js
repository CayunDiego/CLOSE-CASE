import React, { useState } from 'react';
import ButtonIcon from '../ButtonIcon';
import SideDrawer from '../SideDrawer';
import { Menu, BellActive } from '../icons';
import {
    ContainerStyled,
    HeaderStyled,
} from './header.styles';

const Header = () => {
    const [sideDraweOpen, setsideDraweOpen] = useState(true);

    const drawerToggleClick = () =>{
        setsideDraweOpen(!sideDraweOpen);
    }


    return (
        <>
             <SideDrawer 
                click={drawerToggleClick} 
                sideDraweOpen={sideDraweOpen}/>
                <HeaderStyled>
                <ContainerStyled>
                        <ButtonIcon onClick={drawerToggleClick}>
                            <Menu/>
                        </ButtonIcon>
                        <p>LOGOOOOO</p>
                        <ButtonIcon >
                            <BellActive/>
                        </ButtonIcon>
                    </ContainerStyled>
                </HeaderStyled>
        </>
        
    )
}

export default Header
