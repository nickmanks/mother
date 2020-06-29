import styled from 'styled-components';
import { darken } from 'polished';
import { getVariant } from '../../theme/helpers';
import { variants, white } from '../../theme/colors';
import { shadows, rounding } from '../../theme/styles';
import { fonts, fontFamily, fontSpacing } from '../../theme/fonts';
import { Props } from '.';

export const Button = styled.button<Props>`
    background: ${getVariant('color')};
    border: 1px solid ${getVariant('color')};
    color: ${getVariant('text')};
    box-shadow: ${({ variant }) =>
        variant === 'transparent' ? 'none' : shadows.small};
    font-family: ${fontFamily};
    font-weight: ${fonts.weight.light};
    font-size: ${fonts.size.s3}px;
    border-radius: ${({ rounded }) =>
        rounded ? rounding.pill : rounding.regular};
    letter-spacing: ${fontSpacing};
    cursor: pointer;
    height: 50px;
    line-height: 40px;
    min-width: 200px;
    padding: 0 27px;
    text-rendering: optimizeLegibility;
    transition: all 0.2s ease;
    white-space: nowrap;

    &:focus {
        outline: none;
    }

    &:hover {
        box-shadow: ${({ variant }) =>
            variant === 'transparent' ? 'none' : shadows.smallHover};
        transform: translate3d(0, -1px, 0);
        background: ${getVariant('color', (hex: string) => darken(0.08, hex))};
        border: 1px solid
            ${getVariant('color', (hex: string) => darken(0.08, hex))};
    }

    &:disabled {
        cursor: not-allowed;
        background: ${variants.medium.color};
        border: 1px solid ${variants.medium.color};
        color: ${white};
    }
`;
