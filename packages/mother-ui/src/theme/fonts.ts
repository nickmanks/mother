import euclidLight from '../assets/euclid-light.woff';
import euclidMedium from '../assets/euclid-medium.woff';
import euclidRegular from '../assets/euclid-regular.woff';
import euclidSemibold from '../assets/euclid-semibold.woff';
import euclidBold from '../assets/euclid-bold.woff';

export const fonts = {
    size: {
        s1: 12,
        s2: 14,
        s3: 16,
        m1: 20,
        m2: 24,
        m3: 28,
        l1: 32,
        l2: 40,
        l3: 48,
    },
    weight: {
        light: 200,
        regular: 300,
        medium: 400,
        bold: 500,
        extrabold: 600,
        black: 800,
    },
};

export const fontFaceLight = `
    @font-face {
        font-family: "Euclid";
        font-weight: 200;
        font-style: normal;
        src: url(${euclidLight}) format("woff");
    }
`;

export const fontFaceRegular = `
    @font-face {
        font-family: "Euclid";
        font-weight: 300;
        font-style: normal;
        src: url(${euclidRegular}) format("woff");
    }
`;

export const fontFaceMedium = `
    @font-face {
        font-family: "Euclid";
        font-weight: 400;
        font-style: normal;
        src: url(${euclidMedium}) format("woff");
    }
`;

export const fontFaceSemiBold = `
    @font-face {
        font-family: "Euclid";
        font-weight: 500;
        font-style: normal;
        src: url(${euclidSemibold}) format("woff");
    }
`;

export const fontFaceBold = `
    @font-face {
        font-family: "Euclid";
        font-weight: 600;
        font-style: normal;
        src: url(${euclidBold}) format("woff");
    }
`;

export const fontFamily =
    "'Euclid', 'Inter', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue ', sans-serif";

export const fontSpacing = '0.6px';

export const fontEmbed =
    'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Quicksand:wght@300;400;500;600;700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap';
