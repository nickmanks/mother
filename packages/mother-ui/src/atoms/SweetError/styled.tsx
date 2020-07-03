import styled, { keyframes } from 'styled-components';
import { transparentize } from 'polished';
import { getVariant } from '../../theme/helpers';
import { Props } from '.';

const animateXLeft = keyframes`
    0%,
	65% {
		left: 82px;
		top: 95px;
		width: 0;
	}

	84% {
		left: 14px;
		top: 33px;
		width: 47px;
	}

	100% {
		left: 17px;
		top: 37px;
		width: 47px;
	}
`;

const animateXRight = keyframes`
    0%,
	65% {
		right: 82px;
		top: 95px;
		width: 0;
	}

	84% {
		right: 14px;
		top: 33px;
		width: 47px;
	}

	100% {
		right: 16px;
		top: 37px;
		width: 47px;
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

export const Cross = styled.span<VariantProps>`
    display: block;
    position: relative;
    z-index: 2;
`;

export const LeftCross = styled.span<VariantProps>`
    border-radius: 2px;
    display: block;
    height: 5px;
    position: absolute;
    z-index: 2;
    background-color: ${getVariant('color')};
    top: 37px;
    width: 47px;
    left: 17px;
    transform: rotate(45deg);
    animation: ${animateXLeft} 0.75s;
`;

export const RightCross = styled.span<VariantProps>`
    border-radius: 2px;
    display: block;
    height: 5px;
    position: absolute;
    z-index: 2;
    background-color: ${getVariant('color')};
    top: 37px;
    width: 47px;
    right: 16px;
    transform: rotate(-45deg);
    animation: ${animateXRight} 0.75s;
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
