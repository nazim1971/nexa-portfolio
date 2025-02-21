import { ShinyButton } from "../magicui/shiny-button";


const Resume = () => {
    return (
        <div id="resume">
            <h1 className="text-center my-8"> 
              <a
                          href="https://drive.usercontent.google.com/u/0/uc?id=1DrNuSNodw7TRKbKq9AY_OKnqs3mlqwrE&export=download"
                          download="Software_developer_resume_of_Md_Nazim_Uddin.pdf" 
                          aria-label="Download Md. Nazim Uddin's Resume"
                        >
                          <ShinyButton className="rounded-full">
                            Download <span className="text-TPrimary">Resume</span>
                          </ShinyButton>
                        </a>
            </h1>
            <iframe 
            className="mx-auto w-[90%] h-[510px] md:h-[780px]"
                src="https://drive.google.com/file/d/1DrNuSNodw7TRKbKq9AY_OKnqs3mlqwrE/preview" 
                allow="autoplay"
                title="Resume"
            ></iframe>
            <div className="text-center my-8">
           <a
                       href="https://drive.usercontent.google.com/u/0/uc?id=1DrNuSNodw7TRKbKq9AY_OKnqs3mlqwrE&export=download"
                       download="Software_developer_resume_of_Md_Nazim_Uddin.pdf" 
                       aria-label="Download Md. Nazim Uddin's Resume"
                     >
                       <ShinyButton className="rounded-full">
                         Download <span className="text-TPrimary">Resume</span>
                       </ShinyButton>
                     </a>
            </div>
        </div>
    );
};

export default Resume;
