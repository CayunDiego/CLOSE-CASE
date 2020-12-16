import React from 'react';
import { AvatarStyled, ImgStyled } from './avatar.styles';


const Avatar = ({ margin, size}) => {
    return (
        <AvatarStyled style={{margin: margin}} size={size}>
            <ImgStyled src='/assets/mujer.svg' alt='/assets/mujer.svg' size={size}/>
        </AvatarStyled>
    );
}

export default Avatar;
