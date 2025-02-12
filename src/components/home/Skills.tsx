import { BiLogoJavascript } from "react-icons/bi";
import { DiMongodb } from "react-icons/di";
import { FaCpanel, FaGitAlt, FaGithub, FaWindows, FaWordpress } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { IoLogoFirebase, IoLogoVercel } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiAntdesign, SiPostgresql, SiShadcnui } from "react-icons/si";
import {
  SiExpress,
  SiMysql,
  SiNodedotjs,
  SiPostman,
  SiTypescript,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

const skillsData = [
  { icon: <BiLogoJavascript />, color: 'text-yellow-500', name: 'JavaScript' },
  { icon: <SiTypescript />, color: 'text-blue-500', name: 'TypeScript' },
  { icon: <FaReact />, color: 'text-cyan-500', name: 'React.js' },
  { icon: <RiNextjsFill />, color: 'text-black', name: 'Next.js' },
  { icon: <SiExpress />, color: 'text-black', name: 'Express.js' },
  { icon: <SiNodedotjs />, color: 'text-green-700', name: 'Node.js' },
  { icon: <FaWordpress />, color: 'text-blue-500', name: 'WordPress' },
  { icon: <FaGitAlt />, color: 'text-orange-700', name: 'Git' },
  { icon: <FaGithub />, color: 'text-black', name: 'GitHub' },
  { icon: <IoLogoFirebase />, color: 'text-yellow-600', name: 'Firebase' },
  { icon: <RiTailwindCssFill />, color: 'text-blue-500', name: 'TailwindCSS' },
  { icon: <SiAntdesign />, color: 'text-red-600', name: 'Ant Design' },
  { icon: <SiShadcnui />, color: 'text-black', name: 'shadcn-ui' },
  { icon: <DiMongodb />, color: 'text-green-500', name: 'MongoDB' },
  { icon: <SiMysql />, color: 'text-blue-500', name: 'MySQL' },
  { icon: <SiPostgresql />, color: 'text-blue-700', name: 'PostgreSQL' },
];

const toolsData = [
  { icon: <FaWindows />, color: 'text-blue-600', name: 'Windows' },
  { icon: <VscVscode />, color: 'text-blue-600', name: 'VS Code' },
  { icon: <SiPostman />, color: 'text-orange-600', name: 'Postman' },
  { icon: <IoLogoVercel />, color: 'text-black', name: 'Vercel' },
  { icon: <FaCpanel />, color: 'text-orange-600', name: 'cPanel' },
];

const Skills = () => {
  return (
    <div className="my-20">
      {/* Professional Skillset */}
      <div className="text-4xl text-center font-semibold my-20">
        Professional <span className="text-[#00ABF0]">Skillset</span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 px-8">
        {skillsData.map((skill, index) => (
          <CardContainer key={index} className="group">
            <CardBody
              className={`border font-semibold bg-white ${skill.color} md:p-8 p-4 rounded-lg hover:shadow-lg dark:bg-gray-100 dark:border-gray-700 dark:hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center text-5xl group-hover:shadow-xl`}
            >
              <CardItem translateZ="50" className="text-5xl">
                {skill.icon}
              </CardItem>
              <CardItem
                translateZ="100"
                className="mt-4 text-lg text-neutral-600 dark:text-neutral-300"
              >
                {skill.name}
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>

      {/* Tools I Use */}
      <div className="text-4xl text-center font-semibold my-32">
        <span className="text-[#00ABF0]">Tools</span> I Use
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 px-8 ">
        {toolsData.map((tool, index) => (
          <CardContainer key={index} className="group">
            <CardBody
              className={`border font-semibold bg-white ${tool.color} md:p-8 p-4 rounded-lg hover:shadow-lg dark:bg-gray-100 dark:border-gray-700 dark:hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center text-5xl group-hover:shadow-xl`}
            >
              <CardItem translateZ="50" className="text-5xl">
                {tool.icon}
              </CardItem>
              <CardItem
                translateZ="100"
                className="mt-4 text-lg text-neutral-600 dark:text-neutral-300"
              >
                {tool.name}
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
};

export default Skills;
