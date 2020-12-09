import React from 'react';
import {
    SideDrawerStyled,
    ContentStyled,
    FooterStyled,
    HeaderStyled
} from './sideDrawer.styles';
import CardUser from '../CardUser';
import ButtonSidebar from './ButtonSidebar';
import { Home, Add, Calendar, ClipBoard, File, Diary, Setting } from '../icons';


const NavSideDrawer = ({show}) => {
    // const [, pushLocation] = useLocation();

    const sidebarButton = [
        {name: 'Inicio', icon: <Home/>},
        {name: 'Crear Caso', icon: <Add/>},
        {name: 'Agenda', icon: <Diary/>},
        {name: 'Calendario', icon: <Calendar/>},
        {name: 'Casos en proceso', icon: <ClipBoard/>},
        {name: 'Historial de Casos', icon: <File/>},
        {name: 'Configuración', icon: <Setting/>},
    ]

    return (
        <SideDrawerStyled show={show}>
            <HeaderStyled>
                <CardUser/>
            </HeaderStyled>
            <ContentStyled>
                {
                    sidebarButton.map((button, index) => (
                        <ButtonSidebar
                            key={index}
                            icon={button.icon}
                        >
                            {button.name}
                        </ButtonSidebar>
                    ))
                }
            </ContentStyled>
            <FooterStyled>
                <button>
                    Cerrar Sesión
                </button>
            </FooterStyled>
        </SideDrawerStyled>
    )
}

export default NavSideDrawer;