import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import dracula from 'prism-react-renderer/themes/dracula';
import styled from 'styled-components';

// imported components for react-live scope
import Button from '../../../design-system/Button';
import Checkbox from '../../../design-system/Checkbox';
import TextInput from '../../../design-system/TextInput';

import { transformCode } from './playgroundHelpers';
import PlaygroundControllers from './PlaygroundControllers';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-column-gap: 2rem;
  padding-right: 2rem;
  margin-bottom: 3rem;
  border: 1px solid #dadada;
`;

const LiveWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const PreviewWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  min-height: 300px;
  padding: 1rem;
  border-right: 1px solid #dadada;
  box-shadow: inset 0 0 10px 0px rgba(0, 0, 0, 0.15);
`;

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
