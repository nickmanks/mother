import styled, { keyframes } from 'styled-components';
import { transparentize } from 'polished';
import { getVariant } from '../../theme/helpers';
import { Props } from '.';

const animateSuccessTip = keyframes`
    0%,54% {
		width: 0;
		left: 1px;
		top: 19px;
	}

	70% {
		width: 50px;
		left: -8px;
		top: 37px;
	}

	84% {
		width: 17px;
		left: 21px;
		top: 48px;
	}

	100% {
		width: 25px;
		left: 14px;
		top: 45px;
	}
`;

const animateSuccessLong = keyframes`
    0%,65% {
		width: 0;
		right: 46px;
		top: 54px;
	}

	84% {
		width: 55px;
		right: 0;
		top: 35px;
	}

	100% {
		width: 47px;
		right: 8px;
		top: 38px;
	}
`;

const rotatePlaceholder = keyframes`
    0%,5% {
		transform: rotate(-45deg);
	}

	100%,12% {
		transform: rotate(-405deg);
	}
`;

export const Wrapper = styled.div<Props>`
    border-radius: 50%;
    border: 4px solid gray;
    box-sizing: content-box;
    height: 80px;
    margin: 20px auto;
    padding: 0;
    position: relative;
    width: 80px;

    border-color: ${getVariant('color')};

    &:after,
    &:before {
        background: #fff;
        content: '';
        height: 120px;
        position: absolute;
        transform: rotate(45deg);
        width: 60px;
    }

    &:before {
        border-radius: 120px 0 0 120px;
        left: -33px;
        top: -7px;
        transform-origin: 60px 60px;
        transform: rotate(-45deg);
    }

    &:after {
        border-radius: 0 120px 120px 0;
        left: 30px;
        top: -11px;
        transform-origin: 0 60px;
        transform: rotate(-45deg);
    }

    &:after {
        animation: ${rotatePlaceholder} 4.25s ease-in;
    }
`;

type VariantProps = {
    /**
     * Theme provider object
     */
    theme?: Theme;

    /**
     * A color variant
     */
    variant?: Variants;
};

export const SuccessTip = styled.span<VariantProps>`
    background-color: ${getVariant('color')};
    border-radius: 2px;
    display: block;
    height: 5px;
    position: absolute;
    z-index: 2;
    left: 14px;
    top: 46px;
    transform: rotate(45deg);
    width: 25px;
    animation: ${animateSuccessTip} 0.75s;
`;

export const SuccessLong = styled.span<VariantProps>`
    background-color: ${getVariant('color')};
    border-radius: 2px;
    display: block;
    height: 5px;
    position: absolute;
    z-index: 2;
    right: 8px;
    top: 38px;
    transform: rotate(-45deg);
    width: 47px;
    animation: ${animateSuccessLong} 0.75s;
`;

export const Placeholder = styled.div<VariantProps>`
    border-radius: 50%;
    border: 4px solid
        ${getVariant('color', (hex: string) => transparentize(0.75, hex))};
    box-sizing: content-box;
    height: 80px;
    left: -4px;
    position: absolute;
    top: -4px;
    width: 80px;
    z-index: 2;
`;

export const Fix = styled.div`
    background-color: #fff;
    height: 90px;
    left: 28px;
    position: absolute;
    top: 8px;
    transform: rotate(-45deg);
    width: 5px;
    z-index: 1;
`;
