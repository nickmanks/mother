import * as React from 'react';
import styled from 'styled-components';
import Badge from '.';

const notes = `
    # Badge
`;

export default {
    title: 'Atoms/Badge',
    component: Badge,
    parameters: {
        notes,
    },
};

const BadgeContainer = styled.div`
    display: flex;

    span {
        margin-right: 1rem;
    }
`;

export const all = () => (
    <BadgeContainer>
        <Badge variant={'primary'}>Primary</Badge>
        <Badge variant={'secondary'}>Secondary</Badge>
        <Badge variant={'success'}>Success</Badge>
        <Badge variant={'warning'}>Warning</Badge>
        <Badge variant={'danger'}>Danger</Badge>
        <Badge variant={'info'}>Info</Badge>
    </BadgeContainer>
);

const CircleContainer = styled.div`
    display: flex;
`;

export const rounded = () => (
    <CircleContainer>
        <Badge variant={'primary'} rounded>
            1
        </Badge>
        <Badge variant={'secondary'} rounded>
            2
        </Badge>
        <Badge variant={'success'} rounded>
            3
        </Badge>
        <Badge variant={'warning'} rounded>
            4
        </Badge>
        <Badge variant={'danger'} rounded>
            10
        </Badge>
        <Badge variant={'info'} rounded>
            99+
        </Badge>
    </CircleContainer>
);
