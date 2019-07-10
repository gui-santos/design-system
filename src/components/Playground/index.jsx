import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import dracula from 'prism-react-renderer/themes/dracula';

import { Grid, PreviewWrapper, LiveWrapper } from './styles';

// imported components for react-live scope
import Button from '../../../design-system/Button';
import Checkbox from '../../../design-system/Checkbox';
import TextInput from '../../../design-system/TextInput';

import { transformCode } from './playgroundHelpers';
import PlaygroundControllers from './PlaygroundControllers';

function Playground({
  mdxProps,
  componentMetadata: { childrenComponentProp },
}) {
  const [editedProps, setEditedProps] = useState({});

  const {
    props: { children, className },
  } = mdxProps.children;

  return children && className === 'language-.jsx' ? (
    <Grid>
      <LiveWrapper>
        <LiveProvider
          code={transformCode(children, editedProps)}
          scope={{ Button, Checkbox, TextInput }}
          theme={dracula}
        >
          <PreviewWrapper>
            <LivePreview Component={React.Fragment} />
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
