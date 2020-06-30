import * as React from 'react';
import { createContext } from 'react';
import { Row as StyledRow } from './styled';

export type Props = {
    /**
     * Child components or strings
     */
    children?: React.ReactNode | string;

    /**
     * Theme provider object
     */
    theme?: Theme;

    /**
     * Custom class name
     */
    className?: string;

    /**
     * All other standard React HTML `<div>` props
     */
    '...htmlDivProps'?: React.HTMLProps<HTMLDivElement>;
};

export const RowContext = createContext({});

// TODO - automate col sizes
const Row: React.FC<Props> = ({
    children,
    theme,
    className,
    ...htmlDivProps
}) => (
    <StyledRow theme={theme} className={className} {...htmlDivProps}>
        <RowContext.Provider
            value={{ count: Array.isArray(children) ? children.length : null }}
        >
            {children}
        </RowContext.Provider>
    </StyledRow>
);

export default Row;
