"use client";

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { TMessage } from "@/types/message.types";
import { useAddMessageMutation, useGetAllMessagesQuery } from "@/redux/features/admin/message/messageApi";

// Validation schema using zod
const contactFormSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(1, { message: "Subject is required" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" }),
});

const ContactPage = () => {
  const router = useRouter();

  // useForm hook with zod resolver for validation
  const form = useForm({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      subject: "",
    },
  });

  // useAddMessageMutation hook from Redux
  const [addMessage, { isLoading }] = useAddMessageMutation();
  const { refetch } = useGetAllMessagesQuery({});

  // Function to handle form submission
  const onSubmit = async (data: TMessage) => {
    try {
      await addMessage(data).unwrap();
      refetch()
      toast.success("Message sent successfully!");
      router.push("/"); // Redirect to home page after success
    } catch (error) {
      toast.error("Failed to send message. Try again!");
      console.error(error);
    }
  };

  return (
    <div className="px-4 md:px-8 lg:px-10">
      <div className="max-w-xl mx-auto p-5 my-10 md:my-20 bg-gray-100 dark:bg-gray-900 rounded-lg">
        <h1 className="text-2xl font-bold text-center mb-8 dark:text-white mt-8">
          Contact Us
        </h1>

        {/* FormProvider wraps the entire form and passes the form context */}
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Name Field */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email Field */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="you@example.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Subject Field */}
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subject</FormLabel>
                  <FormControl>
                    <Input placeholder="Subject of your message" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Message Field */}
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <textarea
                      className="w-full p-2 border rounded-md dark:bg-gray-800 dark:text-white"
                      placeholder="Your message"
                      rows={4}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center justify-center gap-2"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin" /> Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default ContactPage;
