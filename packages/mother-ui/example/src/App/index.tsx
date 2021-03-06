import React, { useState } from 'react';
import {
    Theme,
    Snackbar,
    Container,
    Button,
    Input,
    Dropdown,
    Modal,
} from 'mother-ui';
import './index.css';

const ModalTrigger = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button onClick={() => setOpen(true)}>Open Modal</Button>
            <Modal open={open} onClose={() => setOpen(false)} />
        </>
    );
};

const App: React.FC = () => (
    <Theme mode={'light'} layout={'cozy'}>
        <Snackbar
            bottom
            variant={'danger'}
            delay={10000}
            prepend={'AlertSolid'}
        >
            Snack bar alert for 10 seconds!
        </Snackbar>
        <Container className={'root--container'}>
            <Input
                className={'root--input'}
                label={'Search'}
                prepend={'Search'}
                placeholder={'Search the things'}
            />
            <Button className={'root--button'} variant={'primary'}>
                Search
            </Button>
            <Dropdown className={'root--button'} title={'Select category'}>
                <div>Option 1</div>
                <div>Option 2</div>
                <div>Option 3</div>
                <div>Option 4</div>
            </Dropdown>
        </Container>
        <ModalTrigger />
    </Theme>
);

export default App;
