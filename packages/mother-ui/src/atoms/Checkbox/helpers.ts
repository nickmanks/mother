import { variants } from '../../theme/colors';

export const getBackgroundColor = (checked: boolean, disabled?: boolean) => {
    if (disabled) {
        return variants.light.color;
    }

    if (checked) {
        return '#fff';
    }

    return 'transparent';
};
