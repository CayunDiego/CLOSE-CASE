import React from 'react';
import { ButtonStyled, IconStyled } from './buttonIcon.styles';

const Button = (props) => {
    const {
        children,
        onClick,
        style,
        disabled,
        color='primary',
        size='small'
    } = props;

    return (
        <ButtonStyled 
            onClick={onClick}
            style={style} 
            disabled={disabled}
            size={size}
            >
            <IconStyled
                color={color}
            >
                {children}
            </IconStyled>
        </ButtonStyled>
    )
}

export default Button;