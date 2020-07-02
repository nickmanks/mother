import styled from 'styled-components';
import { white } from '../../theme/colors';
import { fonts, fontFamily } from '../../theme/fonts';
import { rounding } from '../../theme/styles';

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
    set: number;
}

export const ModalFooter = styled.div<Props>`
    display: flex;
    justify-content: ${({ set }) => (set < 3 ? 'flex-end' : 'space-between')};
    position: relative;
    background: ${white};
    font-size: ${fonts.size.s3}px;
    font-family: ${fontFamily};
    padding: 1rem;
    border-bottom-right-radius: ${rounding.regular};
    border-bottom-left-radius: ${rounding.regular};
`;
