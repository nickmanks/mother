import styled from 'styled-components';
import { lighten } from 'polished';
import { getVariant } from '../../theme/helpers';
import { variants, grey08 } from '../../theme/colors';
import { fonts, fontFamily } from '../../theme/fonts';
import { rounding } from '../../theme/styles';
import { getBackgroundColor } from './helpers';

type LabelProps = {
    /**
     * Theme provider object
     */
    theme?: Theme;

    /**
     * A color variant
     */
    variant?: Variants;

    /**
     * True if checkbox is checked
     */
    checked: boolean;

    /**
     * True if checkbox is disabled
     */
    disabled?: boolean;
};

export const Label = styled.label<LabelProps>`
    display: inline-block;
    color: ${variants.dark.color};
    cursor: pointer;
    position: relative;
    font-family: ${fontFamily};
    font-weight: ${fonts.weight.light};
    font-size: ${fonts.size.s3};
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

    span {
        display: inline-block;
        position: relative;
        background-color: ${({ checked, disabled }) =>
            getBackgroundColor(checked, disabled)};
        width: 25px;
        height: 25px;
        transform-origin: center;
        border: 1px solid
            ${({ disabled, theme, variant }) =>
                disabled ? grey08 : getVariant('color')({ theme, variant })};
        border-radius: ${rounding.regular};
        vertical-align: -6px;
        margin-right: 0.5rem;
        transition: background-color 150ms 200ms,
            transform 350ms cubic-bezier(0.78, -1.22, 0.17, 1.89);
        transform: ${({ checked }) => (checked ? 'scale(1.15)' : 'unset')};

        &:before {
            content: '';
            width: ${({ checked }) => (checked ? '5px' : 0)};
            height: 2px;
            background: ${({ checked, theme, variant }) =>
                checked
                    ? getVariant('color')({ theme, variant })
                    : getVariant('color', (hex: string) => lighten(0.2, hex))({
                          theme,
                          variant,
                      })};
            position: absolute;
            transform: rotate(45deg);
            top: 12px;
            left: 9px;
            transition: width 50ms ease 50ms;
            transform-origin: 0% 0%;
        }

        &:after {
            content: '';
            width: ${({ checked }) => (checked ? '10px' : 0)};
            height: 2px;
            background: ${({ checked, theme, variant }) =>
                checked
                    ? getVariant('color')({ theme, variant })
                    : getVariant('color', (hex: string) => lighten(0.2, hex))({
                          theme,
                          variant,
                      })};
            position: absolute;
            transform: rotate(310deg);
            top: 16px;
            left: 10px;
            transition: width 50ms ease;
            transform-origin: 0% 0%;
        }
    }

    &:hover {
        span {
            &:before {
                width: 5px;
                transition: width 100ms ease;
            }

            &:after {
                width: 10px;
                transition: width 150ms ease 100ms;
            }
        }
    }
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
    display: none;
`;
