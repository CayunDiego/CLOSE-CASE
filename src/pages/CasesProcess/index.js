import React from 'react';
import { CasesProcessStyled,
         SearchStyled,
         FilterContainerStyled,
         ListCases
        } from './casesProcess.styles';
import LayouMain from '../Layout/Layout.main';
import { Title, 
        InputSearch, 
        SelectFilter,
        CardCaseBig
    } from '../../components';

const optionsType = [
    {name: 'Comercial', icon: ''},
    {name: 'Tributario', icon: ''},
    {name: 'Laboral', icon: ''},
    {name: 'Penal', icon: ''},
    {name: 'Civil', icon: ''},
];

const optionsOrder = [
    {name: 'A-Z', icon: ''},
    {name: 'Z-A', icon: ''},
    {name: 'Fecha', icon: ''},
];
 
const CasesProcess = () => {
    return (
        <LayouMain>
            <CasesProcessStyled>
                <Title>
                    Casos en Proceso
                </Title>
                <SearchStyled>
                    <FilterContainerStyled>
                         <SelectFilter 
                            label={'Casos de Familia:'}
                            options={optionsType}/>
                        <SelectFilter 
                            label={'Ordenar por:'}
                            options={optionsOrder}/>
                    </FilterContainerStyled>
                    <InputSearch/>
                </SearchStyled>
                <ListCases>
                    <CardCaseBig/>
                    <CardCaseBig/>
                    <CardCaseBig/>
                    <CardCaseBig/>
                    <CardCaseBig/>
                    <CardCaseBig/>
                </ListCases>
            </CasesProcessStyled>
        </LayouMain>
    )
}

export default CasesProcess;
