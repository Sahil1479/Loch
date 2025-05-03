import React, { useRef } from "react";
import TestimonialCard from "./TestimonialCard";
import "./testimonial.css";
import logo from "../../images/Vector.svg";

const testimonials = [
  {
      name: "Jack F",
      designation: "Ex Blackrock PM",
      message: "Love how Loch integrates portfolio analytics and whale watching into one unified app."
  },
  {
      name: "Yash P",
      designation: "Research, 3poch Crypto Hedge Fund",
      message: "I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!"
  },
  {
      name: "Shiv S",
      designation: "Co-Founder Magik Labs",
      message: "Managing my own portfolio is helpful and well designed. What’s really interesting is watching the whales though. No one else has made whale tracking so simple."
  }
];

export const TestimonialsSection = () => {
  const sliderRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  
  const onMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft.current = sliderRef.current.scrollLeft;
  };
  
  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    sliderRef.current.scrollLeft = scrollLeft.current - walk;
  };
  
  const stopDragging = () => {
    isDragging.current = false;
  };

  return (
    <div className="testimonials-section">
        <h3>Testimonials</h3>
        <div className="testimonials-container">
            <img src={logo} alt="logo" className="logo-icon" />
            <div 
              className="testimonials-container"
              ref={sliderRef}
              onMouseDown={onMouseDown}
              onMouseLeave={stopDragging}
              onMouseUp={stopDragging}
              onMouseMove={onMouseMove}
            >
                {testimonials.map((testimonial, _) => (
                <TestimonialCard name={testimonial.name} designation={testimonial.designation} message={testimonial.message} />
                ))}
            </div>
        </div>
    </div>
  );
};