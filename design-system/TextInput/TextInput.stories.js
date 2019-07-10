import React from 'react';

import { storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';

import TextInput from './index';

const handleChange = value => console.log(value.target.value);

storiesOf('TextInput', module)
  .addDecorator((storyFn, context) => withConsole()(storyFn)(context))
  .add('Basic', () => (
    <TextInput
      label="This is a text input"
      placeholder="e.g This is a placeholder"
      handleChange={handleChange}
    />
  ));
