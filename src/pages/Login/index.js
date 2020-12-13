import React, { useState } from 'react';
import LayouAuth from '../Layout/Layout.auth';
import { LoginStyled, FormStyled, LinkSigup, LinkRecover } from './login.styles';
import { Title, Input, Button, ButtonSocial, PopupRecover } from '../../components';
import { Google } from '../../components/icons';
import { useLocation } from 'wouter';

const Login = () => {
    const [, pushLocation] = useLocation();
    const [popUp, setPopUp] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        pushLocation('/home');
    }

    return (
        <LayouAuth>
            { 
                popUp && <PopupRecover/>
            }
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
                <LinkRecover onClick={()=> setPopUp(true)}>HAZ CLICK AQUÍ</LinkRecover>
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
