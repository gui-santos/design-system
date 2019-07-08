import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

// imported components for react-live scope
import Button from '../../../design-system/Button';

import PlaygroundControllers from './PlaygroundControllers';

function Playground({
  mdxProps,
  componentMetadata: { childrenComponentProp, displayName },
}) {
  const [editedProps, setEditedProps] = useState({});

  const {
    props: { children, className },
  } = mdxProps.children;

  const transformCode = code => {
    // get a string with the props changed by the user
    const newProps = Object.keys(editedProps).reduce(
      (str, key) => `${str} ${key}="${editedProps[key]}"`,
      ''
    );

    // inject the new props into the code to be previewed
    return code.replace(
      new RegExp(`<${displayName}`, 'g'),
      `<${displayName}${newProps}`
    );
  };

  return children && className === 'language-.jsx' ? (
    <>
      <PlaygroundControllers
        componentProps={childrenComponentProp}
        editedProps={editedProps}
        handleSetEditedProps={setEditedProps}
      />
      <LiveProvider
        code={children}
        transformCode={transformCode}
        scope={{ Button }}
        disabled
      >
        <LivePreview />
        <LiveEditor />
        <LiveError />
      </LiveProvider>
    </>
  ) : (
    <pre {...mdxProps} />
  );
}

Playground.propTypes = {
  mdxProps: PropTypes.object.isRequired,
  componentMetadata: PropTypes.object.isRequired,
};

export default Playground;
