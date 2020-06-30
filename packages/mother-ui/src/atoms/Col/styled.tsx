import styled from 'styled-components';
import { fontFamily } from '../../theme/fonts';
import { padding } from '../../theme/layout';
import { Props } from '.';

const widths = [
    0,
    8.33,
    16.66,
    25,
    33.33,
    41.66,
    50,
    58.33,
    66.66,
    75,
    83.33,
    91.66,
    100,
];

const getWidth = (size?: number) => {
    if (size && widths[Math.round(size)]) {
        if (size !== 12) {
            return `${widths[size]}% - ${padding.s1}*2`;
        }

        return `${widths[size]}%`;
    }

    return '100%';
};

export const Col = styled.div<Props>`
    width: calc(${({ size }) => getWidth(size)});
    font-family: ${fontFamily};
`;
