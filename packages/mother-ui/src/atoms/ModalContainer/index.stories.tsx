import * as React from 'react';
import { useState } from 'react';
import ModalHeader from '../../atoms/ModalHeader';
import ModalContent from '../../atoms/ModalContent';
import ModalFooter from '../../atoms/ModalFooter';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';
import Checkbox from '../../atoms/Checkbox';
import Dropdown from '../../atoms/Dropdown';
import ModalContainer from '.';

const notes = `
    # ModalContainer
`;

export default {
    title: 'Atoms/ModalContainer',
    component: ModalContainer,
    parameters: {
        notes,
    },
};

const ModalTrigger = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button onClick={() => setOpen(true)}>Open Modal</Button>
            <ModalContainer open={open}>
                <ModalHeader onClose={() => setOpen(false)}>
                    Modal Header
                </ModalHeader>
                <ModalContent>
                    <Input
                        prepend={'Search'}
                        label={'Search'}
                        placeholder={'Search the things'}
                    />
                    <Dropdown title={'Select'}>
                        <div>Option 1</div>
                        <div>Option 2</div>
                        <div>Option 3</div>
                        <div>Option 4</div>
                        <div>Option 5</div>
                    </Dropdown>
                    <Input
                        prepend={'Search'}
                        label={'Search'}
                        placeholder={'Search the things'}
                    />
                    <Checkbox> Do you agree?</Checkbox>
                </ModalContent>
                <ModalFooter>
                    <Button variant={'primary'} rounded>
                        Primary
                    </Button>
                    <Button variant={'transparent'}>Secondary</Button>
                </ModalFooter>
            </ModalContainer>
        </>
    );
};

export const all = () => <ModalTrigger />;
