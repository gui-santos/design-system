import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import dracula from 'prism-react-renderer/themes/dracula';
import styled from 'styled-components';

// imported components for react-live scope
import Button from '../../../design-system/Button';

import PlaygroundControllers from './PlaygroundControllers';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-column-gap: 2rem;
  margin-bottom: 3rem;
`;

const LiveWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const PreviewWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  padding: 1rem;
  border: 1px solid #dadada;
`;

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
    <Grid>
      <LiveWrapper>
        <LiveProvider
          code={transformCode(children)}
          scope={{ Button }}
          theme={dracula}
        >
          <PreviewWrapper>
            <LivePreview />
          </PreviewWrapper>
          <LiveEditor />
          <LiveError />
        </LiveProvider>
      </LiveWrapper>
      <PlaygroundControllers
        componentProps={childrenComponentProp}
        editedProps={editedProps}
        handleSetEditedProps={setEditedProps}
      />
    </Grid>
  ) : (
    <pre {...mdxProps} />
  );
}

Playground.propTypes = {
  mdxProps: PropTypes.object.isRequired,
  componentMetadata: PropTypes.object.isRequired,
};

export default Playground;
