import React from 'react';
import Avatar from '../Avatar';
import {
    CardUserStyled,
    TxtStyled
} from './cardUser.styles';

const CardUser = () => {
    return (
        <CardUserStyled>
            <Avatar size='medium'/>
            <TxtStyled>
                <h2>Hola, Diego</h2>
                <p>Plan Basico</p>
            </TxtStyled>
        </CardUserStyled>
    )
}

export default CardUser;
