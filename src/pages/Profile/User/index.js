import React from 'react';
import { Edit } from '../../../components/icons';
import LayoutMain from '../../Layout/Layout.main';
import { HeadProfile, CardInformation, Navbar } from '../../../components';
import {
    CaseProfileContainer,
    StyledLi,
} from './user.styles';

const UserProfile = () => {

    const items = [
        'Nombre y Apellido:',
        'DNI:',
        'Domicilio:',
        'Teléfono:',
        'Mail:',
        'Provincia:',
        'Localidad:'
    ];

    const cardItems = items.map(item => {
        return (
            <StyledLi>{item}</StyledLi>
        );
    })

    return (
        <LayoutMain> 
            <CaseProfileContainer>
                <HeadProfile
                    userName="Abg. Diego Doello"
                />
                <Navbar/>
                <CardInformation
                    title="Datos de Usuario"
                    children={cardItems}
                    icon2={<Edit/>}
                />
            </CaseProfileContainer>
        </LayoutMain>
    );
}

export default UserProfile;
