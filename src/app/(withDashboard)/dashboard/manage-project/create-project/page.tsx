/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import { useAddProjectMutation } from "@/redux/features/admin/project/projectApi";
import { uploadImage } from "@/hooks/uploadImage";

// Project Schema Validation with Zod (make image optional)
const projectSchema = z.object({
  name: z.string().min(3, "Name is required"),
  title: z.string().min(3, "Title is required"),
  description: z
    .string()
    .min(1, "Description must be at least 1 characters"),
  liveLink: z.string().url("Invalid URL"),
  clientLink: z.string().url("Invalid URL"),
  serverLink: z.string().url("Invalid URL"),
  image: z.any().optional(),  // Make image optional and type 'any' for flexibility
});

type TProject = z.infer<typeof projectSchema>;

const CreateProject = () => {
  const [createProject, { isLoading }] = useAddProjectMutation();
  const router = useRouter();

  const form = useForm<TProject>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      name: "",
      title: "",
      description: "",
      liveLink: "",
      clientLink: "",
      serverLink: "",
      image: null,
    },
  });

  const onSubmit = async (data: TProject) => {
    try {
      let imageUrl = null;
      if (data.image) {
        console.log("Uploading image...");
        try {
          imageUrl = await uploadImage(data.image);
          console.log("Uploaded image URL:", imageUrl);
        } catch (error) {
          console.error("Error uploading image:", error);
          return;
        }
      }

      const projectInfo = { ...data, image: imageUrl };
      console.log("before", projectInfo);
      const res = await createProject(projectInfo).unwrap();
      console.log("after", res);
      form.reset();
      router.push("/projects");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="p-4 md:p-0">
      <h1 className="text-3xl text-center mb-6">Create Project</h1>
      <div className="flex justify-center h-screen w-[90%] mx-auto ">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Name:</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter project name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Title:</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter project title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description:</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter project description"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="liveLink"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Live Link:</FormLabel>
                  <FormControl>
                    <Input
                      type="url"
                      placeholder="Enter live site URL"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="clientLink"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Client Repository:</FormLabel>
                  <FormControl>
                    <Input
                      type="url"
                      placeholder="Enter client repo URL"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="serverLink"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Server Repository:</FormLabel>
                  <FormControl>
                    <Input
                      type="url"
                      placeholder="Enter server repo URL"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Image:</FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={(e) => field.onChange(e.target.files?.[0] || null)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              className="mt-4 flex items-center gap-2"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <span>Creating...</span>
                </div>
              ) : (
                "Create Project"
              )}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default CreateProject;
