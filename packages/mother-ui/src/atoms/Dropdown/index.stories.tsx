import * as React from 'react';
import styled from 'styled-components';
import Dropdown from '.';

const notes = `
    # Dropdown
`;

export default {
    title: 'Atoms/Dropdown',
    component: Dropdown,
    parameters: {
        notes,
    },
};

export const all = () => <Dropdown />;

const DropdownContainer = styled.div`
    > div {
        margin: 1rem;
    }
`;

export const transparent = () => <Dropdown variant={'transparent'} />;

export const variants = () => (
    <DropdownContainer>
        <Dropdown variant={'primary'} />
        <Dropdown variant={'secondary'} />
        <Dropdown variant={'success'} />
        <Dropdown variant={'warning'} />
        <Dropdown variant={'danger'} />
        <Dropdown variant={'info'} />
    </DropdownContainer>
);
