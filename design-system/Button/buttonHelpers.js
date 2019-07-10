import { colors } from '../_constants';

export function getButtonModeStyles(mode) {
  switch (mode) {
    case 'secondary':
      return `
        background-color: transparent;
        color: ${colors.primary};
        &:hover {
          background-color: ${colors.secondaryHover};
        }
        &:active {
          background-color: transparent;
        }
      `;
    default:
      return `
        background-color: ${colors.primary};
        color: white;
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
        &:hover {
          background-color: ${colors.primaryHover};
          border-color: ${colors.primaryHover};
          box-shadow: 0px 12px 20px -6px ${colors.shadow};
        }
        &:active {
          background-color: ${colors.primary};
          box-shadow: 0px 12px 20px -12px ${colors.shadow};
        }
      `;
  }
}

export function getButtonSizeStyles(size) {
  switch (size) {
    case 'big':
      return `font-size: 1.5rem;`;
    case 'regular':
      return `font-size: 1rem;`;
    default:
      return `font-size: 0.75rem;`;
  }
}
