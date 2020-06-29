import * as React from 'react';
import styled from 'styled-components';
import Container from '.';
import { getRandomColor } from '../../theme/helpers';

export default {
    title: 'Atoms/Container',
    component: Container,
};

const GridInner = styled.div`
    background: #${({ color }) => color};
    height: 5rem;
    border-radius: 5px;
    width: 100%;
`;

export const all = () => (
    <Container>
        <GridInner color={getRandomColor()} />
    </Container>
);

export const width = () => (
    <Container width={'500px'}>
        <GridInner color={getRandomColor()} />
    </Container>
);

export const customStyles = () => (
    <Container className={'custom-container'}>
        <GridInner color={getRandomColor()} />
    </Container>
);
