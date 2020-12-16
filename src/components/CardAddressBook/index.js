import React from 'react';
import { CardAddressBookStyled,
         TextStyled,
         IconStyled,
         DeleleStyled} from './cardAddressBook.styles';
import { Cancel } from '../icons';

const CardAddressBook = ({item, handleDelete, buttonDelete}) => {


    return (
        <CardAddressBookStyled>
            <TextStyled>
                {item.name}
            </TextStyled>
            {
                buttonDelete && <DeleleStyled
                                onClick={handleDelete}
                            >
                                <IconStyled>
                                    <Cancel/>
                                </IconStyled>
                            </DeleleStyled>
            }
        </CardAddressBookStyled>
    )
}

export default CardAddressBook;
