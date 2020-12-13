import React from 'react';
import { ButtonsGridStyled, HomeStyled } from './home.styles';
import LayouMain from '../Layout/Layout.main';
import { ButtonBig, ButtonAdd } from '../../components';
import { Add, Search, File, ClipBoard, BellActive, Calendar, Users } from '../../components/icons';
import { useLocation } from 'wouter';

const Home = () => {
    const [, pushLocation ] = useLocation();

    const itemsButtons = [
        {name: 'Agenda', icon: <Users/>},
        {name: 'Casos en Proceso', icon: <ClipBoard/>},
        {name: 'Historial de Casos', icon: <File/>},
        {name: 'Buscador', icon: <Search/>},
        {name: 'Notificaciones', icon: <BellActive/>},
        {name: 'Calendario', icon: <Calendar/>, onClick: ()=>pushLocation('/calendar')}
    ];

    return (
        <LayouMain>
            <HomeStyled>
                <ButtonsGridStyled>
                    {
                        itemsButtons.map((item, index) => 
                            <ButtonBig
                                key={index}
                                icon={item.icon}
                                onClick={item.onClick}
                            >
                                {item.name}
                            </ButtonBig>
                        )
                    }
                </ButtonsGridStyled>
                <ButtonAdd
                    icon={<Add/>}
                >
                    CREAR NUEVO CASO
                </ButtonAdd>
            </HomeStyled>
        </LayouMain>
    )
}

export default Home;
