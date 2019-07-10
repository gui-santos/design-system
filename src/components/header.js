import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Wrapper = styled.header`
  width: 100%;
  background-color: #1a1a1a;
  padding: 1rem 2rem;
  font-size: 1.25rem;
  font-weight: lighter;
  text-transform: uppercase;
`;

function Header({ siteTitle }) {
  return (
    <Wrapper>
      <Link
        to="/"
        style={{
          color: 'white',
          textDecoration: 'none',
        }}
      >
        {siteTitle}
      </Link>
    </Wrapper>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
