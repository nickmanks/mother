import styled from 'styled-components';
import { padding } from '../../theme/layout';
import { fontFamily } from '../../theme/fonts';
import { Props } from '.';

export const Row = styled.div<Props>`
    width: 100%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: ${padding.s2};
    font-family: ${fontFamily};
`;
