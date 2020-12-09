import React from 'react';
import { AvatarStyled, ImgStyled } from './avatar.styles';


const Avatar = ({size}) => {
    return (
        <AvatarStyled size={size} >
            <ImgStyled src='/assets/mujer.svg' alt='/assets/mujer.svg' size={size}/>
        </AvatarStyled>
    )
}

export default Avatar;
