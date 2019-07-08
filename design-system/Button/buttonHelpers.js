export function getButtonModeStyles(mode) {
  switch (mode) {
    case 'secondary':
      return `
        background: transparent;
        color: red;
        &:hover {
          background: red;
          color: white;
        }
      `;
    default:
      return `
        background: red;
        color: white;
        &:hover {
          background: transparent;
          color: red;
        }
      `;
  }
}

export function getButtonSizeStyles(size) {
  switch (size) {
    case 'big':
      return `font-size: 24px;`;
    case 'regular':
      return `font-size: 16px;`;
    default:
      return `font-size: 12px;`;
  }
}
