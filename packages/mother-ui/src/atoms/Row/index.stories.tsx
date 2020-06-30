import * as React from 'react';
import styled from 'styled-components';
import Container from '../Container';
import Row from '.';
import { getRandomColor } from '../../theme/helpers';

const notes = `
    # Row

    This component is a UI wrapper around the standard React HTML \`<div>\` element.

    On top of the props listed in the props table, all standard React
    \`HTMLElement\` and \`HTMLDivElement\` props are available.
    
    See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div
`;

export default {
    title: 'Atoms/Row',
    component: Row,
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

export const customStyles = () => (
    <Container>
        <Row className={'custom-row'}>
            <GridInner color={getRandomColor()} />
        </Row>
        <Row className={'custom-row'}>
            <GridInner color={getRandomColor()} />
        </Row>
    </Container>
);
