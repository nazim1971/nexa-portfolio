"use client"
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useGetAllProjectsQuery, useGetProjectByIdQuery, useUpdateProjectMutation } from "@/redux/features/admin/project/projectApi";
import { uploadImage } from "@/hooks/uploadImage";
import { zodResolver } from "@hookform/resolvers/zod";
import {  useForm } from "react-hook-form";
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

// Project Schema Validation with Zod (image is optional)
const projectSchema = z.object({
  name: z.string().min(3, "Name is required"),
  title: z.string().min(3, "Title is required"),
  description: z.string().min(1, "Description must be at least 1 character"),
  liveLink: z.string().url("Invalid URL"),
  clientLink: z.string().url("Invalid URL"),
  serverLink: z.string().url("Invalid URL"),
  image: z.any().optional(), // Make image optional
});

type TProject = z.infer<typeof projectSchema>;

const UpdateProject = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const projectId = searchParams.get("id") || "";

  const { data: projectData, isLoading: loadingProject } =
    useGetProjectByIdQuery(projectId || "");
  const project = projectData?.data;
  const [updateProject, { isLoading: updating }] = useUpdateProjectMutation();
  const {refetch} = useGetAllProjectsQuery({});

  const form = useForm<TProject>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      name: project?.name ?? "", // Set default values from project prop
      title: project?.title ?? "",
      description: project?.description ?? "",
      liveLink: project?.liveLink ?? "",
      clientLink: project?.clientLink ?? "",
      serverLink: project?.serverLink ?? "",
      image: project?.image ?? "",
    },
  });

  // Populate form with existing project data
  useEffect(() => {
    if (project) {
      form.reset({
        name: project.name,
        title: project.title,
        description: project.description,
        liveLink: project.liveLink,
        clientLink: project.clientLink,
        serverLink: project.serverLink,
      });
    }
  }, [project, form]);

  const onSubmit = async (data: TProject) => {
    try {
      let imageUrl = project?.image; // Keep existing image if not updated

      if (data.image && data.image !== project?.image) {
        try {
          imageUrl = await uploadImage(data.image); // Ensure it's a File type
        } catch (error) {
          console.error("Error uploading image:", error);
          return;
        }
      }

      const updatedProject = { ...data, image: imageUrl };
      console.log("Before", updatedProject);
      const res = await updateProject({
        id: projectId,
        updatedProject: updatedProject,
      }).unwrap();

      console.log("After:", res);
      refetch();
      router.push("/projects"); // Redirect after update
    } catch (err) {
      console.error("Error updating project:", err);
    }
  };

  if (loadingProject) return <div>Loading project...</div>;

  return (
    <div className="p-4 md:p-0">
      <h1 className="text-3xl text-center mb-6">Update Project</h1>
      <div className="flex justify-center h-screen w-[90%] mx-auto">
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
                      onChange={(e) =>
                        field.onChange(e.target.files?.[0] || null)
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              className="mt-4 flex items-center gap-2"
              type="submit"
              disabled={updating}
            >
              {updating ? (
                <div className="flex items-center gap-2">
                  <span>Updating...</span>
                </div>
              ) : (
                "Update Project"
              )}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default UpdateProject;
