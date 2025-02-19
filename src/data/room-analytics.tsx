"use client";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";

export type RoomData = {
  id: string;
  image: string;
  title: string;
  description: string;
  earnings: number;
  earningsPercentage: number;
  bookings: number;
};

export const roomData: RoomData[] = [
  {
    id: "room-1",
    image: "/images/room1.jpg",
    title: "Room 1",
    description: "Description",
    earnings: 50000,
    earningsPercentage: 80,
    bookings: 15,
  },
  {
    id: "room-2",
    image: "/images/room1.jpg",
    title: "Room 2",
    description: "Description",
    earnings: 35000,
    earningsPercentage: 60,
    bookings: 10,
  },
  {
    id: "room-3",
    image: "/images/room1.jpg",
    title: "Room 3",
    description: "Description",
    earnings: 20000,
    earningsPercentage: 40,
    bookings: 8,
  },
];

export const columns: ColumnDef<RoomData>[] = [
  {
    accessorKey: "room",
    header: () => <div className="font-semibold text-gray-700">Rooms</div>,
    cell: ({ row }) => {
      const { image, title, description } = row.original;
      return (
        <div className="flex items-center gap-3">
          <div className="relative w-[50px] h-[50px]">
            <Skeleton className="absolute inset-0 w-full h-full rounded-md" />
            <Image
              src={image}
              alt={title}
              width={50}
              height={50}
              className="rounded-md object-cover opacity-0 transition-opacity duration-300"
              loading="lazy"
              onLoadingComplete={(img) => img.classList.remove("opacity-0")}
            />
          </div>
          <div>
            <div className="font-medium">{title}</div>
            <div className="text-sm text-gray-500">{description}</div>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "earnings",
    header: () => <div className="font-semibold text-center text-gray-700">Earnings</div>,
    cell: ({ row }) => {
      const amount = row.original.earnings;
      const progress = row.original.earningsPercentage;
      const formatted = new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
      }).format(amount);

      return (
        <div className="w-40 flex flex-col md:flex-row items-center gap-4">
          <Progress value={progress} />
          <div className="text-sm font-medium mt-1">{formatted}</div>
        </div>
      );
    },
  },
  {
    accessorKey: "bookings",
    header: () => <div className="font-semibold text-gray-700 text-center">Bookings</div>,
    cell: ({ row }) => (
      <div className="font-medium text-center">{row.original.bookings}</div>
    ),
  },
];
