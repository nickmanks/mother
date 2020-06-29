import styled from 'styled-components';
import { fontFamily } from '../../theme/fonts';
import { padding } from '../../theme/layout';
import { Props } from '.';

export const AutoGrid = styled.div<Props>`
    max-width: ${({ width }) => width};
    width: 100%;
    display: grid;
    grid-auto-rows: ${({ rows }) => rows};
    grid-template-columns: repeat(
        auto-fill,
        minmax(${({ columns }) => columns}, 1fr)
    );
    grid-gap: ${padding.s3};
    font-family: ${fontFamily};
`;
