import React from "react";
import image from "./img1.jpeg"
function SliderContent({ activeIndex, sliderImage }) {
  return (
    <section>
      {sliderImage.map((slide, index) => (
        <div
          style={{ color: "#3144eb" ,backgroundImage:`url(${image})`,backgroundRepeat:"inherit"}}
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <img className="slide-image" src={slide.urls} alt="" />
          <h2 className="slide-title">{slide.title}</h2>
          <h3
            className="slide-text"
            style={{ color: "#2d213b"}}
          >
            {slide.description}
          </h3>
        </div>
      ))}
    </section>
  );
}

export default SliderContent;
