import * as React from 'react';
import { createContext } from 'react';
import { Row as StyledRow } from './styled';

export type Props = {
    /**
     * A child component
     */
    children?: React.ReactNode | string;

    /**
     * Theme provider object
     */
    theme?: Theme;
};

export const RowContext = createContext({});

// TODO - automate col sizes
const Row: React.FC<Props> = ({ children, theme, ...htmlDivProps }) => (
    <StyledRow theme={theme} {...htmlDivProps}>
        <RowContext.Provider
            value={{ count: Array.isArray(children) ? children.length : null }}
        >
            {children}
        </RowContext.Provider>
    </StyledRow>
);

export default Row;
