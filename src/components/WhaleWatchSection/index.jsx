import React from "react";
import EyeIcon from "../../images/Eye.svg";
import "./style.css";

export const WhaleWatchSection = () => {
  return (
    <div className="box" data-model-id="1:342-frame">
      <div className="group">
        <img
          className="cohorts"
          alt="Cohorts"
          src="https://c.animaapp.com/ma4arnhcoYeP2d/img/cohorts-1.svg"
        />
        <div className="content-wrapper">
          <div className="div">
            <div className="eye-icon-wrapper">
                <img
                    className="eye"
                    alt="Eye"
                    src="https://c.animaapp.com/ma4arnhcoYeP2d/img/eye.svg"
                />
            </div>
            <h2 className="whale-watch-section">Watch what the whales are doing</h2>
            <p className="text-wrapper">
              All whales are not equal. Know exactly what the whales impacting
              YOUR portfolio are doing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};