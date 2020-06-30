import * as React from 'react';
import styled from 'styled-components';
import Container from '.';
import { getRandomColor } from '../../theme/helpers';

const notes = `
    # Container

    This component is a UI wrapper around the standard HTML \`<div>\` element.

    On top of the props listed in the props table, all standard
    \`HTMLElement\` and \`HTMLDivElement\` props are available.
    
    See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div
`;

export default {
    title: 'Atoms/Container',
    component: Container,
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
