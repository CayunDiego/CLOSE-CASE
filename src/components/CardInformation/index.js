import React from 'react';
import {
    CardInformationContainer,
    TitleContainer,
    IconStyled,
    H2Styled,
    Icon2Styled
} from './cardInformation.styles';

const CardInformation = (props) => {

    const {
        title,
        icon,
        icon2,
        children
    } = props;

    return (
        <CardInformationContainer>
            <TitleContainer>
            <IconStyled>{icon}</IconStyled>
                <H2Styled>{title}</H2Styled>
            </TitleContainer>
            {children}
            <Icon2Styled>{icon2}</Icon2Styled>
        </CardInformationContainer>
    );
}

export default CardInformation;
