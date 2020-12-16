import React from 'react';
import { SettingStyled,
         ContentStyled,
         ButtonStyled,
         ButtonsLogout
        } from './setting.styles';
import LayouMain from '../Layout/Layout.main';
import { Title,
    } from '../../components';
 
const Setting = () => {

    const itemsButton = [
        {name: 'Información Personal ', url: '/home'},
        {name: 'Copia de seguridad', url: '/addCase'},
        {name: 'Mejorar el plan', url: '/'},
    ];

    return (
        <LayouMain>
            <SettingStyled>
                <Title>
                    Configuración
                </Title>
                <ContentStyled>
                    <h2>Cuenta:</h2>
                    {
                        itemsButton.map((button, index) => (
                            <ButtonStyled
                                key={index}
                            >
                                {button.name}
                            </ButtonStyled>
                        ))
                    }
                </ContentStyled>
                <ContentStyled>
                    <h2>Notificaciones:</h2>
                    <ButtonStyled>
                        Configuracion de  notificaciones
                    </ButtonStyled>
                </ContentStyled>
                <ButtonsLogout
                    onClick={() => window.location = 'https://close-case.vercel.app/'}
                >
                    Cerrar Sesión 
                </ButtonsLogout>
            </SettingStyled>
        </LayouMain>
    )
}

export default Setting;
