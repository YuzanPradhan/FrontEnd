// src/App.tsx
import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Overview from "./components/Overview/Overview";
import ReviewCycle from "./components/ReviewCycle/ReviewCycle";
import ReviewDashboard from "./components/ReviewDashboard/ReviewDashboard";
import "./App.css"; // Import the custom CSS

const App: React.FC = () => {
  const reviewCycleData = {
    title: "Year End Review 2023",
    startDate: "Dec 29, 2023",
    endDate: "Feb 29, 2024",
    progress: 85,
    status: "Active" as const,
  };

  const reviewers = [
    {
      id: "1",
      letter: "A",
      type: "Anonymous Reviewer",
      department: "Backend",
      status: "Approved" as const,
      accepted: true,
    },
    {
      id: "2",
      letter: "B",
      type: "Anonymous Reviewer",
      department: "Mobile",
      status: "Approved" as const,
      accepted: true,
    },
    {
      id: "3",
      letter: "C",
      type: "Anonymous Reviewer",
      department: "Data",
      status: "Pending" as const,
      accepted: false,
    },
  ];

  return (
    <div className="app-container">
      <Sidebar />
      <main className="app-main">
        <div className="flex-1">
          <Overview
            name="John"
            completionRate={85}
            peerReviews="3/3"
            days={14}
          />
          <ReviewCycle cycle={reviewCycleData} />

          <ReviewDashboard reviewers={reviewers} />
        </div>
      </main>
    </div>
  );
};

export default App;
