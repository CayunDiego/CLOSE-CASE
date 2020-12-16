import React from 'react';
import {
        LayoutStyled,
        ContainerStyled
    } from './layout.styles';

const LayoutBase = ({children}) => {
    return (
        <LayoutStyled>
            <ContainerStyled>
                {children}
            </ContainerStyled>
        </LayoutStyled>
    )
}

export default LayoutBase;
