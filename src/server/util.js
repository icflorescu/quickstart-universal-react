/* eslint-disable import/prefer-default-export */
export const html = (strings, ...keys) => {
  strings.forEach(item => item.replace(/\n\s*/g, ''));
  String.raw(strings, ...keys);
};
/* eslint-enable import/prefer-default-export */