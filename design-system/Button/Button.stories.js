import React from 'react';

import { storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';

import Button from './index';

const handleClick = () => console.log('clicked');

storiesOf('Button', module)
  .addDecorator((storyFn, context) => withConsole()(storyFn)(context))
  .add('Primary', () => (
    <Button handleClick={handleClick}>Primary Button</Button>
  ))
  .add('Secondary', () => (
    <Button handleClick={handleClick} mode="secondary">
      Secondary Button
    </Button>
  ))
  .add('Small', () => (
    <Button handleClick={handleClick} mode="primary" size="small">
      Small Button
    </Button>
  ))
  .add('Big', () => (
    <Button handleClick={handleClick} mode="primary" size="big">
      Big Button
    </Button>
  ));
