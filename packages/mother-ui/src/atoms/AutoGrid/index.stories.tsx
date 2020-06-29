import * as React from 'react';
import styled from 'styled-components';
import AutoGrid from '.';
import { getRandomColor } from '../../theme/helpers';

export default {
    title: 'Atoms/AutoGrid',
    component: AutoGrid,
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
