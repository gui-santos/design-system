import React from 'react';

import { storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';

import SelectInput from './index';

const handleChange = value => console.log(value);
const options = [
  { value: 'option 1', label: 'option 1' },
  { value: 'option 2', label: 'option 2' },
];

storiesOf('SelectInput', module)
  .addDecorator((storyFn, context) => withConsole()(storyFn)(context))
  .add('Basic', () => (
    <SelectInput
      label="My Select"
      options={options}
      default={options[0]}
      handleChange={handleChange}
    />
  ));
