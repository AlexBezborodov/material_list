import React from "react";
import { Pagination } from "react-bootstrap";
const Paginate = ({ itemsPerPage, data, disabledPrev, currentPage, disabledNext, clickedPage, prevPage, nextPage }) => {
  const pages = [];
   
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pages.push(i);
  };
  
  
  const paginationPages = pages.map((number) => (
    <Pagination.Item 
      onClick={() => clickedPage(number) }
      key={number}
    >
      {number}
    </Pagination.Item>
  ));
  return (
    <div className="d-flex justify-content-center align-items-center py-3">
      <Pagination>
        <Pagination.Prev disabled={disabledPrev} onClick={() => prevPage()} />
        {paginationPages}
        <Pagination.Next disabled={disabledNext} onClick={() => nextPage()} />
      </Pagination>
    </div>
  );
};
export default Paginate;
