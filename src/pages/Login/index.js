import React from 'react';
import LayouAuth from '../Layout/Layout.auth';
import { LoginStyled } from './login.styles';
import { Title, Input } from '../../components';

const Login = () => {
    return (
        <LayouAuth>
            <LoginStyled>
                <Title>
                    Iniciar Sesión
                </Title>
                <Input
                    id={'nombre'}
                    label={'Nombre:'}
                />
            </LoginStyled>
        </LayouAuth>
    )
}

export default Login;
