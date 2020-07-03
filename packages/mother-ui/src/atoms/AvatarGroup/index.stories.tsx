import * as React from 'react';
import styled from 'styled-components';
import Avatar from '../Avatar';
import AvatarGroup from '.';

const notes = `
    # AvatarGroup
`;

export default {
    title: 'Atoms/AvatarGroup',
    component: AvatarGroup,
    parameters: {
        notes,
    },
};

export const all = () => (
    <AvatarGroup>
        <Avatar editable>Nick Manks</Avatar>
        <Avatar src={'https://picsum.photos/id/237/200/300'} />
        <Avatar editable>Foo Bar</Avatar>
        <Avatar src={'https://picsum.photos/id/237/200/300'} />
    </AvatarGroup>
);

export const limit = () => (
    <AvatarGroup limit={3}>
        <Avatar editable>Nick Manks</Avatar>
        <Avatar src={'https://picsum.photos/id/237/200/300'} />
        <Avatar editable>Foo Bar</Avatar>
        <Avatar src={'https://picsum.photos/id/237/200/300'} />
        <Avatar editable>Foo Bar</Avatar>
        <Avatar src={'https://picsum.photos/id/237/200/300'} />
        <Avatar editable>Foo Bar</Avatar>
        <Avatar src={'https://picsum.photos/id/237/200/300'} />
    </AvatarGroup>
);
