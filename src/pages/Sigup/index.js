import React from 'react';
import LayouAuth from '../Layout/Layout.auth';
import { SigupnStyled, FormStyled } from './sigup.styles';
import { Title, Input, Button } from '../../components';
import { useLocation } from 'wouter';

const Sigup = () => {
    const [, pushLocation] = useLocation();
    
    const handleSubmit = e => {
        e.preventDefault();
        pushLocation('/home');
    }

    return (
        <LayouAuth>
            <SigupnStyled>
                <Title>
                    Registrarse
                </Title>
                <FormStyled onSubmit={handleSubmit}>
                    <Input
                        id={'usuario'}
                        label={'Nombre de Usuario:'}
                        type= 'text'
                    />
                    <Input
                        id={'contraseña'}
                        label={'Contraseña:'}
                        type= 'password'
                    />
                    <Input
                        id={'confirmContraseña'}
                        label={'Confirmar Contraseña:'}
                        type= 'password'
                    />
                    <Input
                        id={'mail'}
                        label={'E-mail:'}
                        type= 'email'
                    />
                    <Input
                        id={'tel'}
                        label={'Telefono:'}
                        type= 'text'
                    />
                     <Button
                        size='large'
                     >
                        ACEPTAR
                     </Button>
                </FormStyled>
            </SigupnStyled>
        </LayouAuth>
    )
}

export default Sigup;
