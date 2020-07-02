import * as React from 'react';
import { Icon as StyledIcon } from './styled';

export interface Props extends React.HTMLAttributes<HTMLElement> {
    /**
     * Icon name
     */
    name: string;

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
     * Icon size in pixels
     */
    size?: number;
}

const Icon: React.FC<Props> = ({
    theme,
    className,
    variant,
    name,
    size,
    ...htmlElementProps
}) => {
    return (
        <StyledIcon
            theme={theme}
            className={className}
            variant={variant}
            name={name}
            size={size}
            {...htmlElementProps}
        />
    );
};
Icon.defaultProps = {
    size: 24,
};

export default Icon;
