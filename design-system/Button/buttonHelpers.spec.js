import { colors } from '../_constants';
import { getButtonSizeStyles, getButtonModeStyles } from './buttonHelpers';

describe('Get button styles based on SIZE', () => {
  test('return the styles for a BIG button', () => {
    expect(getButtonSizeStyles('big')).toBe('font-size: 24px;');
  });

  test('return the styles for a REGULAR button', () => {
    expect(getButtonSizeStyles('regular')).toBe('font-size: 16px;');
  });

  test('return the styles for a SMALL button', () => {
    expect(getButtonSizeStyles('small')).toBe('font-size: 12px;');
  });
});

describe('Get button styles based on MODE', () => {
  test('return the styles for a PRIMARY button', () => {
    const style = `
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
    `.replace(/\n+\s+/g, '');

    expect(getButtonModeStyles('primary').replace(/\n+\s+/g, '')).toBe(style);
  });

  test('return the styles for a SECONDARY button', () => {
    const style = `
      background-color: transparent;
      color: ${colors.primary};
      &:hover {
        background-color: ${colors.secondaryHover};
      }
      &:active {
        background-color: transparent;
      }
    `.replace(/\n+\s+/g, '');

    expect(getButtonModeStyles('secondary').replace(/\n+\s+/g, '')).toBe(style);
  });
});
