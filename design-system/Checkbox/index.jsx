import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { colors, getFontStyles } from '../_constants';

const Wrapper = styled.label`
  ${getFontStyles('lighter')}
  height: 18px;
  font-size: 0.75rem;
  display: block;
  position: relative;
  padding-left: 25px;
  cursor: pointer;
  user-select: none;

  &:hover span {
    background-color: ${colors.secondaryHover};
  }
`;

const Input = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;

  &:checked ~ span {
    background-color: ${colors.primary};
  }
  &:checked ~ span:after {
    display: block;
  }
`;

const CheckMark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 18px;
  width: 18px;
  border-radius: 2px;
  border: 2px solid ${colors.primary};
  box-sizing: border-box;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  &:after {
    content: '';
    position: absolute;
    display: none;
    left: 4px;
    top: 1px;
    width: 6px;
    height: 10px;
    border: solid #fff;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`;

/**
 * Checkbox should be used in forms when the input of the user needs to be true/false
 */
function Checkbox(props) {
  return (
    <Wrapper>
      <Input type="checkbox" onChange={props.handleChange} />
      <CheckMark />
      {props.label}
    </Wrapper>
  );
}

Checkbox.propTypes = {
  /** Defines the label that will name the checkbox */
  label: PropTypes.string.isRequired,
  /** Defines the function that will be called when the user clicks in the checkbox */
  handleChange: PropTypes.func.isRequired,
};

export default Checkbox;
