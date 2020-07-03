import styled, { keyframes } from 'styled-components';
import { transparentize } from 'polished';
import { getVariant } from '../../theme/helpers';
import { Props } from '.';

const scaleWarning = keyframes`
    0% {
		transform: scale(1);
	}
	
	30% {
		transform: scale(1.02);
	}
	
	100% {
		transform: scale(1);
	}
`;

const pulse = keyframes`
    0% {
		background-color: #fff;
		transform: scale(1);
		opacity: 0.5;
	}

	30% {
		background-color: #fff;
		transform: scale(1);
		opacity: 0.5;
	}

	100% {
		background-color: ${getVariant('color')};
		transform: scale(2);
		opacity: 0;
	}
`;

const pulseWarning = ({ theme, variant }: Props) => keyframes`
    0% {
        background-color: ${getVariant('color', (hex: string) =>
            transparentize(0.25, hex),
        )({ theme, variant })};
    }

    100% {
        background-color: ${getVariant('color')({ theme, variant })};
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

    &:before {
        animation: ${pulse} 2s linear infinite;
        background-color: ${getVariant('color')};
        border-radius: 50%;
        content: '';
        display: inline-block;
        height: 100%;
        opacity: 0;
        position: absolute;
        width: 100%;
    }

    &:after {
        background-color: #fff;
        border-radius: 50%;
        content: '';
        display: block;
        height: 100%;
        position: absolute;
        width: 100%;
        z-index: 1;
    }

    &:after {
        animation: ${scaleWarning} 0.75s infinite alternate;
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

export const WarningBody = styled.span<VariantProps>`
    background-color: ${getVariant('color')};
    border-radius: 2px;
    height: 47px;
    left: 50%;
    margin-left: -2px;
    position: absolute;
    top: 10px;
    width: 5px;
    z-index: 2;
    animation: ${pulseWarning} 0.75s infinite alternate;
`;

export const WarningDot = styled.span<VariantProps>`
    background-color: ${getVariant('color')};
    border-radius: 50%;
    bottom: 10px;
    height: 7px;
    left: 50%;
    margin-left: -3px;
    position: absolute;
    width: 7px;
    z-index: 2;
    animation: ${(props: Props) => pulseWarning(props)} 0.75s infinite alternate;
`;
