import styled from 'styled-components';
import { getVariant } from '../../theme/helpers';
import { white } from '../../theme/colors';
import { fonts, fontFamily } from '../../theme/fonts';
import { rounding } from '../../theme/styles';

type Props = {
    /**
     * Theme provider object
     */
    theme?: Theme;

    /**
     * Custom class name
     */
    className?: string;

    /**
     * A color variant
     */
    variant?: Variants;
};

export const Wrapper = styled.div<Props>`
    border-radius: ${rounding.circle};
    width: 30px;
    font-family: ${fontFamily};
    font-size: ${fonts.size.s2}px;
    font-weight: ${fonts.weight.medium};
    border: 2px solid ${white};
    overflow: hidden;
    background: ${getVariant('color')};
    color: ${getVariant('text')};
`;

export const Mark = styled.span`
    text-align: center;
    line-height: 30px;
    display: block;
`;

export const Span = styled.span<Props>`
    background: ${getVariant('color')};
    color: ${getVariant('text')};
    border-radius: ${rounding.pill};
    font-family: ${fontFamily};
    font-size: ${fonts.size.s2}px;
    font-weight: ${fonts.weight.regular};
    padding-right: 0.6rem;
    padding-left: 0.6rem;
    padding-top: 0.15rem;
    padding-bottom: 0.15rem;
`;
