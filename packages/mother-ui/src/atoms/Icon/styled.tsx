import * as React from 'react';
import styled from 'styled-components';
import { Icon as FluentIcon } from '@fluentui/react/lib/Icon';
import { getVariant } from '../../theme/helpers';

export const Icon = styled(({ size, name, ...props }) => (
    <FluentIcon iconName={name} {...props} />
))`
    color: ${getVariant('color')};
    font-size: ${({ size }) => size || 24}px;
`;
