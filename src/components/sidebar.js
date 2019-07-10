import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { colors } from '../../design-system/_constants';
import Header from './header';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
`;

const Nav = styled.nav`
  background-color: #fff;
  border-right: 1px solid #dadada;
  padding: 2rem;
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
    display: block;
    font-size: 0.75rem;
    color: #dadada;
    margin-bottom: 0.5rem;
  }
`;

function Sidebar({ components, siteMetadata }) {
  return (
    <Wrapper>
      <Header siteTitle={siteMetadata.title} />
      <Nav>
        {siteMetadata.sidebar.pages.map((sidebarPage, idx) => (
          <div key={idx}>
            <Link to={sidebarPage.slug}>{sidebarPage.title}</Link>
          </div>
        ))}

        <strong>Components</strong>
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
