import { fontColorPicker } from './fonts';
import { palette } from './palette';

type Theme = {
  primaryFont: string;
  base: string;
  secondary: string;
  warning: string;
  danger: string;
  success: string;
  info: string;
  red: string[];
  orange: string[];
  yellow: string[];
  lime: string[];
  green: string[];
  teal: string[];
  cyan: string[];
  blue: string[];
  indigo: string[];
  violet: string[];
  fuschia: string[];
  pink: string[];
};

const DEFAULTS = {
  primary: '#720afb',
  secondary: '#b988fd',
};

export const theme = (
  primary: string = DEFAULTS.primary,
  secondary: string = DEFAULTS.secondary
): Theme => {
  const result = palette(primary);

  const colors = {
    ...result,
    secondary,
    primaryFont: fontColorPicker(primary),
    warning: result.orange ? result.orange[5] : '',
    danger: result.red ? result.red[7] : '',
    success: result.cyan ? result.cyan[5] : '',
    info: result.blue ? result.blue[7] : '',
  };

  return colors;
};
