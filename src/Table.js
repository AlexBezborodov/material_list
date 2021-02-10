import React, { useState } from "react";
import Table from "./Components/Table/Table";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Paginate from "./Components/Pagination/Paginate";
import { Container } from "react-bootstrap";
import EditField from "./Components/EditField/EditField";
import usePagination from "./Components/Hooks/usePagination";

import useTable from "./Components/Hooks/useTable";
import useSort from "./hooks/useSort";

function TableComponent({tableData, headersConfig, onChange}) {
  // TODO move table state to the custom hook
  const [activePage, setActivePage] = useState(1);
  const [sortProp, setSortProp] = useState(null);
  const [sortAsc, setSortAsc] = useState(false);

  // TODO step 1 - sort
  const sortedData = useSort(tableData, headersConfig, sortProp, sortAsc);
  console.log(sortedData);

  // TODO step 2 - filter
  // const filteredData = useFilter(sortedData, headersConfig, value);

  const {
    headers,
    deletedItem,
    editShow,
    editCancel,
    savedItem,
    editStatus,
    // TODO throw edited item to the onChange callback
    editItem,
    index,
    searching,
    sorted,
    searchRes,
    filtered,
    searchValue,
  } = useTable(tableData, headersConfig);

  // GOOD step 3 - pagination
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
    <>
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
                headersConfig={headersConfig}
                sorted={sorted}
                tableData={currentPage}
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
    </>
  );
}

export default TableComponent;
