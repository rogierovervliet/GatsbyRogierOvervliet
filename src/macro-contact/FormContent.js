// Components==============
import React from "react";
import styled from "styled-components";
import { Button, flexUnit } from "../style/Mixins";
import Social from "./Social";
// =========================

const Form = styled.div`
  input {
    display: block;
    border: 2px solid ${({ theme: { primary } }) => primary.s4};;
    ${flexUnit(2.5, 16, 17, "vw", "font-size")}
    box-shadow: ${({ theme: { shadow } }) => shadow.medium};
    margin-bottom: ${({ theme: { spacing } }) => spacing.s3};
    width: 100%;
    padding: ${({ theme: { spacing } }) => spacing.s2};

    @media screen and (min-width: 700px) {
        width: 275px;
    }
  }

  textarea {
    width: 100%;
    height: 25vh;
    margin: ${({ theme: { spacing } }) => `${spacing.s4} 0 ${spacing.s4}`};
    padding: ${({ theme: { spacing } }) => spacing.s4};
    border: 2px solid ${({ theme: { primary } }) => primary.s4};;
  }

  .bottom {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: ${({ theme: { spacing } }) => `${spacing.s7} auto ${spacing.s1}`};
  }

  #email{
      justify-self: end;
  }
`;

const Inputs = styled.div`
  display: grid;

  @media screen and (min-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export default function FormContent({ tel }) {
  return (
    <Form>
      <Inputs>
        <input name="naam" placeholder="Naam" required />
        <input
          type="email"
          name="Email"
          placeholder="Email"
          required
          id="email"
        />
        <input type="tel" name="Telefoonnummer" placeholder="Telefoon" />
      </Inputs>
      <textarea name="Bericht" placeholder="Uw bericht" required />
      <div className="bottom">
        <Button type="submit">Verstuur</Button>
        <Social tel={tel} />
      </div>
    </Form>
  );
}
