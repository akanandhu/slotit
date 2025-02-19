"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { Edit, MoreVertical, Trash } from "lucide-react";

export const StaffCard = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row justify-between space-y-0">
        <Checkbox className="w-5 h-5" />
        <div className="w-20  h-20 bg-[#E0E2E7] rounded-full"></div>
        <DropdownMenu>
          <DropdownMenuTrigger className="p-0 m-0" asChild>
            <Button variant="ghost" className=" p-0 w-5 h-5 flex items-start">
              <span className="sr-only">Open menu</span>
              <MoreVertical width={5} height={5} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>
              <Edit />
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem className="text-red-600">
              <Trash />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent className="text-center space-y-1">
        <h3 className="font-semibold text-lg leading-5">Mohammad Karim</h3>
        <h6>+91 9946126099</h6>
      </CardContent>
      <div className="py-3 mx-6">
        <Separator />
      </div>
      <CardFooter className="flex justify-center mt-2">
        <Badge>Active</Badge>
      </CardFooter>
    </Card>
  );
};
