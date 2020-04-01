// Components==============
import { motion } from "framer-motion";
import { graphql, useStaticQuery } from "gatsby";
import React, { useContext } from "react";
import styled from "styled-components";
import { ModalContext } from "../global-components/Layout/Layout";
import Block from "../micro-components/Block";
import FormContent from "./FormContent";
// =========================

const FormCard = styled(motion.div)`
  position: fixed;
  max-width: 700px;
  width: 90%;
  max-height: 90vh;
  overflow: auto;
  padding: ${({ theme: { spacing } }) =>
    `${spacing.s9} ${spacing.s3} ${spacing.s4}`};
  background: ${({ theme: { white } }) => white};
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  top: 50%;
  left: 50%;
  z-index: 401;

  @media screen and (min-width: 500px) {
    padding: ${({ theme: { spacing } }) =>
      `${spacing.s9} ${spacing.s6} ${spacing.s5}`};
  }

  #cross {
    position: absolute;
    width: 30px;
    right: 9px;
    top: 9px;
    cursor: pointer;
  }
`;

const Shader = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  background: black;
  width: 100vw;
  height: 100vh;
  z-index: 400;
`;

const BlockStyling = styled.div`
  p {
    margin-bottom: ${({ theme: { spacing } }) => spacing.s4};
    line-height: ${({ theme: { lineHeight } }) => lineHeight.s4};
  }
`;

const formVariants = {
  open: { opacity: 1, x: "-50%", y: "-50%", display: "block" },
  closed: {
    opacity: 0,
    x: "150%",
    y: "-50%",
    transitionEnd: {
      display: "none"
    }
  }
};

const BgVariants = {
  open: {
    opacity: 0.8,
    display: "block"
  },
  closed: {
    opacity: 0,
    transitionEnd: {
      display: "none"
    }
  }
};

export default function ContactForm() {
  const formName = "Contact form";

  const { modalIsOpen, handleChange } = useContext(ModalContext);

  const data = useStaticQuery(graphql`
    query ContactQuery {
      sanityContact {
        _rawContactTekst
        telefoon {
          nl
        }
      }
    }
  `);

  return (
    <div>
      <Shader
        animate={modalIsOpen ? "open" : "closed"}
        variants={BgVariants}
        initial={false}
        onClick={handleChange}
      />
      <FormCard
        animate={modalIsOpen ? "open" : "closed"}
        variants={formVariants}
        initial={false}
      >
        <svg
          onClick={handleChange}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.25 29.25"
          id="cross"
        >
          <path
            fill="#2b2b2b"
            d="M14.625 0A14.625 14.625 0 1029.25 14.625 14.623 14.623 0 0014.625 0zm3.705 19.92l-3.705-3.706-3.705 3.705a1.124 1.124 0 11-1.589-1.589l3.705-3.705-3.705-3.705a1.124 1.124 0 011.589-1.589l3.705 3.705 3.705-3.705a1.124 1.124 0 111.589 1.589l-3.705 3.705 3.705 3.705a1.129 1.129 0 010 1.589 1.116 1.116 0 01-1.589.001z"
          />
        </svg>
        <form
          id={formName}
          name={formName}
          method="post"
          action="/success/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value={formName} />
          {/* The `hidden` fields are required to support form submissions without JavaScript */}
          <BlockStyling>
            <Block content={data.sanityContact._rawContactTekst} />
          </BlockStyling>
          <FormContent tel={data.sanityContact.telefoon.nl} />
        </form>
      </FormCard>
    </div>
  );
}
