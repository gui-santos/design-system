/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');
const componentWithMDXScope = require('gatsby-mdx/component-with-mdx-scope');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allMdx {
              edges {
                node {
                  id
                  frontmatter {
                    name
                    menu
                    title
                  }
                  parent {
                    ... on File {
                      name
                      sourceInstanceName
                    }
                  }
                  code {
                    scope
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        result.data.allMdx.edges.forEach(async ({ node }) => {
          const {
            id,
            frontmatter: { name, menu },
            code,
          } = node;

          createPage({
            path: `/${menu.toLowerCase()}/${name.toLowerCase()}`,
            component: componentWithMDXScope(
              path.resolve('./src/components/page-docs-template.js'),
              code.scope
            ),
            context: { id, name },
          });
        });
      })
    );
  });
};
