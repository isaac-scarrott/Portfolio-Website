const path = require('path');

async function createBlogPostPages(graphql, createPage) {
  const postTemplate = path.resolve('src/templates/blog.js');

  const {errors, data} = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            html
            id
            frontmatter {
              path
            }
          }
        }
      }
    }
  `);

  if (errors) {
    throw new Error(errors);
  }

  data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: postTemplate,
    });
  });
}

async function createSkillsPages(graphql, createPage) {
  const skillTemplate = path.resolve('src/templates/skill.js');

  const {errors, data} = await graphql(`
    {
      allSkills {
        edges {
          node {
            path
          }
        }
      }
    }
  `);

  if (errors) {
    throw new Error(errors);
  }

  data.allSkills.edges.forEach(({ node }) => {
    createPage({
      path: node.path,
      component: skillTemplate,
    });
  });
}

exports.createPages = async ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  await createBlogPostPages(graphql, createPage);

  await createSkillsPages(graphql, createPage)
};
