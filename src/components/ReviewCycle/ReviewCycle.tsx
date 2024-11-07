// src/components/ReviewCycle/ReviewCycle.tsx
import React from "react";
import { ReviewCycle as ReviewCycleType } from "../../types/review";
import "./ReviewCycle.css";

const ReviewCycle: React.FC<{ cycle: ReviewCycleType }> = ({ cycle }) => {
  return (
    <div className="review-cycle-container">
      <h3 className="review-cycle-header">Current Review Cycle</h3>
      <div className="review-cycle-card">
        <div className="review-cycle-info">
          <div>
            <h4>{cycle.title}</h4>
            <p>
              {cycle.startDate} - {cycle.endDate}
            </p>
          </div>
          <span>{cycle.status}</span>
        </div>
        <div className="review-cycle-progress">
          <div
            className="review-cycle-progress-bar"
            style={{ width: `${cycle.progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default ReviewCycle;
