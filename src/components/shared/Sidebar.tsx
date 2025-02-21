"use client";
import { useState } from "react";
import { FiX, FiChevronDown, FiChevronUp } from "react-icons/fi";
import Link from "next/link";
import { ModeToggle } from "../theme/ModeToggle";
import { UserProps } from "./Navbar";

type SidebarProps = {
  isOpen: boolean;
  closeSidebar: () => void;
  session: UserProps | null;
};

const Sidebar = ({ isOpen, closeSidebar, session }: SidebarProps) => {
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);

  const toggleDashboardLinks = () => {
    setIsDashboardOpen((prev) => !prev);
  };

  return (
    <div
      className={`fixed top-0 left-0 z-[500] w-64 h-full bg-white dark:bg-gray-900 shadow-lg transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="p-5">
        <button onClick={closeSidebar} className="text-gray-500 dark:text-gray-400 hover:text-teal-500 transition">
          <FiX className="text-2xl" />
        </button>
      </div>
      <div className="flex flex-col items-start gap-5 p-5">
        <ModeToggle />
        <Link href="/projects" onClick={closeSidebar} className="hover:text-teal-500 transition text-gray-500 dark:text-gray-400">
          Projects
        </Link>
        <Link href="/contact" onClick={closeSidebar} className="hover:text-teal-500 transition text-gray-500 dark:text-gray-400">
          Contact
        </Link>
        <Link href="/resume" onClick={closeSidebar} className="hover:text-teal-500 transition text-gray-500 dark:text-gray-400">
          Resume
        </Link>
        <Link href="/blog" onClick={closeSidebar} className="hover:text-teal-500 transition text-gray-500 dark:text-gray-400">
          Blog
        </Link>

        {session?.user && (
          <>
            {/* Dashboard Toggle */}
            <button
              onClick={toggleDashboardLinks}
              className="flex items-center justify-between w-full text-left hover:text-teal-500 transition text-gray-500 dark:text-gray-400"
            >
              <span>Dashboard</span>
              {isDashboardOpen ? <FiChevronUp /> : <FiChevronDown />}
            </button>

            {/* Smoothly expanding/collapsing Dashboard Links */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                isDashboardOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="pl-4 flex flex-col gap-3">
                <Link
                  href="/dashboard/manage-blog"
                  onClick={closeSidebar}
                  className="hover:text-teal-500 transition text-gray-500 dark:text-gray-400"
                >
                  Manage Blog
                </Link>
                <Link
                  href="/dashboard/manage-project"
                  onClick={closeSidebar}
                  className="hover:text-teal-500 transition text-gray-500 dark:text-gray-400"
                >
                  Manage Project
                </Link>
                <Link
                  href="/dashboard/manage-message"
                  onClick={closeSidebar}
                  className="hover:text-teal-500 transition text-gray-500 dark:text-gray-400"
                >
                  Manage Message
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
