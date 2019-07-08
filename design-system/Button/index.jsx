import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { getButtonSizeStyles, getButtonModeStyles } from './buttonHelpers';

const ButtonStyles = styled.button`
  border-radius: 2px;
  border: 2px solid red;
  padding: 0.5em 1em;
  cursor: pointer;
  ${props => getButtonSizeStyles(props.size)}
  ${props => getButtonModeStyles(props.mode)}
`;

/**
 * Button should be used to execute actions that users can take
 */
function Button(props) {
  return (
    <ButtonStyles
      onClick={props.handleClick}
      type={props.type}
      mode={props.mode}
      size={props.size}
    >
      {props.children}
    </ButtonStyles>
  );
}

Button.propTypes = {
  /** Defines the function that will be called when the user's click the button */
  handleClick: PropTypes.func.isRequired,
  /** Defines what is the type of the button */
  type: PropTypes.oneOf(['button', 'submit']),
  /** Defines the style of the button */
  mode: PropTypes.oneOf(['primary', 'secondary']),
  /** Defines the size of the button */
  size: PropTypes.oneOf(['small', 'regular', 'big']),
};

Button.defaultProps = {
  type: 'button',
  mode: 'primary',
  size: 'regular',
};

export default Button;
