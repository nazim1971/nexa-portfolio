import Link from 'next/link';
import Image from 'next/image';
import { CardBody, CardContainer, CardItem } from '../ui/3d-card';
import { useGetAllProjectsQuery } from '@/redux/features/admin/project/projectApi';
import { TProject } from '@/types/project.type';



const Projects = () => {

  const { data: allProjects, isLoading, error } = useGetAllProjectsQuery({});


  if (isLoading) {
    return <div>Loading...</div>; // Show a loading indicator while data is being fetched
  }

  if (error) {
    return <div>Error:..........</div>; // Show an error message if there's an issue with fetching data
  }

  return (
    <div id="projects" className="text-slate-300 px-4 md:px-8 lg:px-10">
      <div className="text-center my-20 space-y-3">
        <p className="text-4xl font-semibold">
          My Recent <span className="text-[#00ABF0]">Works</span>
        </p>
        <h5>Here are a few projects I have worked on recently</h5>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 my-20">
        {allProjects?.data?.map((project: TProject) => (
          <CardContainer
            key={project._id}
            className="group relative bg-white rounded-3xl shadow-xl transform transition-transform duration-500 hover:scale-105 hover:shadow-xl "
          > 
            <CardBody
              className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-full rounded-xl p-6 border"
            >
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {project.name}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
               {project?.title}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4 h-[200px]">
                <Image
                  src={project?.image || "/fallback-image.jpg"}
                  height="200"
                  width="350"
                  className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-4">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href={project.liveLink}
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Preview
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  <Link href={`/projects/${project._id}`}>View Details</Link>
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
};

export default Projects;
