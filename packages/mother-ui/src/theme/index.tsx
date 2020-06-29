import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { initializeIcons } from '@uifabric/icons';
import GlobalStyles from './globals';

interface Props {
    /**
     * The overarching mode for the theme
     */
    mode: 'light' | 'dark';

    /**
     * The overarching layout for the theme
     */
    layout: 'compact' | 'cozy';

    /**
     * Components to provide theme to
     */
    children: any;
}

const Theme: React.SFC<Props> = ({ children, mode, layout }) => {
    initializeIcons();

    return (
        <>
            <GlobalStyles />
            <ThemeProvider theme={{ mode, layout }}>{children}</ThemeProvider>
        </>
    );
};
Theme.defaultProps = {
    mode: 'light',
    layout: 'cozy',
};

export default Theme;
