import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import './layout.css';
import Header from './header';
import Sidebar from './sidebar';

const layoutQuery = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        sidebar {
          pages {
            slug
            title
          }
        }
      }
    }
    components: allMdx {
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
  min-height: calc(100vh - 56px);
`;

const Content = styled.div`
  margin: 0 auto;
  padding: 2rem 1rem;
  max-width: 960px;
  flex-grow: 1;
`;

function Layout({ children }) {
  return (
    <StaticQuery query={layoutQuery}>
      {({ site, components }) => (
        <>
          <Header siteTitle={site.siteMetadata.title} />
          <ContentWrapper>
            <Sidebar
              components={components.edges}
              sidebarLinks={site.siteMetadata.sidebar.pages}
            />
            <Content>{children}</Content>
          </ContentWrapper>
        </>
      )}
    </StaticQuery>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
