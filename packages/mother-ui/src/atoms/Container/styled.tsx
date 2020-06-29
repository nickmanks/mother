import styled from 'styled-components';
import { fontFamily } from '../../theme/fonts';
import { Props } from '.';

export const Container = styled.div<Props>`
    width: 100%;
    max-width: ${({ width }) => width};
    margin: auto;
    font-family: ${fontFamily};
`;
