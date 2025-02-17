"use client";
import dayjs from "dayjs";

import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";

export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
  customer: string;
  service: string;
  room: string;
  time: string;
};

export const payments: Payment[] = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
    customer: "John Doe",
    service: "Haircut",
    room: "Room 1",
    time: "2025-02-17T08:30:00Z",
  },
  {
    id: "489e1d42",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
    customer: "Jane Smith",
    service: "Massage",
    room: "Room 2",
    time: "2025-02-17T14:45:00Z",
  },
  {
    id: "562g3d12",
    amount: 200,
    status: "success",
    email: "customer@domain.com",
    customer: "Alice Brown",
    service: "Spa Treatment",
    room: "Room 3",
    time: "2025-02-17T18:00:00Z",
  },
];

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "time",
    header: () => <div className="font-semibold text-gray-700">Time</div>,
    cell: ({ row }) => {
      const formattedTime = dayjs(row.original.time).format("h:mm A");
      return <div>{formattedTime}</div>;
    },
  },
  {
    accessorKey: "customer",
    header: () => <div className="font-semibold text-gray-700">Customer</div>,
  },
  {
    accessorKey: "service",
    header: () => <div className="font-semibold text-gray-700">Service</div>,
  },
  {
    accessorKey: "amount",
    header: () => (
      <div className="text-right font-semibold text-gray-700">Amount</div>
    ),
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
      }).format(amount);
      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "room",
    header: () => <div className="font-semibold text-gray-700">Room</div>,
  },
  {
    accessorKey: "status",
    header: () => <div className="font-semibold text-gray-700">Status</div>,
    cell: ({ row }) => (
      <Badge variant="default">{row.getValue("status")}</Badge>
    ),
  },
  // {
  //   id: "actions",
  //   cell: ({ row }) => {
  //     const payment = row.original;
  //     return (
  //       <DropdownMenu>
  //         <DropdownMenuTrigger asChild>
  //           <Button variant="ghost" className="h-8 w-8 p-0">
  //             <span className="sr-only">Open menu</span>
  //             <MoreHorizontal className="h-4 w-4" />
  //           </Button>
  //         </DropdownMenuTrigger>
  //         <DropdownMenuContent align="end">
  //           <DropdownMenuLabel>Actions</DropdownMenuLabel>
  //           <DropdownMenuItem
  //             onClick={() => navigator.clipboard.writeText(payment.id)}
  //           >
  //             Copy payment ID
  //           </DropdownMenuItem>
  //           <DropdownMenuSeparator />
  //           <DropdownMenuItem>View customer</DropdownMenuItem>
  //           <DropdownMenuItem>View payment details</DropdownMenuItem>
  //         </DropdownMenuContent>
  //       </DropdownMenu>
  //     );
  //   },
  // },
];
