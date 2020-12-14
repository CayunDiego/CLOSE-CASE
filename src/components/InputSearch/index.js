import React from 'react';
import { SearchStyled,
        InputStyled,
        IconStyled
        } from './inputSearch.styles';
import { Search } from '../icons';

const InputSearch = ({placeholder}) => {
    return (
        <SearchStyled>
            <IconStyled>
                <Search/>
            </IconStyled>
            <InputStyled placeholder={`Buscar: `}/>
        </SearchStyled>
    )
}

export default InputSearch;
