import * as React from 'react';
import { useState } from 'react';
import { StyledButton, Wrapper, List, ListItem } from './styled';

export interface Props extends React.HTMLAttributes<HTMLButtonElement> {
    /**
     * Theme provider object
     */
    theme?: Theme;

    /**
     * Custom class name
     */
    className?: string;

    /**
     * A color variant
     */
    variant?: Variants;
}

const Dropdown: React.FC<Props> = ({ theme, className, variant }) => {
    const [open, setOpen] = useState(false);

    return (
        <Wrapper>
            <StyledButton
                theme={theme}
                variant={variant}
                open={open}
                append={'ChevronDown'}
                onClick={() => setOpen(!open)}
            >
                Dropdown
            </StyledButton>
            {open && (
                <List>
                    <ListItem index={1}>Option 1</ListItem>
                    <ListItem index={2}>Option 2</ListItem>
                    <ListItem index={3}>Option 3</ListItem>
                    <ListItem index={4}>Option 4</ListItem>
                    <ListItem index={5}>Option 5</ListItem>
                    <ListItem index={6}>Option 6</ListItem>
                </List>
            )}
        </Wrapper>
    );
};

export default Dropdown;
