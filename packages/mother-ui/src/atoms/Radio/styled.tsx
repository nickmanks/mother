import styled from 'styled-components';
import { lighten } from 'polished';
import { getVariant } from '../../theme/helpers';
import { variants, grey08 } from '../../theme/colors';
import { fonts, fontFamily } from '../../theme/fonts';

type Props = {
    /**
     * Theme provider object
     */
    theme?: Theme;

    /**
     * A color variant
     */
    variant?: Variants;

    /**
     * True if radio is selected
     */
    selected?: boolean;

    /**
     * True if checkbox is disabled
     */
    disabled?: boolean;
};

export const Label = styled.label<Props>`
    line-height: 3.3rem;
    cursor: pointer;
    font-family: ${fontFamily};
    font-size: ${fonts.size.s3}px;
    font-weight: ${fonts.weight.light};
    color: ${variants.dark.color};
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

    &:hover {
        > span > span {
            transform: ${({ selected }) =>
                selected ? 'scale(1)' : 'scale(0.8)'};
            opacity: 1;
        }
    }
`;

export const Radio = styled.input.attrs({ type: 'radio' })`
    display: none;
`;

export const OuterCircle = styled.span<Props>`
    width: 1.5rem;
    height: 1.5rem;
    display: block;
    float: left;
    margin: 12px 0px 10px 0;
    border: 1px solid
        ${({ disabled }) => (disabled ? grey08 : getVariant('color'))};
    border-radius: 50%;
    background-color: ${({ disabled }) =>
        disabled ? variants.light.color : 'transparent'};
    margin-right: 0.5rem;
`;

export const InnerCircle = styled.span<Props>`
    transition: all 0.25s ease-in-out;
    width: 1rem;
    height: 1rem;
    transform: ${({ selected }) => (selected ? 'scale(1)' : 'scale(0)')};
    display: block;
    margin: 4px;
    border-radius: 50%;
    background-color: ${({ selected }) =>
        selected
            ? getVariant('color')
            : getVariant('color', (hex: string) => lighten(0.2, hex))};
    opacity: ${({ selected }) => (selected ? '1' : '0)')};
`;
