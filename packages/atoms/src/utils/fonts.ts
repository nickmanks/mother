export const hexToDec = (hexString: string): number => {
  const decString = hexString.replace(/[^a-f0-9]/gi, '');

  return parseInt(decString, 16);
};

export const fontColorPicker = (color: string): string => {
  const red = hexToDec(color.substr(1, 2));
  const green = hexToDec(color.substr(3, 2));
  const blue = hexToDec(color.substr(5, 2));

  const contrast = Math.sqrt(
    red * red * 0.241 + green * green * 0.691 + blue * blue * 0.068
  );

  if (contrast > 130) {
    return '#000';
  }

  return '#fff';
};
