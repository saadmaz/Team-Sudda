import t1 from "@/assets/team-1.jpg";
import t2 from "@/assets/team-2.jpg";
import t3 from "@/assets/team-3.jpg";
import t4 from "@/assets/team-4.jpg";
import t5 from "@/assets/team-5.jpg";
import t6 from "@/assets/team-6.jpg";

export interface TeamMember {
  id: number;
  img: string;
  name: string;
  role: string;
}

export const TEAM: TeamMember[] = [
  { id: 1, img: t1, name: "Nimal Perera", role: "Lead Cleaner" },
  { id: 2, img: t2, name: "Sanduni Fernando", role: "Operations Manager" },
  { id: 3, img: t3, name: "Kasun Silva", role: "Senior Supervisor" },
  { id: 4, img: t4, name: "Amaya Jayawardena", role: "Sanitization Specialist" },
  { id: 5, img: t5, name: "Ruwan Dissanayake", role: "Deep Cleaning Specialist" },
  { id: 6, img: t6, name: "Dilani Rathnayake", role: "Customer Coordinator" },
];
