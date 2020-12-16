import React from 'react';
import { PopupRecoverStyled,
         PopupContainerStyled,
         PopupClickCancel } from './popupRecover.styles';
import Button from '../Button';
import { useLocation } from 'wouter';

const PopupRecover = ({onClick}) => {
    const [, pushLocation ] = useLocation();

    return (
        <PopupRecoverStyled >
            <PopupClickCancel onClick={onClick}/>
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
