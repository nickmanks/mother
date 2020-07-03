import * as React from 'react';
import SweetWarning from '.';

const notes = `
    # SweetWarning
`;

export default {
    title: 'Atoms/SweetWarning',
    component: SweetWarning,
    parameters: {
        notes,
    },
};

export const all = () => <SweetWarning />;

export const variant = () => <SweetWarning variant={'warning'} />;
