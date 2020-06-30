import * as React from 'react';
import { Wrapper, Checkbox as StyledCheckbox, Label } from './styled';

export interface Props extends React.HTMLAttributes<HTMLInputElement> {
    /**
     * A checkbox label string
     */
    children?: string;

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

    /**
     * True if checkbox is disabled
     */
    disabled?: boolean;
}

const Checkbox: React.FC<Props> = ({
    children,
    theme,
    className,
    variant,
    disabled,
    ...htmlInputProps
}) => (
    <Wrapper>
        <StyledCheckbox
            theme={theme}
            className={className}
            variant={variant}
            {...htmlInputProps}
        />
        <Label>
            <span></span>
            {children}
        </Label>
    </Wrapper>
);

export default Checkbox;
