import * as React from 'react';
import { createContext, useState } from 'react';
import { RadioGroup as StyledRadioGroup } from './styled';

export interface ContextType {
    /**
     * The selected radio id
     */
    selected?: string;

    /**
     * Function to set selected radio id
     */
    setSelected?: any;
}

export const RadioContext = createContext<ContextType>({});

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * A set of radio components
     */
    children?: React.ReactNode;

    /**
     * Custom class name
     */
    className?: string;

    /**
     * True if radio children should be aligned vertically
     */
    vertical?: boolean;
}

const RadioGroup: React.FC<Props> = ({
    children,
    className,
    vertical,
    onSelect,
    ...htmlDivProps
}) => {
    const [selected, setSelected] = useState();

    return (
        <RadioContext.Provider value={{ selected, setSelected }}>
            <StyledRadioGroup
                className={className}
                vertical={vertical}
                {...htmlDivProps}
            >
                {children}
            </StyledRadioGroup>
        </RadioContext.Provider>
    );
};

export default RadioGroup;
