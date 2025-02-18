'use client'
import dayjs from "dayjs";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";

export type AppointmentData = {
  id: string;
  time: string;
  customer: {
    name: string;
    phone: string;
    profilePic: string;
  };
  service: number;
  room: string;
  date: string;
  status: "Completed" | "Pending" | "Cancelled";
};

export const appointmentData: AppointmentData[] = [
  {
    id: "1",
    time: dayjs("2025-02-18T09:30:00").format("hh:mm A"),
    customer: {
      name: "Rahul Sharma",
      phone: "+91 98765 43210",
      profilePic: "/images/user1.jpg",
    },
    service: 1200,
    room: "Room 1",
    date: dayjs("2025-02-18").format("DD/MM/YYYY"),
    status: "Completed",
  },
  {
    id: "2",
    time: dayjs("2025-02-18T14:00:00").format("hh:mm A"),
    customer: {
      name: "Neha Gupta",
      phone: "+91 98765 67890",
      profilePic: "/images/user2.jpg",
    },
    service: 1800,
    room: "Room 2",
    date: dayjs("2025-02-18").format("DD/MM/YYYY"),
    status: "Pending",
  },
  {
    id: "3",
    time: dayjs("2025-02-19T11:15:00").format("hh:mm A"),
    customer: {
      name: "Amit Verma",
      phone: "+91 98765 12345",
      profilePic: "/images/user3.jpg",
    },
    service: 1500,
    room: "Room 3",
    date: dayjs("2025-02-19").format("DD/MM/YYYY"),
    status: "Cancelled",
  },
];

export const columns: ColumnDef<AppointmentData>[] = [
  {
    accessorKey: "time",
    header: () => <div className="font-semibold text-gray-700 ">Time</div>,
    cell: ({ row }) => <div className="font-medium">{row.original.time}</div>,
  },
  {
    accessorKey: "customer",
    header: () => <div className="font-semibold text-gray-700">Customer</div>,
    cell: ({ row }) => {
      const { name, phone, profilePic } = row.original.customer;
      return (
        <div className="flex items-center gap-3">
          <div className="relative w-[40px] h-[40px]">
            <Skeleton className="absolute inset-0 w-full h-full rounded-full" />
            <Image
              src={profilePic}
              alt={name}
              width={40}
              height={40}
              className="rounded-md h-10 w-12 object-cover opacity-0 transition-opacity duration-300"
              loading="lazy"
              onLoadingComplete={(img) => img.classList.remove("opacity-0")}
            />
          </div>
          <div>
            <div className="font-medium">{name}</div>
            <div className="text-sm text-gray-500">{phone}</div>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "service",
    header: () => (
      <div className="font-semibold text-gray-700 text-center">Service</div>
    ),
    cell: ({ row }) => {
      const formatted = new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
      }).format(row.original.service);
      return <div className="text-center font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "room",
    header: () => (
      <div className="font-semibold text-gray-700 text-center">Room</div>
    ),
    cell: ({ row }) => <div className="text-center">{row.original.room}</div>,
  },
  {
    accessorKey: "date",
    header: () => (
      <div className="font-semibold text-gray-700 text-center">Date</div>
    ),
    cell: ({ row }) => <div className="text-center">{row.original.date}</div>,
  },
  {
    accessorKey: "status",
    header: () => (
      <div className="font-semibold text-gray-700 text-center">Status</div>
    ),
    cell: ({ row }) => {
      const status = row.original.status;
     

      return (
        <div className="flex justify-center">
          <Badge variant={'default'}>
            {status}
          </Badge>
        </div>
      );
    },
  },
];
