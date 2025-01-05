import { FC } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink
} from "@/components/ui/pagination"

interface Props {
    projectsPerPage: number; 
    totalPosts:number; 
    paginate: (pageNumber:number) => void; 
}

export const PaginationDemo:FC<Props> = ({ projectsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / projectsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Pagination className="mt-7">
      <PaginationContent className='flex items-center justify-center gap-x-3'>
        {pageNumbers.map(number => (
          <PaginationItem key={number}>
            <PaginationLink onClick={() => paginate(number)} className="cursor-pointer">{number}</PaginationLink>
          </PaginationItem>
        ))}
      </PaginationContent>
    </Pagination>
  );
};