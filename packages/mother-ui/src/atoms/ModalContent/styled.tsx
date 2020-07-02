import styled from 'styled-components';
import { white } from '../../theme/colors';
import { fonts, fontFamily } from '../../theme/fonts';

export const ModalContent = styled.div`
    position: relative;
    background: ${white};
    font-size: ${fonts.size.s3}px;
    font-family: ${fontFamily};
    padding: 3rem;
`;
