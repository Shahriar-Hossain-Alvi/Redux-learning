// import type { FormTaskType } from "./tasks.type";

import type { FormPriorityType, FormTaskType } from "@/redux/features/tasks/tasks.type";

export const TASK_STATUS: FormTaskType[] = ["pending", "in-progress", "done"];

export const STATUS_LABEL: Record<FormTaskType, string> = {
   pending: "Pending",
   "in-progress": "In Progress",
   done: "Done",
};


export const TASK_PRIORITY: FormPriorityType[] = ["high", "medium", "low"];

export const PRIORITY_LABEL: Record<FormPriorityType, string> = {
   high: "High",
   medium: "Medium",
   low: "Low",
};