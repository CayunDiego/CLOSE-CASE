import React from 'react';
import { PopupSearchStyled,
         PopupContainerStyled,
         PopupClickCancel,
         IconStyled,
         HeaderStyled,
         ContainerStyled,
         FooterStyled,
         SharedGridStyled,
         UserSharedStyled,
         SelectTypeStyled,
         CircleStyled,
         InvitationStyled,
         InputStyled } from './popupShare.styles';
import { Button } from '../../components';
import { Users, Link, ArrowDown } from '../../components/icons';


const PopupShare = ({onClick}) => {
    return (
        <PopupSearchStyled>
            <PopupClickCancel onClick={onClick}/>
            <PopupContainerStyled>
                <HeaderStyled>
                    <IconStyled><Users/></IconStyled>
                    <p>Compartir</p>
                </HeaderStyled>
                <ContainerStyled>
                    <InvitationStyled>
                        <InputStyled>
                            <input type="email" placeholder='e-mail'/>
                            <SelectTypeStyled style={{color: '#515151'}}>
                                Editar <ArrowDown width={10} height={9} fill='#515151'/>
                            </SelectTypeStyled>
                        </InputStyled>
                        <Button color='fifth'>
                            Enviar invitación
                        </Button>
                    </InvitationStyled>
                    <SharedGridStyled>
                        <UserSharedStyled>
                            <CircleStyled>L</CircleStyled>
                            <p>Lucas Argüello</p>
                        </UserSharedStyled>
                        <SelectTypeStyled>
                            Ver <ArrowDown width={10} height={9} fill='#fff'/>
                        </SelectTypeStyled>
                        <UserSharedStyled>
                            <CircleStyled style={{background: '#EA932D'}}>F</CircleStyled>
                            <p>Francisco Andrada</p>
                        </UserSharedStyled>
                        <SelectTypeStyled>
                            Editar <ArrowDown width={10} height={9} fill='#fff'/>
                        </SelectTypeStyled>
                    </SharedGridStyled>
                </ContainerStyled>
                <FooterStyled>
                    <IconStyled><Link/></IconStyled>
                    <p>Copiar Link</p>
                </FooterStyled>
            </PopupContainerStyled> 
        </PopupSearchStyled>
    )
}

export default PopupShare;
