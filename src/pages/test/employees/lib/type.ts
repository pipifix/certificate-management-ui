export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  department: string;
  location: string;
  joinDate: string;
  bio: string;
  skills: string[];
  projects: string[];
}

// Add Promise status types for the use hook
declare global {
  interface Promise<T> {
    status?: 'pending' | 'fulfilled' | 'rejected';
    value?: T;
    reason?: any;
  }
}