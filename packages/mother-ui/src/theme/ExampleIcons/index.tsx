import * as React from 'react';
import { Icon } from '@fluentui/react/lib/Icon';
import { iconNames } from '../../atoms/Icon/names';
import AutoGrid from '../../atoms/AutoGrid';
import { IconContainer } from './styled';

const ExampleIcons: React.SFC = () => (
    <AutoGrid columns={'20%'}>
        {Reflect.ownKeys(iconNames)
            .sort()
            .filter((iconName: string) => !iconName.includes('Logo'))
            .map((iconName: string) => (
                <IconContainer>
                    <Icon iconName={iconName} />
                    <p>{iconName}</p>
                </IconContainer>
            ))}
    </AutoGrid>
);

export default ExampleIcons;
