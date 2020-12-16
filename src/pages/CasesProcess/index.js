import React from 'react';
import { CasesProcessStyled,
         SearchStyled,
         FilterContainerStyled,
         ListCases
        } from './casesProcess.styles';
import { Title, 
        InputSearch, 
        SelectFilter,
        CardCaseBig
    } from '../../components';
import { useLocation } from 'wouter';
import LayouMain from '../Layout/Layout.main';

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
    const [, pushLocation ] = useLocation();

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
                    <CardCaseBig onClick={()=>pushLocation('/profile/case')}/>
                    <CardCaseBig onClick={()=>pushLocation('/profile/case')}/>
                    <CardCaseBig onClick={()=>pushLocation('/profile/case')}/>
                    <CardCaseBig onClick={()=>pushLocation('/profile/case')}/>
                    <CardCaseBig onClick={()=>pushLocation('/profile/case')}/>
                    <CardCaseBig onClick={()=>pushLocation('/profile/case')}/>
                </ListCases>
            </CasesProcessStyled>
        </LayouMain>
    )
}

export default CasesProcess;
