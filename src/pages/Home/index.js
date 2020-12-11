import React from 'react';
import { ButtonsGridStyled, HomeStyled } from './home.styles';
import LayouMain from '../Layout/Layou.main';
import { ButtonBig, ButtonAdd } from '../../components';
import { Add, Search } from '../../components/icons';
import { useLocation } from 'wouter';

const Home = () => {
    const [, pushLocation ] = useLocation();

    const itemsButtons = [
        {name: 'Agenda', icon: <Search/>},
        {name: 'Casos en Proceso', icon: <Search/>},
        {name: 'Historial de Casos', icon: <Search/>},
        {name: 'Buscador', icon: <Search/>},
        {name: 'Notificaciones', icon: <Search/>},
        {name: 'Calendario', icon: <Search/>, onClick: ()=>pushLocation('/calendar')}
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
