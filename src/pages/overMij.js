// Components==============
import { graphql } from "gatsby";
import React from "react";
import Head from "../global-components/Layout/Head";
import About from "../marcro-overMij/About";

// =========================

export default function overMij({ data }) {
  const about = {
    title: data.sanityAbout.titel.nl,
    text: data.sanityAbout._rawTekst1,
    headshot: data.sanityAbout.headshot.asset.fluid
  };

  return (
    <>
      <Head
        title="Over mij"
        description="Page description goes here"
        keywords="content"
      />
      <About content={about} />
    </>
  );
}

export const query = graphql`
  query AboutQuery {
    sanityAbout {
      titel {
        nl
      }
      _rawTekst1
      titel2 {
        nl
      }
      _rawTekst2
      headshot {
        asset {
          fluid(maxWidth: 750) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;
