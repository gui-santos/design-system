import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { colors, getFontStyles } from '../_constants';

const Label = styled.label`
  ${getFontStyles('lighter')}
  font-size: 0.75rem;
  color: ${colors.primary};
`;

const Input = styled.input`
  display: block;
  width: 100%;
  border-radius: 2px;
  border: 1px solid ${colors.primary};
  margin: 0.25rem 0 1rem;
  padding: 0.5rem;
  outline: none;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  font-size: 1rem;
  ${getFontStyles('lighter')};
  &:hover {
    border-color: ${colors.primaryHover};
  }
  &:focus {
    border-color: ${colors.primaryHover};
  }
  &::placeholder {
    color: ${colors.gray};
    font-size: 0.75rem;
  }
`;

/**
 * TextInput is a form component and it should be used to get text inputs from the user
 */
function TextInput(props) {
  return (
    <Label htmlFor={props.label.replace(/\s/g, '')}>
      {props.label}
      <Input
        id={props.label.replace(/\s/g, '')}
        placeholder={props.placeholder}
        onChange={props.handleChange}
      />
    </Label>
  );
}

TextInput.propTypes = {
  /** Defines the label of the input */
  label: PropTypes.string.isRequired,
  /** Defines the function that will be called when the user's changes the value of the input */
  handleChange: PropTypes.func.isRequired,
  /** You should always define a placeholder showing an example of a valid input */
  placeholder: PropTypes.string.isRequired,
};

export default TextInput;
