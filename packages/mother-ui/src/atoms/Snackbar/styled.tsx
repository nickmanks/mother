import styled from 'styled-components';
import Icon from '../Icon';
import { getVariant } from '../../theme/helpers';
import { fonts, fontFamily } from '../../theme/fonts';
import { rounding, shadows } from '../../theme/styles';
import { getAnimation } from './helpers';

type Props = {
    /**
     * A child component
     */
    children?: React.ReactNode | string;

    /**
     * Theme provider object
     */
    theme?: Theme;

    /**
     * Custom button class name
     */
    className?: string;

    /**
     * A color variant
     */
    variant?: Variants;

    /**
     * If true snack bar will be displayed
     */
    open: boolean;

    /**
     * True if show the snackbar at the bottom of the page
     */
    bottom?: boolean;
};

export const Snackbar = styled.div<Props>`
    position: fixed;
    z-index: 999999;
    display: flex;
    justify-content: center;
    top: ${({ bottom }) => (bottom ? 'unset' : 0)};
    bottom: ${({ bottom }) => (bottom ? 0 : 'unset')};
    left: 0;
    right: 0;
    width: 80%;
    max-width: 40rem;
    margin: auto;
    text-align: center;
    background: ${getVariant('color')};
    padding: 0.8rem;
    color: ${getVariant('text')};
    font-family: ${fontFamily};
    font-size: ${fonts.size.s3}px;
    font-weight: ${fonts.weight.light};
    border-radius: ${rounding.regular};
    animation: ${({ open, bottom }) => getAnimation(open, bottom)} 0.3s
        ease-in-out;
    animation-fill-mode: ${({ open }) => (open ? 'backwards' : 'forwards')};
    border-top-right-radius: ${({ bottom }) => (bottom ? rounding.regular : 0)};
    border-top-left-radius: ${({ bottom }) => (bottom ? rounding.regular : 0)};
    border-bottom-right-radius: ${({ bottom }) =>
        bottom ? 0 : rounding.regular};
    border-bottom-left-radius: ${({ bottom }) =>
        bottom ? 0 : rounding.regular};
    box-shadow: ${shadows.small};
`;

type InnerProps = {
    /**
     * Icon name to prepend
     */
    prepend?: string;

    /**
     * Icon name to append
     */
    append?: string;
};

export const Inner = styled.div<InnerProps>`
    margin: auto;
    margin-left: ${({ prepend }) => (prepend ? '1rem' : undefined)};
    margin-right: ${({ append }) => (append ? '1rem' : undefined)};
`;

export const PrependIcon = styled(Icon)`
    margin: auto;
    margin-right: 1rem;
`;

export const AppendIcon = styled(Icon)`
    margin: auto;
    margin-left: 1rem;
`;
