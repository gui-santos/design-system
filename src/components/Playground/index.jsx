import React from 'react';
import PropTypes from 'prop-types';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

import Button from '../../../design-system/Button';

function PlaygroundControllers({ dataProps }) {
  return (
    <form>
      {dataProps.map((prop, idx) => {
        if (prop.type.name === 'enum') {
          return (
            <label key={idx} htmlFor={prop.name}>
              {prop.name}
              <select id={prop.name} defaultValue={prop.defaultValue.value}>
                {prop.type.value.map((option, idx) => (
                  <option key={idx} value={option.value}>
                    {option.value}
                  </option>
                ))}
              </select>
            </label>
          );
        }

        return undefined;
      })}
    </form>
  );
}

function Playground({ mdxProps, dataProps }) {
  const componentInfo = mdxProps.children.props;

  const isJsxDoc =
    componentInfo.children && componentInfo.className === 'language-.jsx';

  console.log({ mdxProps, dataProps });

  return isJsxDoc ? (
    <>
      <PlaygroundControllers dataProps={dataProps} />
      <LiveProvider code={componentInfo.children} scope={{ Button }}>
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
  dataProps: PropTypes.arrayOf(PropTypes.object),
};

Playground.defaultProps = {
  dataProps: [],
};

export default Playground;
