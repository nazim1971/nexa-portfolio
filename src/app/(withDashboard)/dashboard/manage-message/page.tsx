/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import React from 'react';
import { Trash } from 'lucide-react'; // Icon for delete button
import { TMessage } from '@/types/message.types';
import { useDeleteMessageMutation, useGetAllMessagesQuery } from '@/redux/features/admin/message/messageApi';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel, AlertDialogAction } from '@/components/ui/alert-dialog'; // Import Shadcn AlertDialog components
import { toast } from 'sonner';


const ManageMessagePage = () => {
  // Fetch messages using Redux query hook
  const { data: messages, isLoading, isError, refetch } = useGetAllMessagesQuery({});
  
  // Hook for deleting a message
  const [deleteMessage] = useDeleteMessageMutation();

  // Function to handle message deletion
  const handleDelete = async (id: string) => {
    try {
      await deleteMessage(id).unwrap();
      toast.success("Message deleted successfully!"); // Show success toast
      refetch(); // Refetch the message list
    } catch (error) {
      toast.error("Failed to delete the message"); // Show error toast if deletion fails
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading messages</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Manage Messages</h2>
      
      {/* Table for displaying messages */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Subject</TableHead>
            <TableHead>Message</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {messages?.data.map((message: TMessage) => (
            <TableRow key={message._id}>
              <TableCell>{message.name}</TableCell>
              <TableCell>{message.email}</TableCell>
              <TableCell>{message.subject}</TableCell>
              <TableCell>{message.message}</TableCell>
              <TableCell>
                {/* AlertDialog with delete confirmation */}
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <button className="text-red-500 hover:text-red-700 flex items-center gap-2">
                      <Trash size={20} />
                      Delete
                    </button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete the message.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction onClick={() => handleDelete(message._id as string)}>
                        Confirm
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ManageMessagePage;
