import * as React from 'react';
import { useContext } from 'react';
import { Col as StyledCol } from './styled';
import { RowContext } from '../Row';
import { getSize } from './helpers';

export type Props = {
    /**
     * A child component
     */
    children?: React.ReactNode | string;

    /**
     * Theme provider object
     */
    theme?: Theme;

    /**
     * Size of the column (0-12)
     */
    size?: number;
};

const Col: React.FC<Props> = ({ children, theme, size, ...htmlDivProps }) => {
    const rowContext = useContext(RowContext);

    return (
        <StyledCol
            theme={theme}
            size={size || getSize(rowContext)}
            {...htmlDivProps}
        >
            {children}
        </StyledCol>
    );
};

export default Col;
