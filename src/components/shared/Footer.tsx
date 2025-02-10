"use client"
import { motion } from "framer-motion";
import { AuroraBackground } from '../ui/aurora-background';
import { ShinyButton } from "../magicui/shiny-button";
import { MoveUpRightIcon } from "lucide-react";
const Footer = () => {
    return (
        <div>
              <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4 z-10"
      >
        <div className="text-2xl md:text-4xl font-bold dark:text-white text-center">
          Ready to take <span className="text-[#CBACF9] ">your</span> digital <br/> presence to the next level? 
        </div>
       
        <div className="font-extralight text-base md:text-xl dark:text-neutral-200 py-4">
        Reach out to me today and let's discuss how I can help you achieve your goals.
        </div>
        <ShinyButton className="rounded-full  ">Contact Me Now <MoveUpRightIcon/> </ShinyButton>
      </motion.div>
    </AuroraBackground>
        </div>
    );
};

export default Footer;