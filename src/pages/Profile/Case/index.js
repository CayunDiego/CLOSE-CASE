import React from 'react';
import { Info, Edit, BellActive, Calendar, Sheet} from '../../../components/icons';
import LayoutMain from '../../Layout/Layout.main';
import { HeadProfile, CardInformation } from '../../../components';
import {
    CaseProfileContainer,
    StyledLi,
    IconsContainer,
    IconStyled
} from './case.styles';

const CaseProfile = () => {

    const items = [
        'Nombre:',
        'Tipo de Caso:',
        'Abogado:',
        'Domicilio:',
        'Teléfono:',
        'Mail:',
        'Provincia:',
        'Localidad:',
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
                    description="Última edición:"
                    date="30/07/2019"
                    status="En proceso"
                    buttonTitle="Finalizar Caso"
                />
                <CardInformation
                    icon={<Info/>}
                    title="Información del Cliente"
                    children={cardItems}
                    icon2={<Edit/>}
                />
                <IconsContainer>
                    <IconStyled>
                        <Sheet/>
                    </IconStyled>
                    <IconStyled>
                        <BellActive/>
                    </IconStyled>
                    <IconStyled>
                        <Calendar/>
                    </IconStyled>
                </IconsContainer>
            </CaseProfileContainer>
        </LayoutMain>
    );
}

export default CaseProfile;
