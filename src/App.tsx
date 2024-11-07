// src/App.tsx
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Overview from "./components/Overview/Overview";
import ReviewCycle from "./components/ReviewCycle/ReviewCycle";
import ReviewDashboard from "./components/ReviewDashboard/ReviewDashboard";
import "./App.css";

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
      type: "Anonymous Reviewer", // Added 'type' property
      department: "Backend",
      status: "Approved",
      accepted: true,
    },
    {
      id: "2",
      letter: "B",
      type: "Anonymous Reviewer", // Added 'type' property
      department: "Mobile",
      status: "Approved",
      accepted: true,
    },
    {
      id: "3",
      letter: "C",
      type: "Anonymous Reviewer", // Added 'type' property
      department: "Data",
      status: "Pending",
      accepted: false,
    },
  ];

  return (
    <div className="app-container">
     
      <div className="app-main-container">
        <Sidebar />
        <main className="app-main"> 
          <Navbar />
          <Overview
            name="John"
            completionRate={85}
            peerReviews="3/3"
            days={14}
          />
          <ReviewCycle cycle={reviewCycleData} />
          <ReviewDashboard reviewers={reviewers} />
        </main>
      </div>
    </div>
  );
};

export default App;
