import React from "react";
import { Pagination } from "react-bootstrap";

const Paginate = ({
  data,
  itemsPerPage,
  clickedPage,
  prevPage,
  nextPage,
  disabledPrev,
  disabledNext,
  currentPage,
  setActivePage
}) => {
  const pages = [];
  let active = "";

  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pages.push(i);
  }
  if (currentPage > pages.length) {
    setActivePage(pages.length)
  }
  const paginationPages = pages.map((number) => (
    <Pagination.Item
      onClick={() => clickedPage(number)}
      key={number}
      className={
        (active = currentPage === number ? (active += "active-page") : "")
      }
    >
      {number}
    </Pagination.Item>
  ));

  return (
    <div className="d-flex justify-content-center align-items-center py-3 ">
      <Pagination>
        <Pagination.Prev disabled={disabledPrev} onClick={() => prevPage()} />
        {paginationPages}
        <Pagination.Next disabled={disabledNext} onClick={() => nextPage()} />
      </Pagination>
    </div>
  );
};
export default Paginate;
