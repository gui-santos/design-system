export const colors = {
  primary: '#e84600',
  primaryHover: '#ff6e30',
  secondaryHover: '#ffe4d8',
  shadow: 'rgba(0, 0, 0, 0.35)',
};

export function getFontStyles(weight) {
  return `
    font-family: 'Helvetica', sans-serif;
    font-weight: ${weight};
  `;
}
