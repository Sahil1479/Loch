import React from "react";
import "./style.css";

export const SignUpSection = ({props}) => {
    const { email, setEmail, handleSubmit, error } = props;

    return (
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
    );
};
