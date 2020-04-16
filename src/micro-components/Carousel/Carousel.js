// Components==============
import { useMediaQ } from "hooks-lib";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import styled from "styled-components";
import SwitchImp from "./Arrow.inline.svg";
// =========================

const SlideWrapper = styled.div`
  /* ====== */
  /* ARROWS */
  /* ====== */

  .slick-prev,
  .slick-next {
    width: 50px;
    height: 50px;
    z-index: 1;
  }

  #leftArrow {
    transform: translate(0, -50%);
  }

  #rightArrow {
    transform: translate(0, -50%) rotate(180deg);
  }

  .slick-slide {
    @media screen and (min-width: 800px) {
      padding: 0 ${({ theme: { spacing } }) => `${spacing.s4}`};
    }

    @media screen and (min-width: 1200px) {
      padding: 0 ${({ theme: { spacing } }) => `${spacing.s8}`};
    }
  }
`;

const CarouselArrow = styled(SwitchImp)`
  .backgroundSvg {
    fill: ${({ theme: { primary } }) => primary.s4};
  }

  .arrowSvg {
    fill: ${({ theme: { white } }) => white};
  }
`;

function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <button onClick={onClick}>
      <CarouselArrow className={className} id="rightArrow" />
    </button>
  );
}

function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <button onClick={onClick}>
      <CarouselArrow className={className} id="leftArrow" />
    </button>
  );
}

// =====
// WIDTH
// =====

const Slide = styled(Slider)`
  margin: 0 auto;
  max-width: 1400px;
`;

export default function Carousel({ children }) {
  const Query = useMediaQ("min", 800);

  var settings = {
    infinite: true,
    speed: 500,
    dots: true,
    slidesToShow: Query ? 2 : 1,
    slidesToScroll: 1,
    arrows: Query,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <SlideWrapper>
      <Slide {...settings}>{children}</Slide>
    </SlideWrapper>
  );
}
