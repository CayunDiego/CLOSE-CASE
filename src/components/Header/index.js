import React, { useState } from 'react';
import ButtonIcon from '../ButtonIcon';
import SideDrawer from '../SideDrawer';
import PopupShare from '../PopupShare'
import { Menu, BellActive, Share } from '../icons';
import {
    ContainerStyled,
    HeaderStyled,
    ImgStyled
} from './header.styles';
import { useLocation } from 'wouter';

const Header = () => {
    const [ path ] = useLocation();
    const [, pushLocation] = useLocation();
    const [sideDraweOpen, setsideDraweOpen] = useState(false);
    const [popUp, setPopUp] = useState(false);

    const drawerToggleClick = () =>{
        setsideDraweOpen(!sideDraweOpen);
    }

    return (
        <>
            <SideDrawer 
                click={drawerToggleClick} 
                sideDraweOpen={sideDraweOpen}/>
                 { 
                    popUp && <PopupShare onClick={()=>setPopUp(false)}/>
                }
                <HeaderStyled>
                <ContainerStyled>
                        <ButtonIcon onClick={drawerToggleClick}>
                            <Menu/>
                        </ButtonIcon>
                        <ImgStyled src='/assets/logoBlanco.svg' alt="logo"/>
                        {(path.includes('/profile/case') || path.includes('/profile/new-case')) 
                            ?
                                <ButtonIcon 
                                    onClick={()=>setPopUp(true)}
                                >
                                        <Share/>
                                </ButtonIcon>
                            : 
                                <ButtonIcon 
                                    onClick={()=>pushLocation('/notifications')}
                                >
                                        <BellActive/>
                                </ButtonIcon>
                         }
                    </ContainerStyled>
                </HeaderStyled>
        </>
        
    )
}

export default Header
