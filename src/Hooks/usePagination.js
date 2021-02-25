import { useState, useEffect, useCallback } from "react";

const usePagination = (filteredData, activePage, setActivePage) => {
  const [itemsPerPage] = useState(10);
  const [disabledPrev, setDisabledPrev] = useState(false);
  const [disabledNext, setDisabledNext] = useState(false);

  //Current page
  const lastItem = activePage * itemsPerPage;
  const firstItem = lastItem - itemsPerPage;
  const currentPage = filteredData.slice(firstItem, lastItem);
  console.log(filteredData);
  
  // useEffect(() =>{}, filteredData)
  //Change page
  const clickedPage = (pageNumber) => {
    setActivePage(pageNumber);
    if (pageNumber === 1) {
      setDisabledPrev(true);
    } else if (pageNumber === Math.ceil(filteredData.length / itemsPerPage)) {
      setDisabledNext(true);
    } else if (Math.ceil(filteredData.length / itemsPerPage) === 1) {
      setDisabledNext(true);
      setDisabledPrev(true);
    } else {
      setDisabledNext(false);
      setDisabledPrev(false);
    }
  };

  // const prevPage = () => {
  //   if (activePage === 1) {
  //     return activePage;
  //   } 
  //   return setActivePage(activePage - 1);
    
  // };

  const prevPage = useCallback(() => {
    if(activePage === 1) {
      return activePage
    }
    setActivePage(activePage - 1)
  }, [activePage, setActivePage])

  const nextPage = () => {
    if (activePage === Math.ceil(filteredData.length / itemsPerPage)) {
      return activePage;
    } 
    return setActivePage(activePage + 1);
    
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
