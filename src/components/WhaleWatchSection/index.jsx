import React from "react";
import EyeIcon from "../../images/Eye.svg";
import cohortImage from "../../images/Cohorts-image-cropped.svg";
import "./style.css";

export const WhaleWatchSection = () => {
  return (
    <div className="box">
      <div className="group">
        <img
          className="cohorts"
          alt="Cohorts"
          src={cohortImage}
        />
        <div className="content-wrapper">
          <div className="div">
            <div className="eye-icon-wrapper">
                <img
                    className="eye"
                    alt="Eye"
                    src={EyeIcon}
                />
            </div>
            <h2 className="whale-watch-header">Watch what the whales are doing</h2>
            <p className="whale-watch-description">
              All whales are not equal. Know exactly what the whales impacting
              YOUR portfolio are doing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};