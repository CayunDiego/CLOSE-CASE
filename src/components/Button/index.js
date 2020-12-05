import React from 'react';
import { ButtonStyled } from './button.styles';

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
            color={color}
            size={size}
            >
            {children}
        </ButtonStyled>
    )
}

export default Button;