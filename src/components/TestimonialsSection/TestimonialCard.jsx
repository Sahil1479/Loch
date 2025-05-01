import React from "react";
import "./TestimonialCard.css";

const TestimonialCard = ({name, designation, message}) => {
  return (
    <div className="testimonial-card">
      <p className="testimonial-author">
        <strong>{name}</strong>
        <span className="testimonial-role">{designation}</span>
      </p>
      <p className="testimonial-text">
        “{message}”
      </p>
    </div>
  );
};

export default TestimonialCard;
