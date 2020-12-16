import React from 'react';
import { Link } from 'wouter';
import Button from '../Button';
import { CardCaseBigStyled, HeaderStyled, DisplayStyled } from './cardCaseBig.styles';

const CardCaseBig = ({url}) => {
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
            <Link to={url}>
                <Button>INGRESAR</Button>
            </Link>
        </CardCaseBigStyled>
    )
}

export default CardCaseBig;
