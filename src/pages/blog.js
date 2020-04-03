// Components==============
import { graphql } from "gatsby";
import React from "react";
import Head from "../global-components/Layout/Head";
import Overview from "../macro-blog/Overview";
// =========================

export default function blog({ data }) {
  return (
    <>
      <Head
        title="Blog"
        description="Page description goes here"
        keywords="content"
      />
      <Overview content={data.allSanityBlogPost.nodes} />
    </>
  );
}

export const query = graphql`
  query BlogAllQuery {
    allSanityBlogPost(sort: { fields: Datum, order: DESC }) {
      nodes {
        titel {
          nl
        }
        Datum(formatString: "DD MMMM YYYY")
        Afbeelding {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
        _rawTekst
      }
    }
  }
`;
