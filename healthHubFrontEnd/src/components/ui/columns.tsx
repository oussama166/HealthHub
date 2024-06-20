import { cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { Badge } from "./badge";
import { Button } from "./button";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Schedule = {
  id: number;
  title: string;
  date: string;
  startTime: string | Date | number;
  endTime: string;
  location: string;
  description: string;
};

export type scheduleConsultation = {
  id: number;
  name: string;
  date: string;
  startTime: string;
  endTime: string;
  phone: string;
  location: "office" | "online";
  state: "pending" | "approved" | "rejected";
};

export const columns: ColumnDef<Schedule>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "startTime",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Start Time
          <MoreHorizontal className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "endTime",
    header: "End Time",
  },
  {
    accessorKey: "location",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Location
          <MoreHorizontal className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="w-full flex items-center justify-center">
        <Badge
          className={cn(
            row.getValue("location") == "Office"
              ? "bg-green-500 hover:bg-green-600/80"
              : "bg-red-500 hover:bg-red-600/80",
            "font-semibold p-2 uppercase tracking-widest cursor-pointer"
          )}
        >
          {row.getValue("location")}
        </Badge>
      </div>
    ),
  },
  {
    accessorKey: "description",
    header: "Description",
  },
];

export const columnsConsultation: ColumnDef<scheduleConsultation>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "startTime",
    header: "Start Time",
  },
  {
    accessorKey: "endTime",
    header: "End Time",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  // {
  //   accessorKey: "location",
  //   header: "Location",
  //   cell: ({ row }) => (
  //     <div className="w-full flex items-center justify-center">
  //       <Badge
  //         className={cn(
  //           row.getValue("location") == "office"
  //             ? "bg-green-500 hover:bg-green-600/80"
  //             : "bg-red-500 hover:bg-red-600/80",
  //           "font-semibold p-2 uppercase tracking-widest cursor-pointer"
  //         )}
  //       >
  //         {row.getValue("location")}
  //       </Badge>
  //     </div>
  //   ),
  // },
  // {
  //   accessorKey: "state",
  //   header: "State",
  //   cell: ({ row }) => (
  //     <div className="w-full flex items-center justify-center">
  //       <Badge
  //         className={cn(
  //           row.getValue("state") == "approved"
  //             ? "bg-green-500 hover:bg-green-600/80"
  //             : row.getValue("state") == "pending"
  //             ? "bg-yellow-500 hover:bg-yellow-600/80"
  //             : "bg-red-500 hover:bg-red-600/80",
  //           "font-semibold p-2 uppercase tracking-widest cursor-pointer"
  //         )}
  //       >
  //         {row.getValue("state")}
  //       </Badge>
  //     </div>
  // ),
  // },
];
