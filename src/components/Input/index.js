import React from 'react';
import { InputContainerStyled, 
         LabelStyled, 
         InputStyled } from './input.styles';

const Input = (props) => {

    const {
        id, 
        name, 
        type, 
        value, 
        defaultValue,
        placeholder, 
        label = "",
        disabled,
        onChange,
    } = props;

    return (
        <InputContainerStyled>
            <LabelStyled htmlFor={id}>
                {label}
            </LabelStyled>
            <InputStyled
                id={id}
                name={name}
                type={type}
                value={value}
                defaultValue={defaultValue}
                placeholder={placeholder}
                onChange={onChange}
                disabled={disabled}
            />
        </InputContainerStyled>
    )
}

export default Input;
