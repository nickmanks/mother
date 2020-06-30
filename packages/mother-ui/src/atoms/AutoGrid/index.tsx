import * as React from 'react';
import { AutoGrid as StyledAutoGrid } from './styled';
import { maxWidth } from '../../theme/layout';

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * A child component
     */
    children?: React.ReactNode | string;

    /**
     * Theme provider object
     */
    theme?: Theme;

    /**
     * Max width of grid container (e.g. 1200px or 100%)
     */
    width?: string;

    /**
     * Height of rows (e.g. 100px or 20%)
     */
    rows?: string;

    /**
     * Width of columns (e.g. 100px or 20%)
     */
    columns?: string;
}

const AutoGrid: React.FC<Props> = ({
    children,
    theme,
    rows,
    columns,
    ...htmlDivProps
}) => {
    return (
        <StyledAutoGrid
            theme={theme}
            rows={rows}
            columns={columns}
            {...htmlDivProps}
        >
            {children}
        </StyledAutoGrid>
    );
};
AutoGrid.defaultProps = {
    width: maxWidth,
    rows: 'unset',
    columns: '300px',
};

export default AutoGrid;
