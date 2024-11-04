import { z } from "zod";

export const userSchema = z.object({
  id: z.number(),
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  role: z.string().min(2, "Role is required"),
  department: z.string().min(2, "Department is required"),
  location: z.string().min(2, "Location is required"),
  joinDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format"),
  bio: z.string().min(10, "Bio must be at least 10 characters"),
  skills: z.array(z.string()).min(1, "At least one skill is required"),
  projects: z.array(z.string()).min(1, "At least one project is required"),
});

export type UserFormData = z.infer<typeof userSchema>;