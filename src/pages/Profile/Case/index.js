import React, { useState } from 'react';
import LayoutMain from '../../Layout/Layout.main';
import { HeadProfile, CardInformation, CardHistory } from '../../../components';
import { Info, Edit, BellActive, Calendar, Sheet} from '../../../components/icons';
import {
    CaseProfileContainer,
    StyledLi,
    IconsContainer,
    IconStyled
} from './case.styles';

const CaseProfile = () => {
    const [ color, setColor ] = useState("third");
    const [ isActive, setIsActive ] = useState(true);
    const [ title, setTitle] = useState("Finalizar");
    const [ status, setStatus ] = useState("En Proceso");

    const handleOnClick = () => {
        if (isActive) {
            setIsActive(false);
            setColor("fourth");
            setTitle("Activar");
            setStatus("Finalizado");
        } else {
            setIsActive(true);
            setColor("third");
            setTitle("Finalizar");
            setStatus("En Proceso");
        }
    }

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
    });

    return (
        <LayoutMain> 
            <CaseProfileContainer>
                <HeadProfile
                    onClick={handleOnClick}
                    description="Última edición:"
                    date="30/07/2019"
                    caseStatus={status}
                    buttonTitle={`${title} Caso`}
                    buttonColor={color}
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
