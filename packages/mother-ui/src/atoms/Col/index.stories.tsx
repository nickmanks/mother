import * as React from 'react';
import styled from 'styled-components';
import Container from '../Container';
import Row from '../Row';
import Col from '.';
import { getRandomColor } from '../../theme/helpers';

export default {
    title: 'Atoms/Col',
    component: Col,
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
            <Col size={6}>
                <GridInner color={getRandomColor()} />
            </Col>
            <Col size={6}>
                <GridInner color={getRandomColor()} />
            </Col>
        </Row>
        <Row>
            <Col size={6}>
                <GridInner color={getRandomColor()} />
            </Col>
            <Col size={6}>
                <GridInner color={getRandomColor()} />
            </Col>
        </Row>
    </Container>
);

export const size = () => (
    <Container>
        <Row>
            <Col size={9}>
                <GridInner color={getRandomColor()} />
            </Col>
            <Col size={3}>
                <GridInner color={getRandomColor()} />
            </Col>
        </Row>
        <Row>
            <Col size={3}>
                <GridInner color={getRandomColor()} />
            </Col>
            <Col size={3}>
                <GridInner color={getRandomColor()} />
            </Col>
            <Col size={3}>
                <GridInner color={getRandomColor()} />
            </Col>
            <Col size={3}>
                <GridInner color={getRandomColor()} />
            </Col>
        </Row>
    </Container>
);

export const context = () => (
    <Container>
        <Row>
            <Col>
                <GridInner color={getRandomColor()} />
            </Col>
            <Col>
                <GridInner color={getRandomColor()} />
            </Col>
        </Row>
        <Row>
            <Col>
                <GridInner color={getRandomColor()} />
            </Col>
            <Col>
                <GridInner color={getRandomColor()} />
            </Col>
            <Col>
                <GridInner color={getRandomColor()} />
            </Col>
            <Col>
                <GridInner color={getRandomColor()} />
            </Col>
        </Row>
    </Container>
);
