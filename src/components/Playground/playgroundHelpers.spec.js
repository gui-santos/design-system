import { transformCode } from './playgroundHelpers';

describe('Returns a new code after changing props', () => {
  test('returns a new code with a new prop', () => {
    expect(
      transformCode(
        '<Button handleClick={() => console.log(\'clicked\')} value="Primary Button" />',
        { fluid: '{true}' }
      )
    ).toBe(
      '<Button fluid={true} handleClick={() => console.log(\'clicked\')} value="Primary Button" />'
    );
  });

  test('returns a new code with a new prop, removing a duplicate prop', () => {
    expect(
      transformCode(
        '<Button handleClick={() => console.log(\'clicked\')} value="Primary Button" />',
        { value: '"this is a different value"' }
      )
    ).toBe(
      '<Button value="this is a different value" handleClick={() => console.log(\'clicked\')} />'
    );
  });
});
