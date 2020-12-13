import React from 'react';
import LayouAuth from '../Layout/Layout.auth';
import { LoginStyled, FormStyled, LinkSigup, LinkRecover } from './login.styles';
import { Title, Input, Button, ButtonSocial } from '../../components';
import { Google } from '../../components/icons';
import { useLocation } from 'wouter';

const Login = () => {
    const [, pushLocation] = useLocation();

    const handleSubmit = e => {
        e.preventDefault();
        pushLocation('/home');
    }

    return (
        <LayouAuth>
            <LoginStyled>
                <Title>
                    Iniciar Sesión
                </Title>
                <FormStyled onSubmit={handleSubmit}>
                    <Input
                        id={'usuario'}
                        label={'Usuario:'}
                        type= 'text'
                    />
                    <Input
                        id={'contraseña'}
                        label={'Contraseña:'}
                        type= 'password'
                    />
                     <Button
                        size='large'
                     >
                        ACEPTAR
                     </Button>
                </FormStyled>
                <LinkSigup to='/auth/sigup'>REGISTRARTE</LinkSigup>
                <p>¿Olvidaste Usuario / Contraseña?</p>
                <LinkRecover to='/auth/recover'>HAZ CLICK AQUÍ</LinkRecover>
                <ButtonSocial
                    icon={<Google/>}
                >
                    ACCEDE CON TU CUENTA DE GOOGLE
                </ButtonSocial>
            </LoginStyled>
        </LayouAuth>
    )
}

export default Login;
