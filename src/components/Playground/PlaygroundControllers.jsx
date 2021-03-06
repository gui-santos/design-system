import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import EnumController from './EnumController';
import Checkbox from '../../../design-system/Checkbox';
import TextInput from '../../../design-system/TextInput';

const Form = styled.form`
  padding: 2rem 0;
`;

function getPropsController(prop, handleChange, idx) {
  switch (prop.type.name) {
    case 'enum':
      return (
        <EnumController
          key={idx}
          label={prop.name}
          options={prop.type.value}
          defaultValue={prop.defaultValue.value}
          handleChange={({ value }) => handleChange(prop.name, `"${value}"`)}
        />
      );
    case 'string':
      return (
        <TextInput
          key={idx}
          label={prop.name}
          placeholder={prop.name}
          handleChange={({ target }) =>
            handleChange(prop.name, `"${target.value}"`)
          }
        />
      );
    case 'bool':
      return (
        <Checkbox
          key={idx}
          label={prop.name}
          value={prop.name}
          handleChange={({ target }) =>
            handleChange(prop.name, `{${target.checked}}`)
          }
        />
      );
    default:
      return undefined;
  }
}

function PlaygroundControllers({
  componentProps,
  editedProps,
  handleSetEditedProps,
}) {
  const handleChange = (propName, value) => {
    return handleSetEditedProps({ ...editedProps, [propName]: value });
  };

  return (
    <Form>
      {componentProps.map((prop, idx) =>
        getPropsController(prop, handleChange, idx)
      )}
    </Form>
  );
}

PlaygroundControllers.propTypes = {
  componentProps: PropTypes.arrayOf(PropTypes.object).isRequired,
  editedProps: PropTypes.object.isRequired,
  handleSetEditedProps: PropTypes.func.isRequired,
};

export default PlaygroundControllers;
