import React from "react";
import TestimonialCard from "./TestimonialCard";
import "./testimonial.css";
import logo from "../../images/Vector.svg";

export const TestimonialsSection = () => {
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

  return (
    <div className="testimonials-section">
        <h3>Testimonials</h3>
        <div className="testimonials-container">
            <img src={logo} alt="logo" className="logo-icon" />
            <div className="testimonials-container">
                {testimonials.map((testimonial, index) => (
                <TestimonialCard name={testimonial.name} designation={testimonial.designation} message={testimonial.message} />
                ))}
            </div>
        </div>
    </div>
  );
};