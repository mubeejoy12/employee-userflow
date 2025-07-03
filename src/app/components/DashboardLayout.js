"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import InsertChartIcon from "@mui/icons-material/InsertChart";
import PersonIcon from "@mui/icons-material/Person";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import OutlinedFlagIcon from "@mui/icons-material/OutlinedFlag";
import Header from "./Header";

export default function DashboardLayout({ children }) {
  const pathname = usePathname();

  const navLinks = [
    {
      label: "Overview",
      href: "/overview",
      icon: <InsertChartIcon fontSize="small" />,
    },

    {
      label: "Attendance",
      href: "/attendance",
      icon: <AccessTimeIcon fontSize="small" />,
    },
    {
      label: "Leave Tracking",
      href: "/leave-tracking",
      icon: <CalendarMonthIcon fontSize="small" />,
    },
    {
      label: "Appraisal",
      href: "/appraisal",
      icon: <AnalyticsIcon fontSize="small" />,
    },
    {
      label: "Conduct",
      href: "/conduct",
      icon: <OutlinedFlagIcon fontSize="small" />,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Top Navigation Bar */}

      <Header />
      {/* Sidebar + Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Primary Sidebar */}

        <aside className="w-[104px] bg-[#2183C6] text-white flex flex-col justify-between items-center py-6 pt-20 fixed top-[54px] left-0 h-[calc(100vh-54px)] z-40">
          <Link
            href="/overview"
            className="bg-white w-[56px] h-[56px] flex items-center justify-center rounded-md"
          >
            <Image src="/Vector.png" alt="Home" width={20} height={18} />
          </Link>

          <div className="mb-4">
            <Image
              src="/setting-2.png"
              alt="Settings"
              width={24}
              height={24}
              className="opacity-70"
            />
          </div>
        </aside>
        {/* Secondary Sidebar */}
        <aside className="w-[150px] bg-white border-r border-gray-200 overflow-y-auto pt-20 fixed top-[54px] left-[104px] h-[calc(100vh-54px)] z-30 p-1">
          <h2 className="text-gray-700 text-sm font-semibold mb-4">HRIS</h2>
          <nav className="flex flex-col space-y-3 text-sm gap-4">
            {navLinks.map(({ href, label, icon }) => {
              const isActive =
                pathname === href || (href === "/overview" && pathname === "/");
              return (
                <Link
                  key={href}
                  href={href}
                  className={`flex items-center gap-2 px-3 py-2 rounded-md transition w-full ${
                    isActive
                      ? "bg-[#2183C6] text-white"
                      : "text-gray-800 hover:text-blue-600"
                  }`}
                >
                  {icon}
                  {label}
                </Link>
              );
            })}
          </nav>
        </aside>
        {/* Main Page Content */}
        <main className="ml-[230px] mt-[54px] p-6 flex-1 overflow-y-auto bg-white">
          {children}
        </main>
      </div>
    </div>
  );
}
