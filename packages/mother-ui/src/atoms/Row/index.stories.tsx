import * as React from 'react';
import styled from 'styled-components';
import Container from '../Container';
import Row from '.';
import { getRandomColor } from '../../theme/helpers';

export default {
    title: 'Atoms/Row',
    component: Row,
};

const GridInner = styled.div`
    background: #${({ color }) => color};
    height: 5rem;
    border-radius: 5px;
    width: 100%;
`;

export const all = () => (
    <Container>
        <Row>
            <GridInner color={getRandomColor()} />
        </Row>
        <Row>
            <GridInner color={getRandomColor()} />
        </Row>
    </Container>
);

export const width = () => (
    <Container width={'500px'}>
        <Row>
            <GridInner color={getRandomColor()} />
        </Row>
        <Row>
            <GridInner color={getRandomColor()} />
        </Row>
    </Container>
);
