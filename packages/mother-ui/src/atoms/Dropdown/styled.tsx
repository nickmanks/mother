import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import Button from '../Button';
import { variants, white, grey02, grey03 } from '../../theme/colors';
import { fonts, fontFamily } from '../../theme/fonts';
import { shadows } from '../../theme/styles';

const slideInLeft = keyframes`
    from {
        transform: translate(-100%,0);
		opacity: 0;
    }
		
	to {
        transform: translate(0,0);
		opacity: 1;
    }
`;

const slideInTop = keyframes`
    from {
        transform: translate(0,-100%);
        opacity: 0;
    }
		
	to {
        transform: translate(0,0);
        opacity: 1;
    }
`;

export const Wrapper = styled.div`
    display: inline-block;
    position: relative;
`;

export const StyledButton = styled(({ open, ...props }) => (
    <Button {...props} />
))`
    position: relative;
    border-bottom-right-radius: ${({ open }) => (open ? 0 : 5)}px;
    border-bottom-left-radius: ${({ open }) => (open ? 0 : 5)}px;
    z-index: 1001;
    box-shadow: ${({ open }) => (open ? 'none' : shadows.small)};

    i {
        transition: transform 0.1s linear;
        transform: ${({ open }) => (open ? 'rotateX(180deg)' : 'unset')};
        margin-top: 0;
        font-size: 16px;
    }

    &:hover {
        transform: ${({ open }) =>
            open ? 'unset' : 'translate3d(0, -1px, 0)'};
    }
`;

export const List = styled.ul`
    position: absolute;
    font-family: ${fontFamily};
    font-size: ${fonts.size.s3}px;
    font-weight: ${fonts.weight.light};
    display: block;
    padding-inline-start: 2px;
    text-align: center;
    z-index: 1000;
    width: auto;
    min-width: calc(100% - 2px);
    margin: 0 0 0;
    font-size: 1rem;
    color: ${variants.dark.color};
    background-color: ${white};
    border-radius: 5px;
    box-shadow: ${shadows.smallHover};
    border-top-left-radius: 0;
    overflow: hidden;
    padding-right: 0;
    padding-left: 0;
    border-top-right-radius: 0;
    border-top-left-radius: 0;
    animation: ${slideInTop} 0.15s ease-in-out;
    animation-fill-mode: backwards;
    border: 1px solid ${grey03};
    border-top: unset;
`;

type ItemProps = {
    index: number;
};

export const ListItem = styled.li<ItemProps>`
    list-style: none;
    animation: ${slideInLeft} 0.25s ease-in-out;
    animation-fill-mode: backwards;
    animation-delay: ${({ index }) => 0.1 + index * 0.03}s;
    cursor: pointer;
    padding: 1rem;

    &:hover {
        background: ${grey02};
    }
`;
