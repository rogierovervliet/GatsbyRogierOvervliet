// Components==============
import { graphql } from "gatsby";
import React from "react";
import Head from "../global-components/Layout/Head";
import Hero from "../macro-home/Hero";
// =========================

export default function Index({ data }) {
  const hero = { titel: data.sanityHome.welkomTitel.nl };

  return (
    <>
      <Head
        title="Home"
        description="Page description goes here"
        keywords="content"
      />
      <Hero content={hero} />
    </>
  );
}

export const query = graphql`
  query homeQuery {
    sanityHome {
      welkomTitel {
        nl
      }
      titelEigenschappen {
        nl
      }
      _rawEigenschappen

      achtergrondAfbeelding {
        asset {
          fluid(maxWidth: 700) {
            ...GatsbySanityImageFluid
          }
        }
      }
      _rawQuote
      _rawReferenties
    }
  }
`;
