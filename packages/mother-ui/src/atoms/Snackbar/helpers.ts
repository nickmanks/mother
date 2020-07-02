import { keyframes } from 'styled-components';

const slideInTop = keyframes`
    from {
        transform: translate(0,-10rem);
        opacity: 0;
    }
		
	to {
        transform: translate(0,0);
        opacity: 1;
    }
`;

const slideOutTop = keyframes`
    from {
        transform: translate(0,0);
        opacity: 1;
    }
		
	to {
        transform: translate(0,-10rem);
        opacity: 0;
    }
`;

const slideInBottom = keyframes`
    from {
        transform: translate(0,10rem);
        opacity: 0;
    }
		
	to {
        transform: translate(0,0);
        opacity: 1;
    }
`;

const slideOutBottom = keyframes`
    from {
        transform: translate(0,0);
        opacity: 1;
    }
		
	to {
        transform: translate(0,10rem);
        opacity: 0;
    }
`;

export const getAnimation = (open: boolean, bottom?: boolean) => {
    if (open) {
        return bottom ? slideInBottom : slideInTop;
    } else {
        return bottom ? slideOutBottom : slideOutTop;
    }
};
