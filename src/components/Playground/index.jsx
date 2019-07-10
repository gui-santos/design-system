import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import dracula from 'prism-react-renderer/themes/dracula';
import styled from 'styled-components';

// imported components for react-live scope
import Button from '../../../design-system/Button';
import Checkbox from '../../../design-system/Checkbox';

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
    let newCode = code;
    // get a string with the props changed by the user
    const newProps = Object.keys(editedProps).reduce(
      (str, key) => `${str} ${key}=${editedProps[key]}`,
      ''
    );

    // remove duplicated prop
    if (Object.keys(editedProps).length > 0) {
      Object.keys(editedProps).forEach(key => {
        const regex = new RegExp(`${key}=("|{).+("|})`, 'g');
        newCode = newCode.replace(regex, '');
      });
    }

    // inject the new props into the code to be previewed
    return newCode.replace(
      new RegExp(`<${displayName}`, 'g'),
      `<${displayName}${newProps}`
    );
  };

  return children && className === 'language-.jsx' ? (
    <Grid>
      <LiveWrapper>
        <LiveProvider
          code={transformCode(children)}
          scope={{ Button, Checkbox }}
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
