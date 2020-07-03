import styled, { keyframes } from 'styled-components';
import { Props } from '.';

const expand = keyframes`
    from {
        transform: rotateX(90deg) scale(0);
        opacity: 0;
    }

    to {
        transform: rotateX(0deg) scale(1);
        opacity: 1;
    }
`;

const collapse = keyframes`
    from {
        transform: scale(1); 
        opacity: 1;
    }

    to {
        transform: scale(0);
        opacity: 0;
    }
`;

export const ModalOverlay = styled.div<Props>`
    background-color: ${({ open }) => (open ? '#212121e0' : 'transparent')};
    bottom: 0;
    visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
    left: 0;
    overflow: auto;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 9999;
    transition: visibility 0s, background-color 0.2s ease-in-out;
`;

export const ModalContainer = styled.div<Props>`
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    position: absolute;
    transition: all 0.2s ease;
    width: 38rem;
    border-radius: 5px;
    height: auto;
    max-height: 80vh;
    animation: ${({ open }) => (open ? expand : collapse)} 0.3s ease;

    > div {
        visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
        transition: visibility 0s ease-in-out;
    }
`;
