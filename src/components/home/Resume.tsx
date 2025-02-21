

const Resume = () => {
    return (
        <div id="resume">
            <h1 className="text-center my-8"> 
               <a  href="https://drive.google.com/file/d/1DrNuSNodw7TRKbKq9AY_OKnqs3mlqwrE/view?usp=drive_link" 
                    download="Software_developer_resume_of_Md_Nazim_Uddin.pdf">
               <button className="p-3 hover:text-white hover:bg-slate-400 rounded-3xl bg-white text-black font-semibold">
                Download <span className="text-[#00ABF0] ">Resume</span>
                </button>
               </a>
            </h1>
            <iframe 
            className="mx-auto w-[90%] h-[510px] md:h-[780px]"
                src="https://drive.google.com/file/d/1DrNuSNodw7TRKbKq9AY_OKnqs3mlqwrE/preview" 
                allow="autoplay"
                title="Resume"
            ></iframe>
            <div className="text-center my-8">
            <a  href="https://drive.google.com/file/d/1DrNuSNodw7TRKbKq9AY_OKnqs3mlqwrE/view?usp=drive_link" 
                    download="Software_developer_resume_of_Md_Nazim_Uddin.pdf">
               <button className="p-3 hover:text-white hover:bg-slate-400 rounded-3xl bg-white text-black font-semibold">
                Download <span className="text-TPrimary ">Resume</span>
                </button>
               </a>
            </div>
        </div>
    );
};

export default Resume;
