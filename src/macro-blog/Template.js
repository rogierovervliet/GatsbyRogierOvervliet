// Components==============
import { Link } from "gatsby";
import Img from "gatsby-image";
import { useMediaQ } from "hooks-lib";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Block from "../micro-components/Block";
import Share from "../micro-components/Share";
import { BlockStyling, Container } from "../style/Mixins";
// =========================

const Wrapper = styled.div`
  margin: ${({ theme: { spacing } }) => `0 0 ${spacing.s10}`};

  .gatsby-image-wrapper {
    margin-bottom: ${({ theme: { spacing } }) => spacing.s6};
    height: 70vh;
  }
`;

const ImageWrap = styled.div`
  position: relative;
`;

const TextWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  h1 {
    text-align: center;
    color: white;
    margin-bottom: ${({ theme: { spacing } }) => spacing.s1};
  }

  p {
    text-align: center;
    color: ${({ theme: { gray } }) => gray.s2};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  }
`;

const Bg = styled.div`
  background: ${({ theme: { black } }) => black.replace("1)", "0.8)")};
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const Container2 = styled.div`
  max-width: 850px;
  margin: ${({ theme: { spacing } }) => spacing.s8} auto;

  @media screen and (min-width: 1000px) {
    margin: ${({ theme: { spacing } }) => spacing.s10} auto;
  }
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  padding-top: ${({ theme: { spacing } }) => spacing.s4};

  span {
    margin-right: ${({ theme: { spacing } }) => spacing.s4};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};
  }
`;

const Browse = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding-top: ${({ theme: { spacing } }) => spacing.s9};
  justify-content: space-between;

  p {
    color: ${({ theme: { primary } }) => primary.s4};
  }

  .previous,
  .next {
    display: grid;
    grid-gap: ${({ theme: { spacing } }) => spacing.s4};
  }

  .previous {
    grid-row: 1;
  }

  .next {
    grid-row: 1;
    justify-self: end;
    justify-items: end;
  }
`;

export default function Template({ content }) {
  const [nextPost, setNextPost] = useState(null);
  const [previousPost, setPreviousPost] = useState(null);

  function createSlug(title) {
    const slug = title.toLowerCase().replace(/\s+/g, "-").slice(0, 200);

    return slug;
  }

  const query = useMediaQ("min", 400);

  useEffect(() => {
    let iNext;
    let iPrev;

    content.titles.forEach((e, i) => {
      if (e.titel.nl === content.title) {
        iNext = i + 1;
        iPrev = i - 1;
      }
    });

    content.titles.forEach((e, i) => {
      if (i === iNext) {
        setNextPost(e.titel.nl);
      } else if (i === iPrev) {
        setPreviousPost(e.titel.nl);
      }
    });
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Wrapper>
      <ImageWrap>
        <Img fluid={content.picture} alt={content.name} />
        <Bg />
        <TextWrap>
          <h1>{content.title}</h1>
          <p>{content.date}</p>
        </TextWrap>
      </ImageWrap>
      <Container2>
        <Container>
          <BlockStyling>
            <Block content={content.text} />
          </BlockStyling>
          <Flex>
            <span>Deel deze post:</span>
            <Share />
          </Flex>
          <Browse>
            {previousPost && (
              <Link className="previous" to={`/${createSlug(previousPost)}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  viewBox="0 0 36 22.5"
                >
                  <path
                    d="M22.5,0V9H0v4.5H22.5v9L36,11.115Z"
                    transform="translate(36 22.5) rotate(180)"
                    fill="#545493"
                  />
                </svg>
                {query && <p>{previousPost}</p>}
              </Link>
            )}
            {nextPost && (
              <Link className="next" to={`/${createSlug(nextPost)}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  viewBox="0 0 36 22.5"
                >
                  <path d="M22.5,0V9H0v4.5H22.5v9L36,11.115Z" fill="#545493" />
                </svg>
                {query && <p>{nextPost}</p>}
              </Link>
            )}
          </Browse>
        </Container>
      </Container2>
    </Wrapper>
  );
}
