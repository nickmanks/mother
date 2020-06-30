import * as React from 'react';
import { Icon as StyledIcon } from './styled';

export type Props = {
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

    /**
     * All other standard React HTML element props
     */
    '...htmlIconProps'?: React.HTMLProps<HTMLElement>;
};

const Icon: React.FC<Props> = ({
    theme,
    className,
    variant,
    name,
    size,
    ...htmlIconProps
}) => {
    return (
        <StyledIcon
            theme={theme}
            className={className}
            variant={variant}
            name={name}
            size={size}
            {...htmlIconProps}
        />
    );
};
Icon.defaultProps = {
    size: 24,
};

export default Icon;
