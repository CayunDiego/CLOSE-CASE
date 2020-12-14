import React, {useState} from 'react';
import {SelectFilterStyled,
        SelectStyled,
        SelectedOption,
        SelectBox,
        OptionsStyled,
        ButtonOptionStyled,
        ArrowStyled,
        NameStyle,
        LabelStyled
    } from './selectFilter.styles';

// const options = [
//     {name: 'Todos', icon: ''},
//     {name: 'Populares', icon: ''},
//     {name: 'Ganadores', icon: ''},
//     {name: 'Perdedores', icon: ''},
//     {name: 'Favoritos', icon: ''},
// ]

const SelectFilter = ({options, label, style}) => {
    const [select, setSelect] = useState(options[0]);
    const [draweOpen, setDraweOpen] = useState(false);

    const drawerToggleClick = () =>{
        setDraweOpen(!draweOpen);
    }

    const handleClick = index => {
        setSelect(options[index]);
        setDraweOpen(!draweOpen);
    }

    return (
        <SelectFilterStyled style={style}>
                        <LabelStyled>
                            {label}
                        </LabelStyled>
                       <SelectStyled onClick={drawerToggleClick} show={draweOpen} >
                           <SelectedOption >
                               <NameStyle>{select.name}</NameStyle>
                           </SelectedOption>
                           <ArrowStyled className={draweOpen ? "fas fa-angle-up" : "fas fa-angle-down"}></ArrowStyled>
                        </SelectStyled>
                        <SelectBox show={draweOpen}>
                            <OptionsStyled>
                                {
                                    options.map((button, index) => (
                                        select.name !== button.name && <ButtonOptionStyled
                                                            key={index}
                                                            onClick={() => handleClick(index)}
                                                        >
                                                            <NameStyle>{button.name}</NameStyle>
                                                        </ButtonOptionStyled>
                                    ))
                                }
                            </OptionsStyled>
                        </SelectBox>
        </SelectFilterStyled>
    )
}

export default SelectFilter;