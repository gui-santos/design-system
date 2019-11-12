import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { colors } from '../../design-system/_constants';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
`;

const HomeLink = styled.div`
  padding-top: 6rem;
  margin-bottom: 3rem;

  & .homeLink {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

const Nav = styled.nav`
  background-color: #fff;
  border-right: 1px solid #dadada;
  padding: 0 2rem;
  height: 100%;

  & a {
    display: block;
    font-size: 1.25rem;
    color: ${colors.primary};
    text-decoration: none;
    margin-bottom: 0.5rem;
  }
  & a:hover {
    color: ${colors.primaryHover};
  }
  & strong {
    display: inline-block;
    font-size: 0.75rem;
    color: #dadada;
    margin-bottom: 0.5rem;
  }
`;

function Sidebar({ components, siteMetadata }) {
  return (
    <Wrapper>
      <Nav>
        <HomeLink>
          <Link className="homeLink" to="/">
            {siteMetadata.title}
          </Link>
        </HomeLink>

        {components.map(({ node: { id, frontmatter } }) => (
          <div key={id}>
            <Link
              to={`/${frontmatter.menu.toLowerCase()}/${frontmatter.name.toLowerCase()}`}
            >
              {frontmatter.name}
            </Link>
          </div>
        ))}
      </Nav>
    </Wrapper>
  );
}

Sidebar.propTypes = {
  components: PropTypes.arrayOf(PropTypes.object).isRequired,
  sidebarLinks: PropTypes.arrayOf(PropTypes.object),
};

Sidebar.defaultProps = {
  sidebarLinks: [],
};

export default Sidebar;
