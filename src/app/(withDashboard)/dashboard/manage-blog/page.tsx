/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React from "react";
import { FiEdit, FiTrash } from "react-icons/fi";
import Link from "next/link";
import { toast } from "sonner"; // Import toast from sonner
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import { useDeleteBlogMutation, useGetAllBlogQuery } from "@/redux/features/admin/blog/blogApi";
import { TBlog } from "@/types/blog.types";

const ManageBlogPage = () => {

  const {
    data: allBlogs,
    isLoading,
    error,
    refetch,
  } = useGetAllBlogQuery({}); // Refetching blogs after deletion
  const [deleteBlog] = useDeleteBlogMutation();

  const handleDelete = async (id: string) => {
    try {
      await deleteBlog(id); // Call the delete mutation
      toast.success("Blog deleted successfully!"); // Show success toast
      refetch(); // Refetch the Blog list
    } catch (err) {
      toast.error("Failed to delete the Blog"); // Show error toast if deletion fails
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading blogs</div>;
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-lg  md:text-2xl font-bold">This is Manage Blog Page</h1>
        <Link
          href={"/dashboard/manage-blog/create-blog"}
          className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600 transition"
        >
          Create New blog
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allBlogs?.data?.map((blog: TBlog) => (
          <div
            key={blog._id}
            className="bg-white dark:bg-gray-800 p-6 shadow-md rounded-xl transition hover:shadow-lg"
          >
            <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {blog.content}
            </p>
            <div className="flex justify-between">
              <Link
                href={`/dashboard/manage-blog/update-blog?id=${blog._id}`}
                className="text-blue-500 hover:text-blue-700 flex items-center gap-2"
              >
                <FiEdit /> Update
              </Link>

              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <button className="text-red-500 hover:text-red-700 flex items-center gap-2">
                    <FiTrash /> Delete
                  </button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete
                      the blog.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                      onClick={() => handleDelete(blog._id as string)}
                    >
                      Confirm
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageBlogPage;