import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { Table } from "@tanstack/react-table";
import { PublicCertificate } from "@/types/certificates";

interface DataTableFooterProps {
  table: Table<PublicCertificate>;
}

export function DataTableFooter({ table }: DataTableFooterProps) {
  return (
    <div className="flex items-center justify-between px-2 py-4">
      <div className="text-sm text-muted-foreground w-3">
        <span>{table.getFilteredRowModel().rows.length}</span> <span>certificate(s) total.</span>
      </div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              
              size="sm"
              onClick={() => table.previousPage()}
              className={!table.getCanPreviousPage() ? "opacity-50 cursor-not-allowed" : ""}
            >
              Previous
            </PaginationPrevious>
          </PaginationItem>
          {Array.from({ length: table.getPageCount() }, (_, i) => (
            <PaginationItem key={i}>
              <PaginationLink
                onClick={() => table.setPageIndex(i)}
                isActive={table.getState().pagination.pageIndex === i}
              >
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
             
              size="sm"
              onClick={() => table.nextPage()}
              className={!table.getCanNextPage() ? "opacity-50 cursor-not-allowed" : ""}
            >
              Next
            </PaginationNext>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
      <div className="text-sm text-muted-foreground w-3">
        empty
      </div>
    </div>
  );
}