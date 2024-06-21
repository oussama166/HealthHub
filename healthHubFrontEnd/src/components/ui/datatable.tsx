import {
  ColumnDef,
  ColumnFiltersState,
  Row,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import { Button } from "./button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./dialog";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
  useInput = false,
  InputPlaceHolder,
  InputFiledSort,
  usePagination = false,
}:
  | DataTableProps<TData, TValue>
  | {
      useInput?: boolean;
      usePagination?: boolean;
      InputPlaceHolder?: string;
      InputFiledSort?: string;
    }) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  });

  return (
    <div className="rounded-md border w-full">
      {/* Place holder for search */}

      {/* Adding the input */}
      {useInput ? (
        <div className="flex items-center p-5">
          <Input
            placeholder={InputPlaceHolder}
            value={
              (table.getColumn(InputFiledSort)?.getFilterValue() as string) ??
              ""
            }
            onChange={(event) =>
              table
                .getColumn(InputFiledSort)
                ?.setFilterValue(event.target.value)
            }
            className="max-w-sm"
          />
        </div>
      ) : null}
      {/*  */}

      {/* Table */}
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <Dialog>
                    <DialogTrigger asChild>
                      <TableCell
                        key={cell.id}
                        className="text-base font-semibold cursor-pointer"
                        onClick={() => {
                          console.log(row.original);
                        }}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    </DialogTrigger>
                    <DialogContent>
                      <div className="max-w-[40vw] min-h-[40vh]">
                        <DialogHeader className="mb-5">
                          <DialogTitle className="text-xl">
                            {row.original.title}
                          </DialogTitle>
                          <DialogDescription>
                            {row.original.date} from {row.original.startTime} to{" "}
                            {row.original.endTime}
                          </DialogDescription>
                        </DialogHeader>

                        <BodyDialog row={row} />
                      </div>
                    </DialogContent>
                  </Dialog>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {/* Pagination */}
      <div className="flex items-center justify-end space-x-2 py-4 px-10">
        {usePagination ? (
          <>
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              Next
            </Button>
          </>
        ) : null}
      </div>
    </div>
  );
}

const BodyDialog = ({ row }: { row: Row<unknown> }) => {
  console.log(row);
  return (
    <div className="grid grid-rows-4 grid-flow-col gap-2 justify-stretch">
      {Object.keys(row.original).map((key) => {
        if(
          key === "title" ||
          key === "description"
        ){

          return (
            <div key={key} className="min-w-[200px]">
              <h1 className="text-xl font-medium tracking-wider">{key}</h1>
              <h1 className="text-base font-normal tracking-wider text-neutral-500">
                {row.original[key]} 
              </h1>
            </div>
          );
        }
      })}
    </div>
  );
};
