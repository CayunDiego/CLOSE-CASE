import React, { useContext } from 'react';
import { ButtonsGridStyled, HomeStyled } from './home.styles';
import LayouMain from '../Layout/Layout.main';
import { ButtonBig, ButtonAdd } from '../../components';
import { Add, Search, File, ClipBoard, BellActive, Calendar, Users } from '../../components/icons';
import { useLocation } from 'wouter';
import searchContext from '../../context/searchContext';

const Home = () => {
    const [, pushLocation ] = useLocation();
    const { search, setSearch } = useContext(searchContext);

    const itemsButtons = [
        {name: 'Agenda', icon: <Users/>, onClick: ()=>pushLocation('/addressBook')},
        {name: 'Casos en Proceso', icon: <ClipBoard/>, onClick: ()=>pushLocation('/casesProcess')},
        {name: 'Historial de Casos', icon: <File/>, onClick: ()=>pushLocation('/caseHistory')},
        {name: 'Buscador', icon: <Search/>, onClick: ()=> setSearch(true)},
        {name: 'Notificaciones', icon: <BellActive/>, onClick: ()=>pushLocation('/notifications')},
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
                    onClick={()=>pushLocation('/addCase')}
                >
                    CREAR NUEVO CASO
                </ButtonAdd>
            </HomeStyled>
        </LayouMain>
    )
}

export default Home;
