import * as React from 'react';
import styled from 'styled-components';
import Avatar from '.';

const notes = `
    # Avatar
`;

export default {
    title: 'Atoms/Avatar',
    component: Avatar,
    parameters: {
        notes,
    },
};

export const all = () => <Avatar>Nick Manks</Avatar>;

export const src = () => (
    <Avatar src={'https://picsum.photos/id/237/200/300'} />
);

export const editable = () => <Avatar editable>Nick Manks</Avatar>;
