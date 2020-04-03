// Components==============
import Facebook from "assets/Facebook.svg";
import LinkedIn from "assets/LinkedIn.svg";
import logo from "assets/Logo-Rogier-Overvliet2.svg";
import SDGC from "assets/SDGC.svg";
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
  transform: translateY(10px);

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
  justify-content: space-between;
  width: 120px;
  margin-top: ${({ theme: { spacing } }) => spacing.s3};

  img {
    width: 30px;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

const SDG = styled.a`
  justify-self: end;
  display: none;

  @media screen and (min-width: 1000px) {
    display: block;
  }

  h3 {
    margin-bottom: ${({ theme: { spacing } }) => spacing.s1};
    color: white;
    opacity: 0.7;
    font-size: 19px;
  }

  img {
    width: 325px;
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
          <Contact>
            <a
              href="https://www.linkedin.com/in/rogierovervliet/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={LinkedIn} alt="LinkedIn" />
            </a>
            <a
              href="https://www.facebook.com/rogierovervliet.nl/"
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
        </ContactGegevens>
        <Logo src={logo} alt="logo-Rogier-Overvliet" />

        <SDG
          href="https://www.sdgnederland.nl/user/rogierovervliet/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3>OFFICIEEL PARTNER: </h3>
          <img src={SDGC} alt="SDGC" />
        </SDG>
      </Grid>
    </FooterWrap>
  );
}
