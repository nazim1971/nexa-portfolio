import { ModeToggle } from "../theme/ModeToggle";

// className="flex justify-between items-center gap-5 p-5 px-7 border border-[#04071D]  max-w-[450px] w-full mx-auto fixed z-10 left-0 right-0 top-5  rounded-3xl bg-[#04071D] bg-opacity-50 dark:text-white "

const Navbar = () => {

  
  return (
    <div className="">
      <div className="flex bg-white justify-between items-center gap-5 p-5 px-7 border border-[#04071D]  max-w-[450px] w-full mx-auto   rounded-3xl dark:bg-[#483e58de] bg-opacity-50 dark:text-white  fixed left-0 right-0 top-5 z-[100]">
        <p>Projects</p>
        <p>Contact</p>
        <p>Resume</p>
        <p>Blog</p>
        <ModeToggle/>
      </div>
    </div>
  );
};

export default Navbar;