import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  color: #8a8a8a;
`;

function EnumOptions({ options }) {
  return (
    <Wrapper>
      [
      {options.map((option, idx) => {
        const text = `${option.value.replace(/'/g, '')}${
          idx < options.length - 1 ? '; ' : ''
        }`;
        return <span key={idx}>{text}</span>;
      })}
      ]
    </Wrapper>
  );
}

EnumOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
};

export default EnumOptions;
