"use client"
import { GithubIcon, LinkedinIcon, Mail, TwitterIcon } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import Link from "next/link";

const Find = () => {
    const email = 'nazimmuddin10@gmail.com'; 
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;

    const whatsappNumber = '+8801867748073'; 
    const whatsappLink = `https://wa.me/${whatsappNumber}`;

    return (
        <div className="my-40">
            <div className="text-center space-y-4">
                <p className="text-4xl font-semibold dark:text-white">FIND ME ON</p>
                <h4 className="dark:text-gray-300">Feel free to <span className="text-[#CBACF9]">connect</span> with me</h4>
            </div>
            <div className="flex gap-6 justify-center mt-5 mb-10 text-2xl">
                <Link
                    className="bg-white border border-gray-300 dark:bg-gray-800 p-2 rounded-full text-black dark:text-white hover:scale-110 transition-transform hover:bg-gray-100 dark:hover:bg-gray-700"
                    target="blank"
                    href="https://github.com/nazim1971"
                >
                    <GithubIcon />
                </Link>
                <Link
                    className="bg-white border border-gray-300 dark:bg-gray-800 p-2 rounded-full text-[#0077B5] hover:scale-110 transition-transform hover:bg-gray-100 dark:hover:bg-gray-700"
                    target="blank"
                    href="https://www.linkedin.com/in/nazim1971/"
                >
                    <LinkedinIcon />
                </Link>
                <Link
                    className="bg-white border border-gray-300 dark:bg-gray-800 p-2 rounded-full text-[#1DA1F2] hover:scale-110 transition-transform hover:bg-gray-100 dark:hover:bg-gray-700"
                    target="blank"
                    href="https://x.com/_nazim1971"
                >
                    <TwitterIcon />
                </Link>
                <Link
                    className="bg-white border border-gray-300 dark:bg-gray-800 p-2 rounded-full text-[#D44638] hover:scale-110 transition-transform hover:bg-gray-100 dark:hover:bg-gray-700"
                    target="blank"
                    href={gmailLink}
                >
                    <Mail />
                </Link>
                <Link
                    className="bg-white border border-gray-300 dark:bg-gray-800 p-2 rounded-full text-[#25D366] hover:scale-110 transition-transform hover:bg-gray-100 dark:hover:bg-gray-700"
                    target="blank"
                    href={whatsappLink}
                >
                    <FaWhatsapp />
                </Link>
            </div>
        </div>
    );
};

export default Find;
