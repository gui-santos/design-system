import '@storybook/addon-console';
import { configure } from '@storybook/react';

const req = require.context('../design-system', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
