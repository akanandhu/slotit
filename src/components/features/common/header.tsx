"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SidebarTrigger } from "@/components/ui/sidebar";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white h-16 border border-solid border-l-0 px-6 py-3 flex items-center justify-between">
      <SidebarTrigger />
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-2 p-2 cursor-pointer rounded-md hover:bg-accent transition">
          <Avatar className="w-9 h-9">
            <AvatarImage src="/avatar.png" alt="User Profile" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="flex flex-col text-left">
            <span className="text-sm font-medium text-[#1D1F2C]">Jay Hargudson</span>
            <span className="text-xs font-medium text-gray-500">Manager</span>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48 mt-2 shadow-lg">
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem
            className="text-red-500"
            onClick={() => console.log("Logout")}
          >
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};
