"use client";

import { Input } from "@/components/ui/input";
import { Search as SearchIcon } from "lucide-react";

export const Search = () => {
  return (
    <div className="relative w-full max-w-md">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <SearchIcon className="h-4 w-4 text-gray-500" />
      </div>
      <Input
        type="search"
        placeholder="Search..."
        className="pl-10 w-full bg-white"
      />
    </div>
  );
};
