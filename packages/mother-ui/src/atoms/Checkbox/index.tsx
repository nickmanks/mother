import * as React from 'react';
import { useState } from 'react';
import { Checkbox as StyledCheckbox, Label } from './styled';

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
     * True if checkbox starts in checked state
     */
    initial?: boolean;

    /**
     * True if checkbox is disabled
     */
    disabled?: boolean;

    onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<Props> = ({
    children,
    theme,
    className,
    variant,
    initial,
    disabled,
    onChange,
    ...htmlInputProps
}) => {
    const [checked, setChecked] = useState(initial || false);

    return (
        <Label
            theme={theme}
            className={className}
            variant={variant}
            checked={checked}
            disabled={disabled}
        >
            <StyledCheckbox
                {...htmlInputProps}
                disabled={disabled}
                checked={checked}
                onChange={(evt) => {
                    setChecked(!checked);

                    if (onChange) {
                        onChange(evt);
                    }
                }}
            />
            <span></span>
            {children}
        </Label>
    );
};

export default Checkbox;
