import * as React from 'react';
import styled from 'styled-components';
import Container from '../Container';
import Row from '../Row';
import Col from '.';
import { getRandomColor } from '../../theme/helpers';

const notes = `
    # Col

    This component is a UI wrapper around the standard React HTML \`<div>\` element.

    On top of the props listed in the props table, all standard React
    \`HTMLElement\` and \`HTMLDivElement\` props are available.
    
    See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div
`;

export default {
    title: 'Atoms/Col',
    component: Col,
    parameters: {
        notes,
    },
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

export const customStyles = () => (
    <Container>
        <Row>
            <Col className={'custom-column'}>
                <GridInner color={getRandomColor()} />
            </Col>
            <Col className={'custom-column'}>
                <GridInner color={getRandomColor()} />
            </Col>
        </Row>
    </Container>
);
