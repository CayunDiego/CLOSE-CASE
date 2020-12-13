import React from 'react';
import LayouAuth from '../Layout/Layout.auth';
import { RecoverAccountStyled, FormStyled } from './recoverAccount.styles';
import { useLocation } from 'wouter';
import { Title, Input, Button } from '../../components';

const RecoverAccount = () => {
    const [, pushLocation] = useLocation();

    const handleSubmit = e => {
        e.preventDefault();
        pushLocation('/home');
    }

    return (
        <LayouAuth>
            <RecoverAccountStyled>
                <Title>
                    Recuperar Cuenta 
                </Title>
                <FormStyled onSubmit={handleSubmit}>
                    <p>Ingresa tu correo electrónico o número de teléfono para buscar tu cuenta.</p>
                    <Input
                        id={'mail'}
                        label={'Correo electrónico:'}
                        type= 'email'
                    />
                    <p>O</p>
                    <Input
                        id={'cel'}
                        label={'Celular:'}
                        type= 'text'
                    />
                    <span>Se le enviará un mail o SMS
                    para recuperar su cuenta.</span>
                     <Button
                        size='large'
                     >
                        ACEPTAR
                     </Button>
                </FormStyled>
            </RecoverAccountStyled>
        </LayouAuth>
    )
}

export default RecoverAccount;
