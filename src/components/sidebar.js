import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Nav = styled.nav`
  width: 250px;
  background-color: #fff;
  border-right: 1px solid #dadada;
  padding: 2rem;
`;

function Sidebar({ components, sidebarLinks }) {
  return (
    <Nav>
      {sidebarLinks.map((sidebarPage, idx) => (
        <div key={idx}>
          <Link to={sidebarPage.slug}>{sidebarPage.title}</Link>
        </div>
      ))}

      <strong>Components:</strong>
      {components.map(({ node: { id, frontmatter } }) => (
        <div key={id}>
          <Link
            to={`${frontmatter.menu.toLowerCase()}/${frontmatter.name.toLowerCase()}`}
          >
            {frontmatter.name}
          </Link>
        </div>
      ))}
    </Nav>
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
