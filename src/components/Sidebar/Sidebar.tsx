// src/components/Sidebar/Sidebar.tsx
import React from "react";
import {
  Home,
  CheckSquare,
  Users,
  Award,
  MessageSquare,
  FileText,
} from "lucide-react";
import "./Sidebar.css";

const Sidebar: React.FC = () => {
  const menuItems = [
    { icon: Home, label: "Home" },
    { icon: CheckSquare, label: "Check-Ins" },
    { icon: Users, label: "1-on-1s" },
    { icon: Award, label: "High Fives" },
    { icon: MessageSquare, label: "Career Hub" },
    { icon: FileText, label: "Feedback" },
  ];

  return (
    <div className="sidebar-container">
      <div className="sidebar-header">
        <h2>15Five</h2>
        <p>Fusemachines</p>
      </div>
      <nav>
        {menuItems.map((item, index) => (
          <div key={index} className="nav-item">
            <item.icon size={20} />
            <span>{item.label}</span>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
