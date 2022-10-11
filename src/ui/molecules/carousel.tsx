import React from "react";
import MultiCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { WINDOW_SIZES } from "config/dimensions";

interface ICarouselProps {
  children: JSX.Element | JSX.Element[];
}

const Carousel: React.FC<ICarouselProps> = ({ children }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: WINDOW_SIZES.SIZE_4000, min: WINDOW_SIZES.SIZE_3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: WINDOW_SIZES.SIZE_3000, min: WINDOW_SIZES.SIZE_1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: WINDOW_SIZES.SIZE_1024, min: WINDOW_SIZES.SIZE_464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: WINDOW_SIZES.SIZE_464, min: 0 },
      items: 1,
    }
  };

  return (
    <MultiCarousel
      arrows
      autoPlaySpeed={3000}
      // centerMode={deviceWidth > WINDOW_SIZES.SIZE_1280 ? true : false}
      centerMode={false}
      draggable
      infinite
      minimumTouchDrag={80}
      responsive={responsive}
      showDots={true}
      slidesToSlide={1}
    >
      {children}
    </MultiCarousel>
  );
};

export default Carousel;
