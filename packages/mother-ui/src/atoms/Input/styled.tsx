import styled from 'styled-components';
import Icon from '../Icon';
import { getVariant } from '../../theme/helpers';
import { rounding } from '../../theme/styles';
import { variants, white, grey07, grey09 } from '../../theme/colors';
import { fonts, fontFamily } from '../../theme/fonts';

export const Wrapper = styled.div`
    display: block;
    margin-bottom: -1px;
`;

export const Label = styled.label`
    font-family: ${fontFamily};
    color: ${grey09};
    font-weight: ${fonts.weight.light};
    font-size: ${fonts.size.s2}px;
    line-height: 2rem;
`;

export const OuterContainer = styled.div`
    width: 100%;
    max-width: 100%;
    position: relative;
    padding: 1px;
    border-radius: ${rounding.regular};
`;

type ContainerProps = {
    /**
     * True if input is focused
     */
    focused?: boolean;

    /**
     * True if input is disabled
     */
    disabled?: boolean;
};

export const InnerContainer = styled.div<ContainerProps>`
    display: flex;
    border: 1px solid ${({ focused }) => (focused ? 'transparent' : grey07)};
    border-radius: ${rounding.regular};
    padding-left: 5px;
    padding-right: 5px;
    background: ${({ disabled }) => (disabled ? variants.light.color : white)};
    transition: border-color 0.2s linear;
    z-index: 1;
    position: relative;
`;

export const PrependIcon = styled(Icon)`
    padding-left: 0;
    padding-right: 5px;
    margin: auto;
    margin-left: 15px;
`;

export const Input = styled.input<React.HTMLAttributes<HTMLInputElement>>`
    box-sizing: border-box;
    border: none;
    outline: none;
    width: 100%;
    padding-left: 15px;
    padding-right: 20px;
    font-size: ${fonts.size.s3}px;
    font-weight: ${fonts.weight.light};
    color: ${variants.dark.color};
    font-family: ${fontFamily};
    height: 48px;

    &::placeholder {
        color: ${variants.medium.color};
        font-weight: 200;
    }

    &:focus {
        border: none;
        outline: none;
    }

    &:active {
        border: none;
        outline: none;
    }

    &:disabled {
        cursor: not-allowed;
        background: ${variants.light.color};
        color: ${white};
    }
`;

export const AppendIcon = styled(Icon)`
    padding-right: 0;
    margin: auto;
    margin-right: 15px;
`;

type BorderProps = {
    /**
     * Theme provider object
     */
    theme?: Theme;

    /**
     * A color variant
     */
    variant?: Variants;

    /**
     * True if input is focused
     */
    focused?: boolean;
};

export const FocusedBorder = styled.div<BorderProps>`
    background: ${getVariant('color')};
    content: '';
    height: ${({ focused }) => (focused ? '100%' : '0%')};
    width: ${({ focused }) => (focused ? '100%' : '0%')};
    position: absolute;
    left: 0;
    top: 0;
    transition: height 0.2s, width 0.2s 0.1s;
    z-index: 0;
    border-radius: ${rounding.regular};
`;
