import React from 'react';
import Button from '../Button';
import { CardCaseBigStyled, HeaderStyled, DisplayStyled } from './cardCaseBig.styles';

const CardCaseBig = ({onClick}) => {
    return (
        <CardCaseBigStyled>
            <HeaderStyled>
                <DisplayStyled style={{fontSize: '1.125rem'}}>
                    Familia
                </DisplayStyled>
                <DisplayStyled>
                    14 / 12 / 2020
                </DisplayStyled>
            </HeaderStyled>
            <DisplayStyled style={{width: '100%'}}>
                Martina Perez
            </DisplayStyled>
            <DisplayStyled style={{width: '100%', height: 'auto'}}>
                <p>Recordatorio + </p>
                <p>anotaciones del abogado</p>
            </DisplayStyled>
            <Button onClick={onClick}>INGRESAR</Button>
        </CardCaseBigStyled>
    )
}

export default CardCaseBig;
