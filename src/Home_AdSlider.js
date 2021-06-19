import React, { useState } from 'react'
import './Home_AdSlider.css'
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md"



const Home_AdSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current -1)
  }

  console.log(current)

  if (!Array.isArray(slides) || slides.length <=0 ) {
    return null;
  }

  return (
    <>
      <section className="adsliderrr">
        <MdKeyboardArrowLeft className="left-arrow" onClick={prevSlide} /> 
        <MdKeyboardArrowRight className="right-arrow" onClick={nextSlide} />
        {slides?.map((slide, index) => (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img className="adslider__image" src={slide.image} alt="what the" />
            )}
          </div>
        ))}
      </section>
    </>
  );
};

export default Home_AdSlider;
