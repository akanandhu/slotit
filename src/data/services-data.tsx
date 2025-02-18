"use client";
import dayjs from "dayjs";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Edit, Trash } from "lucide-react";

export type AppointmentData = {
  id: string;
  service: {
    image: string;
    name: string;
    description: string;
  };
  gender: "Male" | "Female";
  room: string;
  charge: number;
  salePrice: number;
  duration: number; // in minutes
  date: string;
};

export const serviceData: AppointmentData[] = [
  {
    id: "1",
    service: {
      image: "/images/service1.jpg",
      name: "Hair Cutting",
      description: "Hair cutting",
    },
    gender: "Male",
    room: "Room 1",
    charge: 2000,
    salePrice: 1500,
    duration: 60,
    date: dayjs("2025-02-18").format("DD/MM/YYYY"),
  },
  {
    id: "2",
    service: {
      image: "/images/service2.jpg",
      name: "Facial Treatment",
      description: "Cleansing and facial treatment.",
    },
    gender: "Female",
    room: "Room 2",
    charge: 2500,
    salePrice: 1800,
    duration: 45,
    date: dayjs("2025-02-18").format("DD/MM/YYYY"),
  },
];

export const columns: ColumnDef<AppointmentData>[] = [
  {
    accessorKey: "service",
    header: () => <div className="font-semibold text-gray-700">Service</div>,
    cell: ({ row }) => {
      const { image, name, description } = row.original.service;
      return (
        <div className="flex items-center gap-3">
          <Image
            src={image}
            alt={name}
            width={40}
            height={40}
            className="rounded-md"
          />
          <div>
            <div className="font-medium">{name}</div>
            <div className="text-sm text-gray-500">{description}</div>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "gender",
    header: () => (
      <div className="font-semibold text-gray-700 text-center">Gender</div>
    ),
    cell: ({ row }) => <div className="text-center">{row.original.gender}</div>,
  },
  {
    accessorKey: "room",
    header: () => (
      <div className="font-semibold text-gray-700 text-center">Room</div>
    ),
    cell: ({ row }) => <div className="text-center">{row.original.room}</div>,
  },
  {
    accessorKey: "charge",
    header: () => (
      <div className="font-semibold text-gray-700 text-center">Charge</div>
    ),
    cell: ({ row }) => {
      const formatted = new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
      }).format(row.original.charge);
      return <div className="text-center font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "salePrice",
    header: () => (
      <div className="font-semibold text-gray-700 text-center">Sale Price</div>
    ),
    cell: ({ row }) => {
      const formatted = new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
      }).format(row.original.salePrice);
      return <div className="text-center font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "duration",
    header: () => (
      <div className="font-semibold text-gray-700 text-center">Duration</div>
    ),
    cell: ({ row }) => (
      <div className="text-center">{row.original.duration} min</div>
    ),
  },
  {
    accessorKey: "actions",
    header: () => (
      <div className="font-semibold text-gray-700 text-center">Actions</div>
    ),
    cell: ({}) => (
      <div className="flex justify-center gap-2">
        <Button variant={"outline"} rounded={"md"}>
          <Edit />
        </Button>
        <Button variant={"outline"} rounded={"md"}>
          <Trash color="#ff0033" />
        </Button>
      </div>
    ),
  },
];
