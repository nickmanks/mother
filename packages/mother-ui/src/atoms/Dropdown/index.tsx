import * as React from 'react';
import { useState } from 'react';
import { StyledButton, Wrapper, List, ListItem } from './styled';

export interface Props extends React.HTMLAttributes<HTMLButtonElement> {
    /**
     * Child list component
     */
    children?: Array<React.ReactNode>;

    /**
     * Theme provider object
     */
    theme?: Theme;

    /**
     * Custom button class name
     */
    className?: string;

    /**
     * A color variant
     */
    variant?: Variants;

    /**
     * Custom list class name
     */
    listClassName?: string;

    /**
     * Title of dropdown
     */
    title?: string;

    /**
     * True if dropdown is disabled
     */
    disabled?: boolean;
}

const Dropdown: React.FC<Props> = ({
    children,
    theme,
    className,
    variant,
    listClassName,
    title,
    disabled,
}) => {
    const [open, setOpen] = useState(false);

    return (
        <Wrapper className={className}>
            <StyledButton
                theme={theme}
                variant={variant}
                append={'ChevronDown'}
                disabled={disabled}
                open={open}
                onClick={() => setOpen(!open)}
            >
                {title}
            </StyledButton>
            {open && children && (
                <List className={listClassName}>
                    {children.map((item: React.ReactNode, idx: number) => (
                        <ListItem index={idx}>{item}</ListItem>
                    ))}
                </List>
            )}
        </Wrapper>
    );
};

export default Dropdown;
