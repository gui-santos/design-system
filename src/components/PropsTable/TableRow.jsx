import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import EnumOptions from './EnumOptions';

const DefaultCel = styled.td`
  text-align: center;
`;

const RequiredLabel = styled.em`
  display: block;
  color: red;
`;

function TableRow({ prop }) {
  return (
    <tr>
      <td>
        {prop.name}
        {prop.required && <RequiredLabel>(required)</RequiredLabel>}
      </td>
      <td>
        {prop.type.name}
        {prop.type.name === 'enum' && <EnumOptions options={prop.type.value} />}
      </td>
      <DefaultCel>
        {prop.defaultValue ? prop.defaultValue.value : '-'}
      </DefaultCel>
      {prop.docblock ? <td>{prop.docblock}</td> : <td />}
    </tr>
  );
}

TableRow.propTypes = {
  prop: PropTypes.object.isRequired,
};

export default TableRow;
