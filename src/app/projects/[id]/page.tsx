"use client";
import Image from "next/image";
import Link from "next/link";
import { useGetProjectByIdQuery } from "@/redux/features/admin/project/projectApi";
import { useParams } from "next/navigation";

const ProjectDetailsPage = () => {
  const { id } = useParams();

  // Fetch project details using the ID from the URL
  const { data: projectData, isLoading, error } = useGetProjectByIdQuery(id as string);
  const project = projectData?.data;

  if (isLoading) {
    return <div>Loading...</div>; // Show loading state if project data is not available yet
  }

  if (error || !project) {
    return <div>Error loading project details</div>; // Error handling if fetching fails
  }

  return (
    <div id="project-details" className="text-slate-300 px-4 md:px-8 lg:px-10">
      <div className="text-center my-20 space-y-3">
        <p className="text-4xl font-semibold">{project.name}</p>
        <h5>{project.description}</h5>
      </div>

      <div className="my-20">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Project image */}
          <div className="flex-1">
            <Image
              src={project?.image || "/fallback-image.jpg"} // Use the project image or a fallback
              alt="Project Image"
              width={600}
              height={400}
              className="rounded-xl object-cover"
            />
          </div>

          {/* Project details */}
          <div className="flex-1 bg-slate-100 p-4 rounded-xl">
            <h3 className="text-2xl font-semibold">Project Details</h3>
            <div className="mt-6 space-y-4 ">
              {/* View Live Project Button */}
              {project.liveLink && (
                <Link
                  href={project.liveLink}
                  target="_blank"
                  className="block text-center px-6 py-3 rounded-xl bg-[#00ABF0] text-white hover:bg-[#0087cc]"
                >
                  View Live Project
                </Link>
              )}

              {/* View Server Project Button */}
              {project.serverLink && (
                <Link
                  href={project.serverLink}
                  target="_blank"
                  className="block text-center px-6 py-3 rounded-xl bg-[#F08080] text-white hover:bg-[#d96d6d]"
                >
                  View Server Code
                </Link>
              )}

              {/* View Client Project Button */}
              {project.clientLink && (
                <Link
                  href={project.clientLink}
                  target="_blank"
                  className="block text-center px-6 py-3 rounded-xl bg-[#4CAF50] text-white hover:bg-[#388e3c]"
                >
                  View Client Code
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Back to Projects list */}
      <div className="text-center mt-10">
        <Link
          href="/projects"
          className="text-[#00ABF0] text-lg font-semibold hover:underline"
        >
          Go Back to All Projects
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
