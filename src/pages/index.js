// Components==============
import { graphql } from "gatsby";
import React from "react";
import Head from "../global-components/Layout/Head";
import Hero from "../macro-home/Hero";
import Quote from "../macro-home/Quote";
import Referenties from "../macro-home/Referenties";
import Services from "../macro-home/Services";
// =========================

export default function Index({ data }) {
  const hero = {
    titel: data.sanityHome.welkomTitel.nl,
    tekst: data.sanityHome.welkomTekst.nl
  };

  const service = {
    titel: data.sanityHome.titelEigenschappen.nl,
    array: data.sanityHome._rawEigenschappen,
    picture: data.sanityHome.eigenschappen
  };

  const quote = {
    text: data.sanityHome._rawQuote,
    picture: data.sanityHome.achtergrondAfbeelding
  };

  const referenties = data.sanityHome._rawReferenties;

  return (
    <>
      <Head
        title="Home"
        description={`Sociaal, betrouwbaar, verbindend & innovatief Wat heb ik te bieden? Personal Branding Hoe zie ik eruit? hoe kom ik voor de dag?  Als wij eerlijk zijn, doen jij en ik dit elke dag. We stellen onszelf meerdere keren per dag de vraag of wij wel de goede kleding aanhebben, of we wel het goede outfit … "home" verder lezen`}
      />
      <Hero content={hero} />
      <Services content={service} />
      <Quote content={quote} />
      <Referenties content={referenties} />
    </>
  );
}

export const query = graphql`
  query homeQuery {
    sanityHome {
      welkomTitel {
        nl
      }
      welkomTekst {
        nl
      }
      titelEigenschappen {
        nl
      }
      _rawEigenschappen

      eigenschappen {
        afbeelding {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
      achtergrondAfbeelding {
        asset {
          fluid(maxWidth: 1200) {
            ...GatsbySanityImageFluid
          }
        }
      }
      _rawQuote
      _rawReferenties
    }
  }
`;
