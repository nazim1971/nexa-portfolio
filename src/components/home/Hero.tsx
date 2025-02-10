import Image from "next/image";
import { BackgroundLines } from "../ui/background-lines";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";


const Hero = () => {


    const words = [
        { text: "I am a software developer" },
        { text: "I am a front-end developer" },
      ];

    return (
        <div className="">
            <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 h-auto">
                <Image height={300} width={300} className="rounded-full border"  alt="Nazim image" src={'https://res.cloudinary.com/dfvgxf4dc/image/upload/v1738593414/q2kogki4snnc6yicjtyl.png'} />
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-50 relative z-20 font-bold tracking-tight">
      I'm Md. Nazim Uddin
      </h2>
      <div className="flex flex-col items-center justify-center my-5 ">

      <TypewriterEffectSmooth words={words}  />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Join now
        </button>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Signup
        </button>
      </div>
    </div>

      <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
      As am a Web Developer specializing in scalable, responsive applications with a focus on performance and modular architecture. With experience on enterprise-level projects like Amazon, I optimize both front-end and back-end systems for seamless user experiences.
      </p>
    </BackgroundLines> 
        </div>
    );
};

export default Hero;