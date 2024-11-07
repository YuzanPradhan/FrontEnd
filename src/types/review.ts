// src/types/review.ts
export interface Reviewer {
  id: string;
  letter: string;
  type: string; // This property is required in each reviewer object
  department: string;
  status: string;
  accepted: boolean;
}

export interface ReviewCycle {
  title: string;
  startDate: string;
  endDate: string;
  progress: number;
  status: "Active" | "Completed";
}
