import { addParameters, addDecorator } from '@storybook/react';
import { initializeIcons } from '@uifabric/icons';
import themeDecorator from '../src/theme/decorator';

initializeIcons();

addParameters({
    options: {
        /**
         * Display the top-level grouping as a "root" in the sidebar
         */
        showRoots: true,
    },
});

addDecorator(themeDecorator);
