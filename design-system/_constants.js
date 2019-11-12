export const colors = {
  primary: '#563ad9',
  primaryHover: '#5a61e1',
  secondaryHover: '#e8e3ff',
  gray: '#887575',
  shadow: 'rgba(0, 0, 0, 0.35)',
};

export function getFontStyles(weight) {
  return `
    font-family: 'Helvetica', sans-serif;
    font-weight: ${weight};
  `;
}
