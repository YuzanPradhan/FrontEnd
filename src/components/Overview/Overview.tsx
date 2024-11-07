// src/components/Overview/Overview.tsx
import React from "react";
import "./Overview.css";

interface OverviewProps {
  name: string;
  completionRate: number;
  peerReviews: string;
  days: number;
}

const Overview: React.FC<OverviewProps> = ({
  name,
  completionRate,
  peerReviews,
  days,
}) => {
  return (
    <div className="overview-container">
      <div className="overview-header">
        <div>
          <h2 className="name">Welcome back, {name}!</h2>
          <div className="buttons">
            <button className="button button-primary">View Guidelines</button>
            <button className="button button-primary">FAQs</button>
          </div>
        </div>
        <div className="overview-info">
          <div className="item">
            <div className="value">{peerReviews}</div>
            <div className="label">Peer Reviews</div>
          </div>
          <div className="item">
            <div className="value">{days}</div>
            <div className="label">Days</div>
          </div>
          <div className="item">
            <div className="value">{completionRate}%</div>
            <div className="label">Completion Rate</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
