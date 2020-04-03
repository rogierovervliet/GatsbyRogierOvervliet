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
      <Head title="Over mij" description={`Rogier Overvliet Onrecht ombuigen naar rechtvaardigheid. Op het gebied van de arbeidsmarkt is dit voor mij een van de fundamenten van alle dagelijkse werkzaamheden. Het mag niet zo zijn dat ik, jij en wij toekijken hoe een samenleving de arbeidsmarkt, die in mijn ogen de brandstof is voor de economie op slot zet voor mensen … "x over mij" verder lezen`} />
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
