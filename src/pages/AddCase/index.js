import React from 'react';
import { AddCaseStyled,
        FormStyled
        } from './addCase.styles';
import LayouMain from '../Layout/Layout.main';
import { Title,
         Input,
         Button
        } from '../../components';
import { useLocation } from 'wouter';
 
const AddCase = () => {
    const [, pushLocation] = useLocation();
    
    const handleSubmit = e => {
        e.preventDefault();
        pushLocation('/home');
    }

    return (
        <LayouMain>
            <AddCaseStyled>
                <Title>
                    Crear Caso
                </Title>
                <FormStyled onSubmit={handleSubmit}>
                    <Input
                        id={'nombre'}
                        label={'Nombre:'}
                        type= 'text'
                    />
                    <Input
                        id={'apellido:'}
                        label={'Apellido:'}
                        type= 'text'
                    />
                    <Input
                        id={'dni'}
                        label={'DNI:'}
                        type= 'number'
                    />
                    <Input
                        id={'domicilio'}
                        label={'Domicilio:'}
                        type= 'text'
                    />
                    <Input
                        id={'localidad'}
                        label={'Localidad: '}
                        type= 'text'
                    />
                    <Input
                        id={'provincia'}
                        label={'Provincia:'}
                        type= 'text'
                    />
                    <Input
                        id={'CodigoPostal'}
                        label={'Codigo Postal:'}
                        type= 'number'
                    />
                    <Input
                        id={'tel'}
                        label={'Télefono:'}
                        type= 'number'
                    />
                    <Input
                        id={'mail'}
                        label={'E-mail:'}
                        type= 'email'
                    />
                     <Button
                        size='large'
                     >
                        ACEPTAR
                     </Button>
                </FormStyled>
            </AddCaseStyled>
        </LayouMain>
    )
}

export default AddCase;
