// Components==============
import { graphql } from "gatsby";
import React from "react";
import Head from "../global-components/Layout/Head";
import Services from "../macro-aanbod";
// =========================

export default function Index({ data }) {
  const service = {
    titel: data.sanityService.titel.nl,
    array: data.sanityService._rawEigenschappen,
    picture: data.sanityService.eigenschappen,
  };

  return (
    <>
      <Head
        title="Home"
        description={`Sociaal, betrouwbaar, verbindend & innovatief Wat heb ik te bieden? Personal Branding Hoe zie ik eruit? hoe kom ik voor de dag?  Als wij eerlijk zijn, doen jij en ik dit elke dag. We stellen onszelf meerdere keren per dag de vraag of wij wel de goede kleding aanhebben, of we wel het goede outfit … "home" verder lezen`}
      />
      <Services content={service} />
    </>
  );
}

export const query = graphql`
  query serviceQuery {
    sanityService {
      titel {
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
    }
  }
`;
