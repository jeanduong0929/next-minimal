"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutIcon, SettingsIcon, UserIcon } from "lucide-react";

export const Sidebar = () => {
  const pathname = usePathname();
  const items = [
    {
      label: "Profile",
      href: "/profile",
      icon: <UserIcon className="w-5 h-5 mr-2" />,
    },
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: <LayoutIcon className="w-5 h-5 mr-2" />,
    },
    {
      label: "Settings",
      href: "/settings",
      icon: <SettingsIcon className="w-5 h-5 mr-2" />,
    },
  ];

  return (
    <div className="flex flex-col gap-2 min-w-[200px]">
      {items.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className={`
          flex items-center hover:bg-slate-200 rounded-md px-5 py-2
            ${pathname === item.href && "bg-slate-200"}
          `}
        >
          {item.icon}
          {item.label}
        </Link>
      ))}
    </div>
  );
};
