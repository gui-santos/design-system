import React from 'react';
import PropTypes from 'prop-types';

import EnumController from './EnumController';

function PlaygroundControllers({
  componentProps,
  editedProps,
  handleSetEditedProps,
}) {
  const handleChange = (propName, option) =>
    handleSetEditedProps({ ...editedProps, [propName]: option.value });
  return (
    <form>
      {componentProps.map((prop, idx) => {
        if (prop.type.name === 'enum') {
          return (
            <EnumController
              key={idx}
              label={prop.name}
              options={prop.type.value}
              defaultValue={prop.defaultValue.value}
              handleChange={value => handleChange(prop.name, value)}
            />
          );
        }
        return undefined;
      })}
    </form>
  );
}

PlaygroundControllers.propTypes = {
  componentProps: PropTypes.arrayOf(PropTypes.object).isRequired,
  editedProps: PropTypes.object.isRequired,
  handleSetEditedProps: PropTypes.func.isRequired,
};

export default PlaygroundControllers;
