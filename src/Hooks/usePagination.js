import { useState } from "react";

const usePagination = (filteredData, activePage, setActivePage) => {
  const [itemsPerPage] = useState(10);
  const [disabledPrev, setDisabledPrev] = useState(false);
  const [disabledNext, setDisabledNext] = useState(false);
  

  //Current page
  const lastItem = activePage * itemsPerPage;
  const firstItem = lastItem - itemsPerPage;
  const currentPage = filteredData.slice(firstItem, lastItem);
  const pageCount = Math.ceil(filteredData.length / itemsPerPage)
  // setActivePage(1);
    
  //Change page
  const clickedPage = (pageNumber) => {
    
    
    if (pageNumber === 1) {
      setDisabledPrev(true);
    } else if (pageNumber === pageCount) {
      setDisabledNext(true);
    } else if (pageCount === 1) {
      setDisabledNext(true);
      setDisabledPrev(true);
    } else {
      setDisabledNext(false);
      setDisabledPrev(false);
    }
  };

  const prevPage = () => {
    if (activePage === 1) {
      return activePage;
    } else {
      setActivePage(activePage - 1);
    }
  };

  const nextPage = () => {
    if (activePage === Math.ceil(filteredData.length / itemsPerPage)) {
      return activePage;
    } else {
      setActivePage(activePage + 1);
    }
  };

  return {
    activePage,
    itemsPerPage,
    disabledPrev,
    disabledNext,
    currentPage,
    clickedPage,
    prevPage,
    nextPage,
    
  };
};
export default usePagination;
