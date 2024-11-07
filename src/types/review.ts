// src/types/review.ts
export interface Reviewer {
  id: string;
  letter: string;
  type: string;
  department: string;
  status: "Approved" | "Pending";
  accepted: boolean;
}

export interface ReviewCycle {
  title: string;
  startDate: string;
  endDate: string;
  progress: number;
  status: "Active" | "Completed";
}
