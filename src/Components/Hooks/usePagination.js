import { useState } from "react";

const usePagination = (users, activePage, setActivePage, searchRes) => {
  const [itemsPerPage] = useState(10);
  const [disabledPrev, setDisabledPrev] = useState(false);
  const [disabledNext, setDisabledNext] = useState(false);
  //   const [modalStatus, setModalStatus] = useState(false);
  //Current page
  const lastItem = activePage * itemsPerPage;
  const firstItem = lastItem - itemsPerPage;
  const currentPage = users.slice(firstItem, lastItem);

  //Change page
  const clickedPage = (pageNumber) => {
    setActivePage(pageNumber);
    if (pageNumber === 1) {
      setDisabledPrev(true);
    } else if (pageNumber === Math.ceil(searchRes.length / itemsPerPage)) {
      setDisabledNext(true);
    } else if (Math.ceil(searchRes.length / itemsPerPage) === 1) {
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
    if (activePage === Math.ceil(users.length / itemsPerPage)) {
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
