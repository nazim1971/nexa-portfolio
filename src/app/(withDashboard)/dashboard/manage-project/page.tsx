/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React from "react";
import { FiEdit, FiTrash } from "react-icons/fi";
import { TProject } from "@/types/project.type";
import {
  useDeleteProjectMutation,
  useGetAllProjectsQuery,
} from "@/redux/features/admin/project/projectApi";
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

const ManageProjectPage = () => {
  const {
    data: allProjects,
    isLoading,
    error,
    refetch,
  } = useGetAllProjectsQuery({}); // Refetching projects after deletion
  const [deleteProject] = useDeleteProjectMutation();

  const handleDelete = async (id: string) => {
    try {
      await deleteProject(id); // Call the delete mutation
      toast.success("Project deleted successfully!"); // Show success toast
      refetch(); // Refetch the project list
    } catch (err) {
      toast.error("Failed to delete the project"); // Show error toast if deletion fails
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading projects</div>;
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-lg  md:text-2xl font-bold">This is Manage Project Page</h1>
        <Link
          href={"/dashboard/manage-project/create-project"}
          className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600 transition"
        >
          Create New Project
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allProjects?.data?.map((project: TProject) => (
          <div
            key={project._id}
            className="bg-white dark:bg-gray-800 p-6 shadow-md rounded-xl transition hover:shadow-lg"
          >
            <h2 className="text-xl font-semibold mb-2">{project.name}</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {project.description}
            </p>
            <div className="flex justify-between">
              <Link
                href={`/dashboard/manage-project/update-project?id=${project._id}`}
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
                      the project.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                      onClick={() => handleDelete(project._id as string)}
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

export default ManageProjectPage;
