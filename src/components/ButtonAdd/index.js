import React from 'react';
import { ButtonStyled, IconStyled } from './buttonAdd.styles';

const ButtonAdd = (props) => {
    const {
        children,
        onClick,
        style,
        disabled,
        icon
    } = props;

    return (
        <ButtonStyled
            onClick={onClick}
            style={style}
            disabled={disabled}
        >
            <IconStyled>{icon}</IconStyled>
            {children}
        </ButtonStyled>
    )
}

export default ButtonAdd;
