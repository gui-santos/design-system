import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import TableRow from './TableRow';

const TableTitle = styled.h3`
  margin-bottom: 0.5rem;
`;

const NameCol = styled.th`
  width: 20%;
`;

const TypeCol = styled.th`
  width: 20%;
`;

const DefaultCol = styled.th`
  width: 10%;
  text-align: center;
`;

const DescriptionCol = styled.th`
  width: 50%;
`;

function Table({ propsData }) {
  return (
    <>
      <TableTitle>Props</TableTitle>
      <table>
        <thead>
          <tr>
            <NameCol>Name</NameCol>
            <TypeCol>Type</TypeCol>
            <DefaultCol>Default</DefaultCol>
            <DescriptionCol>Description</DescriptionCol>
          </tr>
        </thead>

        <tbody>
          {propsData.map(prop => (
            <TableRow key={prop.name} prop={prop} />
          ))}
        </tbody>
      </table>
    </>
  );
}

Table.propTypes = {
  propsData: PropTypes.arrayOf(PropTypes.object),
};

Table.defaultProps = {
  propsData: [],
};

export default Table;
