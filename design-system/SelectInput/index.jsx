import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import styled from 'styled-components';

import { getFontStyles } from '../_constants';

const Wrapper = styled.div`
  ${getFontStyles('lighter')}
  font-size: 16px;
  margin-bottom: 16px;
`;

const Label = styled.label`
  display: block;
  font-size: 14px;
  margin-bottom: 8px;
`;

/**
 * SelectInput should be used when it's necessary to show the user
 * a list of more than option to take some action
 */
function SelectInput(props) {
  return (
    <Wrapper>
      <Label htmlFor={props.label.replace(/\s/g, '-')}>{props.label}</Label>
      <Select
        id={props.label.replace(/\s/g, '-')}
        options={props.options}
        defaultValue={props.default}
        onChange={props.handleChange}
      />
    </Wrapper>
  );
}

SelectInput.propTypes = {
  /** Defines the function that will be called when the user's changes the option */
  handleChange: PropTypes.func.isRequired,
  /** Defines the label of input */
  label: PropTypes.string.isRequired,
  /** Defines the options of the select input */
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  /** Defines the default value of the select input */
  default: PropTypes.object,
};

SelectInput.defaultProps = {
  default: undefined,
};

export default SelectInput;
