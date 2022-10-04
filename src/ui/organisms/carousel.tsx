import React from "react";
import MultiCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface ICarouselProps {
  children: JSX.Element | JSX.Element[];
}

const Carousel: React.FC<ICarouselProps> = ({ children }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    }
  };

  return (
    <MultiCarousel
      arrows
      autoPlaySpeed={3000}
      centerMode={true}
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
