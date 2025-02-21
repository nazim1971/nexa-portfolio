"use client";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { useGetAllBlogQuery } from "@/redux/features/admin/blog/blogApi";
import { TBlog } from "@/types/blog.types";
import Image from "next/image";
import Link from "next/link";


const BlogPage = () => {
  const { data: blogData } = useGetAllBlogQuery({});
  

  if (!blogData) {
    return <div>Loading...</div>; // Loading state if data isn't available
  }
  console.log(blogData);

  return (
    <div id="blogs" className="text-slate-300 px-4 md:px-8 lg:px-10">
      <div className="text-center my-20 space-y-3">
        <p className="text-4xl font-semibold">
          My Recent <span className="text-[#00ABF0]">Blogs</span>
        </p>
        <h5>Here are a few blogs I have written recently</h5>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 my-20">
        {blogData?.data?.map((blog: TBlog) => (
          <CardContainer
            key={blog._id}
            className="group relative bg-white rounded-3xl shadow-xl transform transition-transform duration-500 hover:scale-105 hover:shadow-xl"
          >
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-full rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {blog.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {blog.content.substring(0, 150)}...
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4 h-[200px]">
                <Image
                  src={blog.image || "https://res.cloudinary.com/dfvgxf4dc/image/upload/v1738594184/wnzcmf8jribbd6ywlccw.jpg"} // Use default image if no image exists
                  height={200}
                  width={350}
                  className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-4">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href={`/blog/${blog._id}`} // Link to individual blog details page
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Read More
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  <Link href={`/blog/${blog._id}`}>View Details</Link>
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
