import * as React from 'react';
import SweetSuccess from '.';

const notes = `
    # SweetSuccess
`;

export default {
    title: 'Atoms/SweetSuccess',
    component: SweetSuccess,
    parameters: {
        notes,
    },
};

export const all = () => <SweetSuccess />;

export const variant = () => <SweetSuccess variant={'success'} />;
