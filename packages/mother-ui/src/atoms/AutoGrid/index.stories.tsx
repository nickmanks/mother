import * as React from 'react';
import styled from 'styled-components';
import AutoGrid from '.';
import { getRandomColor } from '../../theme/helpers';

const notes = `
    # AutoGrid

    This component is a UI wrapper around the standard HTML \`<div>\` element.

    On top of the props listed in the props table, all standard
    \`HTMLElement\` and \`HTMLDivElement\` props are available.
    
    See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div
`;

export default {
    title: 'Atoms/AutoGrid',
    component: AutoGrid,
    parameters: {
        notes,
    },
};

const GridInner = styled.div`
    background: #${({ color }) => color};
    height: 5rem;
    border-radius: 5px;
`;

export const all = () => (
    <AutoGrid>
        <GridInner color={getRandomColor()} />
        <GridInner color={getRandomColor()} />
        <GridInner color={getRandomColor()} />
        <GridInner color={getRandomColor()} />
        <GridInner color={getRandomColor()} />
        <GridInner color={getRandomColor()} />
    </AutoGrid>
);

export const width = () => (
    <AutoGrid width={'500px'}>
        <GridInner color={getRandomColor()} />
        <GridInner color={getRandomColor()} />
        <GridInner color={getRandomColor()} />
        <GridInner color={getRandomColor()} />
        <GridInner color={getRandomColor()} />
        <GridInner color={getRandomColor()} />
    </AutoGrid>
);

export const row = () => (
    <AutoGrid rows={'10rem'}>
        <GridInner color={getRandomColor()} />
        <GridInner color={getRandomColor()} />
        <GridInner color={getRandomColor()} />
        <GridInner color={getRandomColor()} />
        <GridInner color={getRandomColor()} />
        <GridInner color={getRandomColor()} />
    </AutoGrid>
);

export const column = () => (
    <AutoGrid columns={'10%'}>
        <GridInner color={getRandomColor()} />
        <GridInner color={getRandomColor()} />
        <GridInner color={getRandomColor()} />
        <GridInner color={getRandomColor()} />
        <GridInner color={getRandomColor()} />
        <GridInner color={getRandomColor()} />
    </AutoGrid>
);
