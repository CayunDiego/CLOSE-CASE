import React from 'react';
import { PopupRecoverStyled,
         PopupContainerStyled } from './popupRecover.styles';
import Button from '../Button';
import { useLocation } from 'wouter';

const PopupRecover = () => {
    const [, pushLocation ] = useLocation();

    const handleClick = e => {
        e.preventDefault();
        e.stopPropagation() ;
        console.log('hola')
    }

    return (
        <PopupRecoverStyled onClick={handleClick}>
            <PopupContainerStyled>
                <h2>Recuperar:</h2>
                <Button
                     onClick={()=>pushLocation('/auth/recover')}
                     size='large'
                     color='secondary'
                >
                    Usuario
                </Button>
                <Button
                    onClick={()=>pushLocation('/auth/recover')}
                    size='large'
                    color='secondary'
                >
                    Contraseña
                </Button>
            </PopupContainerStyled>
        </PopupRecoverStyled>
    )
}

export default PopupRecover;
