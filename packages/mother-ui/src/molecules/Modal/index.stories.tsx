import * as React from 'react';
import { useState } from 'react';
import Button from '../../atoms/Button';
import Modal from '.';

const notes = `
    # Modal
`;

export default {
    title: 'Molecules/Modal',
    component: Modal,
    parameters: {
        notes,
    },
};

const ModalTrigger = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button onClick={() => setOpen(true)}>Open Modal</Button>
            <Modal open={open} onClose={() => setOpen(false)} />
        </>
    );
};

export const all = () => <ModalTrigger />;
