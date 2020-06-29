import * as React from 'react';
import Theme from '.';

const themeDecorator = (storyFn: any): any => (
    <Theme mode={'light'} layout={'cozy'}>
        {storyFn()}
    </Theme>
);

export default themeDecorator;
