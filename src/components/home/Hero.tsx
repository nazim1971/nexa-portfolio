import Image from "next/image";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

const Hero = () => {
  const words = [
    { text: "I am a software developer" },
    { text: "I am a front-end developer" },
  ];

  return (
    <div className="mt-20 md:mt-40 px-4">
      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card transition-transform duration-300 ease-in-out transform hover:scale-105 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-gray-900 dark:border-gray-700 border-gray-200 w-full sm:w-[30rem] h-auto rounded-xl p-6 border">
          <CardItem translateZ="100" className="mx-auto mt-4 h-[200px] w-[200px] sm:h-[250px] sm:w-[250px]">
            <Image
              height={250}
              width={250}
              className="rounded-full border object-cover transition-shadow duration-300 ease-in-out hover:shadow-xl dark:hover:shadow-emerald-500/[0.2]"
              alt="Nazim image"
              src={
                "https://res.cloudinary.com/dfvgxf4dc/image/upload/v1738593414/q2kogki4snnc6yicjtyl.png"
              }
            />
          </CardItem>
        </CardBody>
      </CardContainer>

      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl lg:text-4xl  font-sans py-2 md:py-5 relative z-20 font-bold tracking-tight">
        I'm Md. Nazim Uddin
      </h2>

      <div className="flex flex-col items-center justify-center my-5 space-y-4 ">
        <TypewriterEffectSmooth words={words} />
        <div className="flex space-x-4">
          <button className="w-40 h-10 rounded-xl bg-black text-white border border-transparent dark:border-white transition-all duration-300 ease-in-out hover:bg-gray-800 hover:shadow-lg dark:hover:bg-gray-700 text-sm">
            Join now
          </button>
          <button className="w-40 h-10 rounded-xl bg-white text-black border border-black text-sm transition-all duration-300 ease-in-out hover:bg-gray-100 dark:hover:bg-gray-800 dark:bg-gray-700 dark:text-white dark:border-gray-600 hover:shadow-lg">
            Signup
          </button>
        </div>
      </div>

      <p className="max-w-xl mx-auto text-center text-sm md:text-lg text-neutral-700 dark:text-neutral-400 px-4">
        As a Web Developer specializing in scalable, responsive applications
        with a focus on performance and modular architecture. With experience on
        enterprise-level projects like Amazon, I optimize both front-end and
        back-end systems for seamless user experiences.
      </p>
    </div>
  );
};

export default Hero;
