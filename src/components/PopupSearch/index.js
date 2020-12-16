import React, { useContext } from 'react';
import { PopupSearchStyled,
         PopupContainerStyled,
         IconStyled,
         SearchStyled,
         FilterContainerStyled,
         ListCaseSearch,
         PopupClickCancel} from './popupSearch.styles';
import { Button, 
         Title, 
         SelectFilter, 
         InputSearch } from '../../components';
import { useLocation } from 'wouter';
import { Search } from '../icons';
import searchContext from '../../context/searchContext';

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

const PopupSearch = () => {
    const [, pushLocation ] = useLocation();
    const { search, setSearch } = useContext(searchContext);

    const handleClickSearch = e => {
        setSearch(false);
        pushLocation('/home');
    }

    return (
        <PopupSearchStyled>
            <PopupClickCancel onClick={()=>setSearch(false)}/>
            <PopupContainerStyled>
                <Title>
                    <IconStyled>
                        <Search/>
                    </IconStyled>
                    Buscar Caso
                </Title>
                <SearchStyled>
                    <FilterContainerStyled>
                         <SelectFilter 
                            style={{minWidth: '9rem'}}
                            label={'Tipo de Caso:'}
                            options={optionsType}/>
                        <SelectFilter 
                            style={{minWidth: '9rem'}}
                            label={'Ordenar por:'}
                            options={optionsOrder}/>
                    </FilterContainerStyled>
                    <InputSearch/>
                </SearchStyled>
                <ListCaseSearch>

                </ListCaseSearch>
                <Button
                    onClick={handleClickSearch}
                    size='large'
                    color='primary'
                >
                    Buscar
                </Button>
            </PopupContainerStyled>
        </PopupSearchStyled>
    )
}

export default PopupSearch;
