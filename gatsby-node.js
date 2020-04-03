exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  deletePage(page);

  return createPage({
    ...page,

    context: {
      ...page.context
    }
  });
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allSanityBlogPost {
        nodes {
          titel {
            nl
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  const projects = result.data.allSanityBlogPost.nodes || [];
  projects.forEach(edge => {
    const slug = edge.titel.nl
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace("?", "")
      .slice(0, 200);

    const path = `/${slug}`;

    createPage({
      path,
      component: require.resolve("./src/templates/Templates.js"),
      context: { slug: edge.titel.nl }
    });
  });
};
