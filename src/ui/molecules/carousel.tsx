import React from "react";
import MultiCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { WINDOW_SIZES } from "config/dimensions";
// import useWindowDimensions from "hooks/useWindowDimensions";

interface ICarouselProps {
  children: JSX.Element | JSX.Element[];
}

const Carousel: React.FC<ICarouselProps> = ({ children }) => {
  // const { deviceWidth } = useWindowDimensions();
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: WINDOW_SIZES.SIZE_4000, min: WINDOW_SIZES.SIZE_3000 },
      items: 6
    },
    largeDesktop: {
      breakpoint: { max: WINDOW_SIZES.SIZE_3000, min: WINDOW_SIZES.SIZE_1600 },
      items: 5
    },
    desktop: {
      breakpoint: { max: WINDOW_SIZES.SIZE_1600, min: WINDOW_SIZES.SIZE_1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: WINDOW_SIZES.SIZE_1024, min: WINDOW_SIZES.SIZE_768 },
      items: 3
    },
    mobile: {
      breakpoint: { max: WINDOW_SIZES.SIZE_768, min: 0 },
      items: 1
    }
  };

  return (
    <MultiCarousel
      arrows={false}
      autoPlaySpeed={10000}
      // centerMode={deviceWidth > WINDOW_SIZES.SIZE_768 ? false : true}
      centerMode={false}
      draggable
      infinite
      minimumTouchDrag={80}
      responsive={responsive}
      slidesToSlide={1}
      autoPlay
      rewind={false}
      customTransition="all 10s"
    >
      {children}
    </MultiCarousel>
  );
};

export default Carousel;
