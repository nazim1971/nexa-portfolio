import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import Image from 'next/image';
import { CardBody, CardContainer, CardItem } from '../ui/3d-card';

const allProjects = [
  {
    _id: 1,
    project_name: 'Project One',
    logo: 'https://res.cloudinary.com/dfvgxf4dc/image/upload/v1738599156/rt5a9vu6lsewdfphyzvi.avif',
    live_link: 'https://google.com',
    client_link: 'https://github.com',
    server_link: 'https://github.com',
  },
  {
    _id: 2,
    project_name: 'Project Two',
    logo: 'https://res.cloudinary.com/dfvgxf4dc/image/upload/v1738599111/pytkaypz223zdhp7b62a.avif',
    live_link: 'https://google.com',
    client_link: 'https://github.com',
    server_link: 'https://github.com',
  },
  {
    _id: 3,
    project_name: 'Project Three',
    logo: 'https://res.cloudinary.com/dfvgxf4dc/image/upload/v1738598966/wpw32gg8slak40zv3zpe.webp',
    live_link: 'https://google.com',
    client_link: 'https://github.com',
    server_link: 'https://github.com',
  },
];

const Projects = () => {
  return (
    <div id="projects" className="text-slate-300">
      <div className="text-center my-20 space-y-3">
        <p className="text-4xl font-semibold">
          My Recent <span className="text-[#00ABF0]">Works</span>
        </p>
        <h5>Here are a few projects I've worked on recently</h5>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 my-20">
        {allProjects.map((project) => (
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
                {project.project_name}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Hover over this card to unleash the power of CSS perspective
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4 h-[200px]">
                <Image
                  src={project.logo}
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
                  href={project.live_link}
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
                  <Link href={`/projectDetails/${project._id}`}>View Details</Link>
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
