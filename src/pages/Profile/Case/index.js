import React, { useState } from 'react';
import LayoutMain from '../../Layout/Layout.main';
import { HeadProfile, CardInformation, CardHistory, Button } from '../../../components';
import { Info, Edit, BellActive, Calendar, Sheet} from '../../../components/icons';
import {
    CaseProfileContainer,
    StyledLi,
    IconsContainer,
    IconStyled,
    ImgDocumentStyled,
    MainButtonsContainer,
    FirstButtonsContainer,
    LastContainer
} from './case.styles';
import { useLocation } from 'wouter';

const CaseProfile = () => {
    const [ path ] = useLocation();
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
                {path.includes('/profile/new-case') ?
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
                    :
                    <LastContainer>
                        <CardHistory/>
                        <ImgDocumentStyled src="/assets/documento.png" alt="documento"/>
                        <MainButtonsContainer>
                            <FirstButtonsContainer>
                                <Button children="Ver"/>
                                <Button children="Editar"/>
                            </FirstButtonsContainer>
                            <Button children="Imprimir"/>
                        </MainButtonsContainer>
                    </LastContainer>
                }
            </CaseProfileContainer>
        </LayoutMain>
    );
}

export default CaseProfile;
