import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import './layout.css';
import Sidebar from './sidebar';

const layoutQuery = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMdx {
      edges {
        node {
          id
          frontmatter {
            menu
            name
          }
        }
      }
    }
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  min-height: 100vh;
`;

const Content = styled.div`
  margin: 0 auto;
  padding: 6rem 1rem;
  max-width: 960px;
  flex-grow: 1;
`;

// gatsby-mdx is creating some phantom mdx
// so we need to filter them out
const filterAllMdx = data =>
  data.filter(
    ({ node: { frontmatter } }) => !!frontmatter.menu && !!frontmatter.name
  );

function Layout({ children }) {
  return (
    <StaticQuery query={layoutQuery}>
      {({ site, allMdx }) => (
        <ContentWrapper>
          <Sidebar
            components={filterAllMdx(allMdx.edges)}
            siteMetadata={site.siteMetadata}
          />
          <Content>{children}</Content>
        </ContentWrapper>
      )}
    </StaticQuery>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
