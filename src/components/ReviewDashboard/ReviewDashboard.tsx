// src/components/ReviewDashboard/ReviewDashboard.tsx
import React from "react";
import ReviewerCard from "./ReviewerCard";
import { Reviewer } from "../../types/review";
import "./ReviewDashboard.css";

interface ReviewDashboardProps {
  reviewers: Reviewer[];
}

const ReviewDashboard: React.FC<ReviewDashboardProps> = ({ reviewers }) => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h3>Review Dashboard</h3>
        <div className="dashboard-buttons">
          <button className="button button-secondary">My Results</button>
          <button className="button button-secondary">Write Reviews</button>
          <button className="button button-secondary">Peer Nominations</button>
        </div>
      </div>
      <div>
        {reviewers.map((reviewer) => (
          <ReviewerCard key={reviewer.id} reviewer={reviewer} />
        ))}
      </div>
    </div>
  );
};

export default ReviewDashboard;
