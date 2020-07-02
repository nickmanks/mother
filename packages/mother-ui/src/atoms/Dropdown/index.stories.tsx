import * as React from 'react';
import styled from 'styled-components';
import Icon from '../Icon';
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

export const all = () => (
    <Dropdown title={'Select'}>
        <div>Option 1</div>
        <div>Option 2</div>
        <div>Option 3</div>
        <div>Option 4</div>
        <div>Option 5</div>
    </Dropdown>
);

const DropdownContainer = styled.div`
    > div {
        margin: 1rem;
    }
`;

export const transparent = () => (
    <Dropdown variant={'transparent'} title={'Select'}>
        <div>Option 1</div>
        <div>Option 2</div>
        <div>Option 3</div>
        <div>Option 4</div>
        <div>Option 5</div>
    </Dropdown>
);

export const variants = () => (
    <DropdownContainer>
        <Dropdown variant={'primary'} title={'Select'}>
            <div>Option 1</div>
            <div>Option 2</div>
            <div>Option 3</div>
            <div>Option 4</div>
            <div>Option 5</div>
        </Dropdown>
        <Dropdown variant={'secondary'} title={'Select'}>
            <div>Option 1</div>
            <div>Option 2</div>
            <div>Option 3</div>
            <div>Option 4</div>
            <div>Option 5</div>
        </Dropdown>
        <Dropdown variant={'success'} title={'Select'}>
            <div>Option 1</div>
            <div>Option 2</div>
            <div>Option 3</div>
            <div>Option 4</div>
            <div>Option 5</div>
        </Dropdown>
        <Dropdown variant={'warning'} title={'Select'}>
            <div>Option 1</div>
            <div>Option 2</div>
            <div>Option 3</div>
            <div>Option 4</div>
            <div>Option 5</div>
        </Dropdown>
        <Dropdown variant={'danger'} title={'Select'}>
            <div>Option 1</div>
            <div>Option 2</div>
            <div>Option 3</div>
            <div>Option 4</div>
            <div>Option 5</div>
        </Dropdown>
        <Dropdown variant={'info'} title={'Select'}>
            <div>Option 1</div>
            <div>Option 2</div>
            <div>Option 3</div>
            <div>Option 4</div>
            <div>Option 5</div>
        </Dropdown>
    </DropdownContainer>
);

const DropdownContent = styled.div`
    display: flex;
    padding: 1rem;
    border: 1px solid grey;
    border-radius: 5px;
    width: 15rem;
    justify-content: space-evenly;

    i {
        margin-top: 0.5rem;
        font-size: 40px;
    }
`;

export const content = () => (
    <Dropdown variant={'primary'} title={'Select'}>
        <DropdownContent>
            <div>
                <Icon name={'AirTickets'} />
            </div>
            <h3>Select flights</h3>
        </DropdownContent>
        <DropdownContent>
            <div>
                <Icon name={'BeerMug'} />
            </div>
            <h3>See local bars</h3>
        </DropdownContent>
    </Dropdown>
);

export const disabled = () => (
    <Dropdown disabled title={'Select'}>
        <div>Option 1</div>
        <div>Option 2</div>
        <div>Option 3</div>
        <div>Option 4</div>
        <div>Option 5</div>
    </Dropdown>
);

export const customStyles = () => (
    <Dropdown
        className={'custom-dropdown'}
        listClassName={'custom-dropdown-list'}
        title={'Select'}
    >
        <div>Option 1</div>
        <div>Option 2</div>
        <div>Option 3</div>
        <div>Option 4</div>
        <div>Option 5</div>
    </Dropdown>
);
