// Components==============
import { graphql } from "gatsby";
import React from "react";
import Head from "../global-components/Layout/Head";
import Template from "../macro-blog/Template";
// =========================

export default function Templates({ data }) {
  const post = data.sanityBlogPost;

  const content = {
    title: post.titel.nl,
    picture: post.Afbeelding.asset.fluid,
    date: post.Datum,
    text: post._rawTekst,
    titles: data.allSanityBlogPost.nodes,
  };

  return (
    <>
      <Head
        title={content.title}
        description={`${content.text.nl[0].children[0].text.slice(
          0,
          150
        )}…  verder lezen`}
      />
      <Template content={content} />
    </>
  );
}

export const query = graphql`
  query PageQuery($slug: String!) {
    allSanityBlogPost(sort: { fields: Datum, order: DESC }) {
      nodes {
        titel {
          nl
        }
      }
    }
    sanityBlogPost(titel: { nl: { eq: $slug } }) {
      titel {
        nl
      }
      Datum(formatString: "DD MMMM YYYY")
      Afbeelding {
        asset {
          fluid(maxWidth: 1600) {
            ...GatsbySanityImageFluid
          }
        }
      }
      _rawTekst
    }
  }
`;
