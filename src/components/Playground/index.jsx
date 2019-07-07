import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

import Button from '../../../../src/components/Button';

// const scope = { styled, Button };

function Playground(props) {
  const componentInfo = props.children.props;

  return componentInfo.children &&
    componentInfo.className === 'language-.jsx' ? (
    <LiveProvider code={componentInfo.children} scope={{ Button }}>
      <LiveEditor />
      <LiveError />
      <LivePreview />
    </LiveProvider>
  ) : (
    <pre {...props} />
  );
}

export default Playground;
