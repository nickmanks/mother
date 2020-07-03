import * as React from 'react';
import SweetError from '.';

const notes = `
    # SweetError
`;

export default {
    title: 'Atoms/SweetError',
    component: SweetError,
    parameters: {
        notes,
    },
};

export const all = () => <SweetError />;

export const variant = () => <SweetError variant={'danger'} />;
