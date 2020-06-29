import * as React from 'react';
import { Icon as StyledIcon } from './styled';

export type Props = {
    /**
     * Theme provider object
     */
    theme?: Theme;

    /**
     * A color variant
     */
    variant?: Variants;

    /**
     * Icon name
     */
    name: string;

    /**
     * Icon size in pixels
     */
    size?: number;
};

const Icon: React.FC<Props> = ({
    theme,
    variant,
    name,
    size,
    ...htmlIconProps
}) => {
    return (
        <StyledIcon
            theme={theme}
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
