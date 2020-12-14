import React, { useState } from 'react';
import { AddressBookStyled,
         ListCases,
         ContainerStyled,
         ButtonsStyled
        } from './addressBook.styles';
import LayouMain from '../Layout/Layout.main';
import { Title,
        SelectFilter,
        Button,
        CardAddressBook
    } from '../../components';

const optionsType = [
    {name: 'Abogados', icon: ''},
    {name: 'Clientes', icon: ''},
];
 
const AddressBook = () => {
    const [buttonDelete, setButtonDelete] = useState(false);
    const [ user, setUser] = useState([
        { 
            "id": 1, 
            "name": "ABG. Juan Carrizo",
        },
        { 
            "id": 2, 
            "name": "ABG. Lucas Orlando",
        },
        { 
            "id": 3, 
            "name": "ABG. Facundo Quiros",
        },
        { 
            "id": 4, 
            "name": "ABG. Fernando Garcia",
        }
    ]);

    const handleDelete = id => {
        if(user.length > 1){
            setUser(user.filter(item => item.id !== id));
        }
    }

    return (
        <LayouMain>
            <AddressBookStyled>
                <Title>
                    Agenda
                </Title>
                <ContainerStyled>
                    <SelectFilter options={optionsType}/>
                    <ListCases>
                    {
                        user.map((item, index)=>
                            <CardAddressBook 
                                item={item} 
                                key={index}
                                buttonDelete={buttonDelete}
                                handleDelete={() => handleDelete(item.id)}
                                />
                        )
                    }
                    </ListCases>
                    <ButtonsStyled>
                        <Button
                            size='medium'
                            color='secondary'
                        >
                            Añadir
                        </Button>
                        <Button
                            size='medium'
                            color='secondary'
                            onClick={()=> setButtonDelete(prev=>!prev)}
                        >
                            Quitar
                        </Button>
                    </ButtonsStyled>
                </ContainerStyled>
            </AddressBookStyled>
        </LayouMain>
    )
}

export default AddressBook;
