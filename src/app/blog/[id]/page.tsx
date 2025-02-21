/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"; // Mark the component as a client component

import { useGetBlogByIdQuery } from "@/redux/features/admin/blog/blogApi";
import Image from "next/image";
import { useParams } from "next/navigation";

const BlogDetailsPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = useParams();

  const { data: blogData, isLoading, error } = useGetBlogByIdQuery(id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading blog</div>;
  }

  const blog = blogData?.data;

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white min-h-screen p-4">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Blog Title */}
        <h1 className="text-4xl font-semibold">{blog?.title}</h1>
        {/* Blog Image */}
        <div className="relative w-full h-80 mb-6">
          <Image
            src={blog?.image || "/default-image.jpg"} // Fallback if no image is provided
            alt="Blog Image"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        {/* Blog Content */}
        <div className="prose dark:prose-invert">
          <p>{blog?.content}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsPage;
