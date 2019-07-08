import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { colors } from '../_constants';
import { getButtonSizeStyles, getButtonModeStyles } from './buttonHelpers';

const ButtonStyles = styled.button`
  border-radius: 2px;
  border: 1px solid ${colors.primary};
  padding: 0.75em 1em;
  cursor: pointer;
  outline: none;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  ${props => props.fluid && 'width: 100%;'}
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
      fluid={props.fluid}
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
  /** Makes the button the same size as it's container */
  fluid: PropTypes.bool,
};

Button.defaultProps = {
  type: 'button',
  mode: 'primary',
  size: 'regular',
  fluid: false,
};

export default Button;
