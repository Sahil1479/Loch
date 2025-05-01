import React, { useState } from "react";
import { NotificationSection } from "../../components/NotificationSection";
import { WhaleWatchSection } from "../../components/WhaleWatchSection";
import { TestimonialsSection } from "../../components/TestimonialsSection";
import { SignUpSection } from "../../components/SignUpSection";

export const Landing = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!email.includes("@") || !email.includes(".")) {
      setError("Please enter a valid email");
      return;
    }
    setError("");
    window.location.href = "https://app.loch.one/welcome";
  };

  return (
    <div className="landing-page">
      <div className="left-section">
        <NotificationSection />
        <WhaleWatchSection />
        <TestimonialsSection />
      </div>

      <div className="right-section">
        <SignUpSection props={{
            email,
            setEmail,
            handleSubmit,
            error,
        }} />
      </div>
    </div>
  );
};
