import React, { useState } from "react";
import { NotificationSection } from "../../components/NotificationSection";
import { WhaleWatchSection } from "../../components/WhaleWatchSection";
import { TestimonialsSection } from "../../components/TestimonialsSection";

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
        <div className="signup-form">
          <h2>Sign up for exclusive access.</h2>
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleSubmit}>Get started</button>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <p>You'll receive an email with an invite link to join.</p>
        </div>
      </div>
    </div>
  );
};
