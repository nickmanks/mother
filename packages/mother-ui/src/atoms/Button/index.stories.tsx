import * as React from 'react';
import styled from 'styled-components';
import Button from '.';

export default {
    title: 'Atoms/Button',
    component: Button,
};

const ButtonContainer = styled.div`
    button {
        margin: 1rem;
    }
`;

export const all = () => (
    <ButtonContainer>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="success">Success</Button>
        <Button variant="warning">Warning</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="info">Info</Button>
        <Button variant="white">White</Button>
        <Button variant="transparent">Transparent</Button>
    </ButtonContainer>
);

export const rounded = () => (
    <Button variant="primary" rounded>
        Pill shaped
    </Button>
);

export const disabled = () => (
    <Button variant="primary" disabled>
        Disabled
    </Button>
);
