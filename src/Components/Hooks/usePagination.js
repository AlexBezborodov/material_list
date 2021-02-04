import { useState } from "react";

const usePagination = (users) => {
  const [activePage, setActivePage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [disabledPrev, setDisabledPrev] = useState(true);
  const [disabledNext, setDisabledNext] = useState(false);
//   const [modalStatus, setModalStatus] = useState(false);
console.log(users);
//Current page 
const lastItem = activePage * itemsPerPage;
const firstItem = lastItem - itemsPerPage;
const currentPage = users.slice(firstItem, lastItem)

//Change page 
const clickedPage = (pageNumber) => {
    console.log('page number', pageNumber);
  setActivePage(pageNumber);
  if (pageNumber === 1) {
    setDisabledPrev(true);
  } else {
    setDisabledPrev(false);
  }


  if (pageNumber === itemsPerPage) {
    setDisabledNext(true);
  }else {
    setDisabledNext(false);
  }
}

const prevPage = () => {
    if (activePage === 1) {
        return activePage
    }else {
        setActivePage(activePage - 1 );
    }
    
    }
   
  const nextPage  = () => {
     
    if (activePage === Math.ceil(users.length / itemsPerPage)) {
        return activePage
    }else {
        setActivePage(activePage + 1 );
    } 

  }



    return {
        activePage,
        itemsPerPage,
        disabledPrev,
        disabledNext,
        currentPage,
        clickedPage,
        prevPage,
        nextPage
    }

}
export default usePagination;