import React from 'react';
import { TitleStyled } from './title.styles';

const Title = ({children}) => {
    return (
        <TitleStyled>
            {children}
        </TitleStyled>
    )
}

export default Title;
