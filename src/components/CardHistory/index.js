import React from 'react';
import { CircleRow } from '../icons';
import { CardHistoryStyled, IconStyled, ContainerStyled, RowStyled } from './CardHistory.styles';

const CardHistory = (props) => {
    const {
        children,
        onClick,
        disabled,
    } = props;

    return (
        <CardHistoryStyled
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
        </CardHistoryStyled>
    );
}

export default CardHistory;
