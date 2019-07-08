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
      background: red;
      color: white;
      &:hover {
        background: transparent;
        color: red;
      }
    `.replace(/\n+\s+/g, '');

    expect(getButtonModeStyles('primary').replace(/\n+\s+/g, '')).toBe(style);
  });

  test('return the styles for a SECONDARY button', () => {
    const style = `
      background: transparent;
      color: red;
      &:hover {
        background: red;
        color: white;
      }
    `.replace(/\n+\s+/g, '');

    expect(getButtonModeStyles('secondary').replace(/\n+\s+/g, '')).toBe(style);
  });
});
