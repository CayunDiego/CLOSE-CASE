import React from 'react';
import { CardHitoryStyled, IconStyled, ContainerStyled, RowStyled } from './CardHitory.styles';
import { CircleRow } from '../icons';

const CardHitory = (props) => {
    const {
        children,
        onClick,
        disabled,
    } = props;

    return (
        <CardHitoryStyled
            onClick={onClick}
            disabled={disabled}
        >   
            <ContainerStyled>
                <RowStyled>
                    Nombre: Ivan Seleme
                </RowStyled>
                <RowStyled>
                    23/02/20 - PENAL
                </RowStyled>
            </ContainerStyled>
            <IconStyled><CircleRow/></IconStyled>
        </CardHitoryStyled>
    )
}

export default CardHitory;
