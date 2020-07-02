import * as React from 'react';
import ModalHeader from '.';

const notes = `
    # ModalHeader
`;

export default {
    title: 'Atoms/ModalHeader',
    component: ModalHeader,
    parameters: {
        notes,
    },
};

export const all = () => <ModalHeader>Modal Header</ModalHeader>;
