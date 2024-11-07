// src/components/ReviewDashboard/ReviewerCard.tsx
import React from "react";
import { Reviewer } from "../../types/review";
import "./ReviewDashboard.css";

const ReviewerCard: React.FC<{ reviewer: Reviewer }> = ({ reviewer }) => {
  return (
    <div className="reviewer-card">
      <div className="info">
        <div className="avatar">
          <span>{reviewer.letter}</span>
        </div>
        <div>
          <p>Anonymous Reviewer</p>
          <p className="department">{reviewer.department}</p>
        </div>
      </div>
      <div className="status-container">
        <span className={`reviewer-status ${reviewer.status.toLowerCase()}`}>
          {reviewer.status}
        </span>
        <span
          className={`reviewer-acceptance ${
            reviewer.accepted ? "accepted" : "awaiting"
          }`}
        >
          {reviewer.accepted ? "Accepted" : "Awaiting"}
        </span>
      </div>
    </div>
  );
};

export default ReviewerCard;
