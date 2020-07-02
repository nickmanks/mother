import * as React from 'react';
import Button from '../Button';
import ModalFooter from '.';

const notes = `
    # ModalFooter
`;

export default {
    title: 'Atoms/ModalFooter',
    component: ModalFooter,
    parameters: {
        notes,
    },
};

export const all = () => (
    <ModalFooter>
        <Button variant={'primary'}>Primary</Button>
        <Button variant={'transparent'}>Secondary</Button>
        <Button variant={'info'}>Tertiary</Button>
    </ModalFooter>
);
