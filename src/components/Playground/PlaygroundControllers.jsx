import React from 'react';
import PropTypes from 'prop-types';

import EnumController from './EnumController';
import Checkbox from '../../../design-system/Checkbox';

function PlaygroundControllers({
  componentProps,
  editedProps,
  handleSetEditedProps,
}) {
  const handleChange = (propName, value) => {
    return handleSetEditedProps({ ...editedProps, [propName]: value });
  };

  return (
    <form>
      {componentProps.map((prop, idx) => {
        switch (prop.type.name) {
          case 'enum':
            return (
              <EnumController
                key={idx}
                label={prop.name}
                options={prop.type.value}
                defaultValue={prop.defaultValue.value}
                handleChange={({ value }) =>
                  handleChange(prop.name, `"${value}"`)
                }
              />
            );
          case 'bool':
            return (
              <Checkbox
                key={idx}
                label={prop.name}
                value={prop.name}
                handleChange={value =>
                  handleChange(prop.name, `{${value.target.checked}}`)
                }
              />
            );
          default:
            return undefined;
        }
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
