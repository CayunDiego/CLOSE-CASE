import React from 'react';
import {
    CaseHistoryStyled,
    SearchStyled,
    FilterContainerStyled,
    ListCases
} from './caseHistory.styles';
import LayouMain from '../Layout/Layout.main';
import {
    Title, 
    InputSearch, 
    SelectFilter,
    CardHistory
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
 
const CaseHistory = () => {
    return (
        <LayouMain>
            <CaseHistoryStyled>
                <Title>
                    Historial de Casos
                </Title>
                <SearchStyled>
                    <FilterContainerStyled>
                        <SelectFilter 
                            label={'Tipo de Caso:'}
                            options={optionsType}/>
                        <SelectFilter 
                            label={'Ordenar por:'}
                            options={optionsOrder}/>
                    </FilterContainerStyled>
                    <InputSearch/>
                </SearchStyled>
                <ListCases>
                    <CardHistory/>
                    <CardHistory/>
                    <CardHistory/>
                    <CardHistory/>
                    <CardHistory/>
                    <CardHistory/>
                </ListCases>
            </CaseHistoryStyled>
        </LayouMain>
    );
}

export default CaseHistory;
