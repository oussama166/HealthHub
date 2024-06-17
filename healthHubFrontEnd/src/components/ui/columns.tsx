import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { Button } from "./button";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Schedule = {
  id: number;
  title: string;
  date: string;
  startTime: string;
  endTime: string;
  location: string;
  description: string;
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
    header: ({column})=>{
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
    header: ({column})=>{
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
  },
  {
    accessorKey: "description",
    header: "Description",
  },
];
