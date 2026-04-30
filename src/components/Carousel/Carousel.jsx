import React from "react";
import { Carousel } from "react-responsive-carousel";
import { img } from "./img/data";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classes from "./Carousel.module.css"
import { IoIosArrowBack } from "react-icons/io"; // Importing 'back' arrow icon from react-icons
import { IoIosArrowForward } from "react-icons/io"; // Importing 'forward' arrow icon from react-icons

function CarouselEffect() {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
      >
        {img.map((imageItemLink, i) => {
          return <img key={i} src={imageItemLink} />;
        })}
      </Carousel>
      <div className={classes.hero_img}></div>
    </div>
  );
}
export default CarouselEffect;
