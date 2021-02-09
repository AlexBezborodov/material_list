import React, { useState } from "react";
import Table from "./Components/Table/Table";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Paginate from "./Components/Pagination/Paginate";
import { Container } from "react-bootstrap";
// import EditModal from "./Components/Modal/Modal";
import EditField from "./Components/EditField/EditField";
import usePagination from "./Components/Hooks/usePagination";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import useTable from "./Components/Hooks/useTable";

function App() {
  const [activePage, setActivePage] = useState(1);
  const {
    headers,
    deletedItem,
    editShow,
    editCancel,
    savedItem,
    editStatus,
    editItem,
    index,
    searching,
    sorted,
    searchRes,
    filtered,
    searchValue,
  } = useTable(setActivePage);
  const {
    currentPage,
    itemsPerPage,
    disabledPrev,
    disabledNext,
    clickedPage,
    prevPage,
    nextPage,
  } = usePagination(searchRes, activePage, setActivePage, searchRes); //searchres
  
  return (
    <div className="App">
      <Header
        searching={searching}
        searchValue={searchValue}
        searchRes={searchRes}
      />
      <Container className="wrapper">
        {editStatus ? (
          <EditField
            editStatus={editStatus}
            editCancel={editCancel}
            item={editItem}
            idx={index}
            savedItem={savedItem}
          />
        ) : (
          <div>
            <div className="table-wrapper">
              <Table
                headers={headers}
                sorted={sorted}
                data={currentPage}
                deletedItem={deletedItem}
                //  modalShow={modalShow}
                editShow={editShow}
                filtered={filtered}
                searchValue={searchValue}
              />
            </div>

            <Paginate
              data={searchRes} // searchres
              itemsPerPage={itemsPerPage}
              currentPage={activePage}
              clickedPage={clickedPage}
              prevPage={prevPage}
              nextPage={nextPage}
              disabledPrev={disabledPrev}
              disabledNext={disabledNext}
            />
            {/* <EditModal
              show={modalStatus}
              onHide={() => modalShow(false)}
              item={editItem}
            /> */}
          </div>
        )}
      </Container>
      <Footer />
    </div>
  );
}

export default App;
