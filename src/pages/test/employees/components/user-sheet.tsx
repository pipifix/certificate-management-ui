import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { User } from "../lib/type";
import { userSchema, type UserFormData } from "../lib/schema";

interface UserSheetProps {
  user: User | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onUserUpdate: (updatedUser: User) => void;
}

export function UserSheet({ user, open, onOpenChange, onUserUpdate }: UserSheetProps) {
  const [isEditing, setIsEditing] = useState(false);
  
  const form = useForm<UserFormData>({
    resolver: zodResolver(userSchema),
    defaultValues: user || undefined,
  });

  const { isDirty } = form.formState;

  if (!user) return null;

  const onSubmit = async (data: UserFormData) => {
    try {
      const response = await fetch(`/src/data/users.json`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Failed to update user');

      onUserUpdate(data);
      setIsEditing(false);
      toast.success("User updated successfully");
    } catch (error) {
      toast.error("Failed to update user");
    }
  };

  const handleEdit = () => {
    form.reset(user);
    setIsEditing(true);
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-[600px] sm:w-[900px]">
        <SheetHeader className="flex flex-row justify-between items-center pr-6">
          <SheetTitle className="text-2xl">{user.name}</SheetTitle>
          {!isEditing && (
            <Button onClick={handleEdit}>
              Edit
            </Button>
          )}
        </SheetHeader>
        
        <ScrollArea className="h-[calc(100vh-8rem)] pr-4">
          {isEditing ? (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="role"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Role</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="department"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Department</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Location</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="bio"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Bio</FormLabel>
                      <FormControl>
                        <Textarea {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="skills"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Skills (comma-separated)</FormLabel>
                      <FormControl>
                        <Input {...field} value={field.value.join(", ")} 
                          onChange={e => field.onChange(e.target.value.split(",").map(s => s.trim()))} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="projects"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Projects (comma-separated)</FormLabel>
                      <FormControl>
                        <Input {...field} value={field.value.join(", ")}
                          onChange={e => field.onChange(e.target.value.split(",").map(s => s.trim()))} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex justify-end space-x-4">
                  <Button variant="outline" onClick={() => setIsEditing(false)}>
                    Cancel
                  </Button>
                  <Button type="submit" disabled={!isDirty}>
                    Save Changes
                  </Button>
                </div>
              </form>
            </Form>
          ) : (
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold mb-2">Contact</h3>
                <p className="text-sm text-muted-foreground">{user.email}</p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Role & Department</h3>
                <p className="text-sm text-muted-foreground">{user.role} • {user.department}</p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-sm text-muted-foreground">{user.location}</p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Bio</h3>
                <p className="text-sm text-muted-foreground">{user.bio}</p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {user.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Projects</h3>
                <ul className="list-disc list-inside text-sm text-muted-foreground">
                  {user.projects.map((project) => (
                    <li key={project}>{project}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}