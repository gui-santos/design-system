import React from 'react';

import { storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';

import Checkbox from './index';

const handleChange = e => console.log(`checked: ${e.target.checked}`);

storiesOf('Checkbox', module)
  .addDecorator((storyFn, context) => withConsole()(storyFn)(context))
  .add('Unchecked', () => (
    <Checkbox
      label="This is a checkbox"
      value="checkbox_value"
      handleChange={handleChange}
    />
  ));
