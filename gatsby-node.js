/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');

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
          } = node;

          if (!!menu && !!name) {
            createPage({
              path: `/${menu.toLowerCase()}/${name.toLowerCase()}`,
              component: path.resolve('./src/components/page-docs-template.js'),
              context: { id, name },
            });
          }
        });
      })
    );
  });
};
