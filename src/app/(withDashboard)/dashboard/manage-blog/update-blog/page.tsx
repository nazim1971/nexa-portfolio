"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRouter, useSearchParams } from "next/navigation";
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
import { Button } from "@/components/ui/button";
import { uploadImage } from "@/hooks/uploadImage";
import {
  useGetAllBlogQuery,
  useGetBlogByIdQuery,
  useUpdateBlogMutation,
} from "@/redux/features/admin/blog/blogApi";
import { toast } from "sonner";
import { useEffect } from "react";
import { Loader2 } from "lucide-react";

// Blog Schema Validation with Zod
const blogSchema = z.object({
  title: z.string().min(3, "Title is required"),
  content: z.string().min(1, "Content must be at least 1 character"),
  category: z.string().min(1, "Category is required"),
  image: z.any().optional(),
});

type TBlog = z.infer<typeof blogSchema>;

const UpdateBlog = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const blogId = searchParams.get("id") || "";
  const { refetch } = useGetAllBlogQuery({});
  const { data: blogData, isLoading: loadingBlog } =
    useGetBlogByIdQuery(blogId);
  const blog = blogData?.data;
  const [updateBlog, { isLoading: updating }] = useUpdateBlogMutation();

  const form = useForm<TBlog>({
    resolver: zodResolver(blogSchema),
    defaultValues: {
      title: blog?.title ?? "",
      content: blog?.content ?? "",
      category: blog?.category ?? "",
      image: blog?.image ?? "",
    },
  });

  // Populate form with existing project data
  useEffect(() => {
    if (blog) {
      form.reset({
        title: blog?.title,
        content: blog?.content,
        category: blog?.category,
        image: blog?.image,
      });
    }
  }, [blog, form]);

  const onSubmit = async (data: TBlog) => {
    try {
      let imageUrl = blog?.image;
      if (data.image && data.image !== blog?.image) {
        try {
          imageUrl = await uploadImage(data.image); // Ensure it's a File type
        } catch (error) {
          console.error("Error uploading image:", error);
          return;
        }
      }

      const updatedBlogInfo = { ...data, image: imageUrl };
      await updateBlog({
        id: blogId,
        blogData: updatedBlogInfo,
      }).unwrap();
      toast("Blog update successfully!");
      refetch();
      router.push(`/blog`);
    } catch (err) {
      toast("Failed to update blog. Try again!!");
      console.error(err);
    }
  };

  if(loadingBlog) return <Loader2/>

  return (
    <div className="p-4 md:p-0">
      <h1 className="text-3xl text-center mb-6">Update Blog</h1>
      <div className="flex justify-center h-screen w-[90%] mx-auto">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Blog Title:</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter blog title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Content:</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Enter blog content" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category:</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter blog category" {...field} />
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
                  <FormLabel>Blog Image:</FormLabel>
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
                  <Loader2/>
                </div>
              ) : (
                "Update Blog"
              )}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default UpdateBlog;
