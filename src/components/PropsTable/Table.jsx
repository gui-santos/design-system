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

function Table({ dataProps }) {
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
          {dataProps.map(prop => (
            <TableRow key={prop.name} prop={prop} />
          ))}
        </tbody>
      </table>
    </>
  );
}

Table.propTypes = {
  dataProps: PropTypes.arrayOf(PropTypes.object),
};

Table.defaultProps = {
  dataProps: [],
};

export default Table;
