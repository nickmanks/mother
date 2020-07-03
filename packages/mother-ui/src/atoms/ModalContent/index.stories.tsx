import * as React from 'react';
import Button from '../Button';
import ModalContent from '.';

const notes = `
    # ModalContent
`;

export default {
    title: 'Atoms/ModalContent',
    component: ModalContent,
    parameters: {
        notes,
    },
};

export const all = () => (
    <ModalContent>
        <h1>Some content</h1>
        <Button variant={'primary'}>Primary</Button>
    </ModalContent>
);
