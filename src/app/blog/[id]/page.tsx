"use client"; // Mark the component as a client component

import { useGetBlogByIdQuery } from "@/redux/features/admin/blog/blogApi";
import Image from "next/image";
import { useParams } from "next/navigation";

const BlogDetailsPage = () => {
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
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Blog Title */}
        <h1 className="text-3xl sm:text-4xl font-semibold text-center sm:text-left">{blog?.title}</h1>

        {/* Blog Content and Image (Two-column layout) */}
        <div className="flex flex-col md:flex-row gap-10 my-6">
          {/* Blog Image (Left side) */}
          <div className="flex-1 relative w-full h-64 sm:h-96 mb-6 md:mb-0">
            <Image
              src={blog?.image || "/default-image.jpg"} // Fallback if no image is provided
              alt="Blog Image"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>

          {/* Blog Content (Right side) */}
          <div className="flex-1 space-y-4 bg-slate-100 p-4">
            {/* Category Section */}
            {blog?.category && (
              <div className="text-lg font-medium text-[#00ABF0]">
                <span>Category: {blog.category}</span>
              </div>
            )}

            {/* Blog Content */}
            <div className="text-black">
              <p>{blog?.content}</p>
            </div>
          </div>
        </div>

        {/* Back to Blogs Button (optional, add a link to go back to the list of blogs) */}
        <div className="text-center mt-10">
          <a
            href="/blogs"
            className="px-6 py-3 rounded-xl bg-[#00ABF0] text-white hover:bg-[#0087cc] text-lg font-semibold"
          >
            Back to Blogs
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsPage;
