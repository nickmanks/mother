import { compose } from 'ramda';
import { variants } from './colors';

export const getVariant = (type: string, ...compositionFunctions: any): any =>
    // eslint-disable-next-line
    // @ts-ignore
    compose(...compositionFunctions, ({ theme, variant }: any): string => {
        if (variant && theme?.mode === 'light' && variants[variant]) {
            return variants[variant][type];
        }

        return variants['primary'][type];
    });

export const getRandomColor = () =>
    Math.floor(Math.random() * 16777215).toString(16);
