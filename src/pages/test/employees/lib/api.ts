import { User } from "./type";

const mockUsers = [
  {
    id: 1,
    name: "Sarah Wilson",
    email: "sarah.wilson@example.com",
    role: "Product Manager",
    department: "Product",
    location: "New York",
    joinDate: "2023-01-15",
    bio: "Experienced product manager with a passion for user-centric design and agile methodologies. Led multiple successful product launches.",
    skills: ["Product Strategy", "Agile", "User Research", "Roadmapping"],
    projects: ["Mobile App Redesign", "Customer Portal", "Analytics Dashboard"]
  },
  {
    id: 2,
    name: "James Chen",
    email: "james.chen@example.com",
    role: "Senior Developer",
    department: "Engineering",
    location: "San Francisco",
    joinDate: "2022-08-22",
    bio: "Full-stack developer specializing in React and Node.js. Passionate about clean code and performance optimization.",
    skills: ["React", "TypeScript", "Node.js", "AWS"],
    projects: ["API Gateway", "Authentication System", "Real-time Chat"]
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    email: "emma.r@example.com",
    role: "UX Designer",
    department: "Design",
    location: "London",
    joinDate: "2023-03-10",
    bio: "Creative UX designer focused on creating intuitive and accessible user experiences. Advocate for inclusive design practices.",
    skills: ["UI/UX", "Figma", "User Testing", "Accessibility"],
    projects: ["Design System", "Website Redesign", "Mobile App UI"]
  }
];

let usersPromise: Promise<User[]> | null = null;

export function getUsers(): Promise<User[]> {
  if (!usersPromise) {
    // Simulate API delay
    usersPromise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockUsers);
      }, 1000);
    });
  }
  return usersPromise;
}