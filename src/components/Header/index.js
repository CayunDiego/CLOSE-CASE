import React, { useState } from 'react';
import ButtonIcon from '../ButtonIcon';
import SideDrawer from '../SideDrawer';
import { Menu, BellActive } from '../icons';
import {
    ContainerStyled,
    HeaderStyled,
    ImgStyled
} from './header.styles';

const Header = () => {
    const [sideDraweOpen, setsideDraweOpen] = useState(false);

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
                        <ImgStyled src='/assets/logoBlanco.svg' alt="logo"/>
                        <ButtonIcon >
                            <BellActive/>
                        </ButtonIcon>
                    </ContainerStyled>
                </HeaderStyled>
        </>
        
    )
}

export default Header
