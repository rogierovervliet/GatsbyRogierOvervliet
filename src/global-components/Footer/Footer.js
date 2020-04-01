// Components==============
import Facebook from "assets/Facebook.svg";
import LinkedIn from "assets/LinkedIn.svg";
import logo from "assets/Logo-Rogier-Overvliet2.svg";
import WhatsApp from "assets/WhatsApp.svg";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";
import { Container } from "../../style/Mixins";
// =========================

const FooterWrap = styled.div`
  height: 200px;
  background: ${({ theme: { primary } }) => primary.s4};
`;

const Grid = styled(Container)`
  display: Grid;
  align-items: center;
  height: 100%;
  justify-content: center;
  justify-items: center;

  @media screen and (min-width: 700px) {
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    justify-items: initial;
  }

  @media screen and (min-width: 1000px) {
    grid-template-columns: 1fr 100px 1fr;
  }
`;

const Logo = styled.img`
  width: 100px;

  @media screen and (min-width: 1000px) {
    grid-column: 2;
  }
`;

const ContactGegevens = styled.div`
  display: none;

  @media screen and (min-width: 1000px) {
    display: block;
  }

  div {
    margin-bottom: ${({ theme: { spacing } }) => spacing.s2};
  }

  p,
  a {
    color: white;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  }

  a {
    cursor: pointer;
  }
`;

const Contact = styled.div`
  display: flex;
  width: 150px;
  justify-content: space-between;
  justify-self: end;

  img {
    width: 35px;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

export default function Footer() {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      sanityContact {
        telefoon {
          nl
        }
        plaats {
          nl
        }
        mail {
          nl
        }
      }
    }
  `);

  return (
    <FooterWrap>
      <Grid>
        <ContactGegevens>
          <div>
            <p>{data.sanityContact.plaats.nl}</p>
          </div>
          <div>
            <a href={`tel:${data.sanityContact.telefoon.nl}`}>
              {data.sanityContact.telefoon.nl}{" "}
            </a>
          </div>
          <div>
            <a href={`mailto:${data.sanityContact.mail.nl}`}>
              {data.sanityContact.mail.nl}{" "}
            </a>
          </div>
        </ContactGegevens>
        <Logo src={logo} alt="logo-Rogier-Overvliet" />
        <Contact>
          <a
            href="https://www.linkedin.com/in/rogierovervliet/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LinkedIn} alt="LinkedIn" />
          </a>
          <a
            href="https://www.facebook.com/rogier.overvliet"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Facebook} alt="Facebook" />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=+31627994488"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={WhatsApp} alt="WhatsApp" />
          </a>
        </Contact>
      </Grid>
    </FooterWrap>
  );
}
