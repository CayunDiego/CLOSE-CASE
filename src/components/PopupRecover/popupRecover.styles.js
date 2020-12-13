import styled from 'styled-components';
import { colors, typography } from '../../themes';


export const PopupRecoverStyled = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.3);
    z-index: 250;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const PopupContainerStyled = styled.div`
        width: 15.25rem;
        height: 11.1875rem;
        background: ${colors.white } 0% 0% no-repeat padding-box;
        border-radius: 20px;
        opacity: 1;
        padding: 1.5rem 2.25rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        z-index: 251;
        >h2{
            font-size: ${typography.sizes.h2};
            font-weight:  ${typography.weights.regular};
            align-self: flex-start;
            color: #515151;
        }
`;