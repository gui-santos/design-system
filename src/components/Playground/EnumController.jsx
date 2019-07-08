import React from 'react';
import PropTypes from 'prop-types';

import SelectInput from '../../../design-system/SelectInput';

function EnumController({ label, options, defaultValue, handleChange }) {
  const optionsArray = options.reduce((values, objValue) => {
    const value = objValue.value.replace(/'/g, '');
    return [...values, { value, label: value }];
  }, []);

  const defaultValueObj = optionsArray.find(
    option => option.value === defaultValue.replace(/'/g, '')
  );

  return (
    <SelectInput
      label={label}
      options={optionsArray}
      default={defaultValueObj}
      handleChange={handleChange}
    />
  );
}

EnumController.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleChange: PropTypes.func.isRequired,
  defaultValue: PropTypes.string,
};

EnumController.defaulProps = {
  defaultValue: '',
};

export default EnumController;
