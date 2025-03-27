"use client"

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
    currentPage: number;
    paginate: (pageNumber:number) => void; 
}



export const PaginationDemo:FC<Props> = ({ projectsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / projectsPerPage); i++) {
    pageNumbers.push(i)
    if (typeof window !== "undefined") window.scrollTo({top:0})
  }

  return (
    <Pagination className="mt-7">
      <PaginationContent className='flex items-center justify-center gap-x-3'>
        {pageNumbers.map(number => (
          <PaginationItem key={number}>
            <PaginationLink onClick={() => paginate(number)} className={`${currentPage === number ? "bg-gray-700" : ""} cursor-pointer`} >{number}</PaginationLink>
          </PaginationItem>
        ))}
      </PaginationContent>
    </Pagination>
  );
};