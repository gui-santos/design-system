import React from 'react';

import { storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';

import Button from './index';

const handleClick = () => console.log('clicked');

storiesOf('Button', module)
  .addDecorator((storyFn, context) => withConsole()(storyFn)(context))
  .add('Primary', () => (
    <Button handleClick={handleClick} value="Primary Button" />
  ))
  .add('Secondary', () => (
    <Button
      handleClick={handleClick}
      value="Secodnary Button"
      mode="secondary"
    />
  ))
  .add('Small', () => (
    <Button handleClick={handleClick} value="Small Button" size="small" />
  ))
  .add('Big', () => (
    <Button handleClick={handleClick} value="Big Button" size="big" />
  ))
  .add('Fluid', () => (
    <Button handleClick={handleClick} value="Fluid Button" fluid />
  ));
