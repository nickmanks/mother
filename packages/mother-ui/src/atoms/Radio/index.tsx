import * as React from 'react';
import { useState, useContext } from 'react';
import uniqueId from 'lodash.uniqueid';
import {
    Label,
    Radio as StyledRadio,
    OuterCircle,
    InnerCircle,
} from './styled';
import { RadioContext } from '../RadioGroup';

export interface Props extends React.HTMLAttributes<HTMLInputElement> {
    /**
     * A radio label string
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
     * True if radio is selected
     */
    selected?: boolean;

    /**
     * True if radio is disabled
     */
    disabled?: boolean;

    onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
}

const Radio: React.FC<Props> = ({
    children,
    theme,
    className,
    variant,
    selected,
    disabled,
    onChange,
    ...htmlInputProps
}) => {
    const [id] = useState(uniqueId('motherui-atom-radio-'));
    const radioContext = useContext(RadioContext);
    const isSelected = radioContext?.selected === id || selected;

    return (
        <Label
            theme={theme}
            className={className}
            variant={variant}
            selected={isSelected}
            disabled={disabled}
        >
            <StyledRadio
                {...htmlInputProps}
                disabled={disabled}
                checked={isSelected}
                onChange={(evt) => {
                    if (radioContext.setSelected) {
                        radioContext.setSelected(id);
                    }

                    if (onChange) {
                        onChange(evt);
                    }
                }}
            />
            <OuterCircle
                theme={theme}
                variant={variant}
                selected={isSelected}
                disabled={disabled}
            >
                <InnerCircle
                    theme={theme}
                    variant={variant}
                    selected={isSelected}
                    disabled={disabled}
                />
            </OuterCircle>
            {children}
        </Label>
    );
};
export default Radio;
