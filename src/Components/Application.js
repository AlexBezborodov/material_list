import React, { useState } from "react";
import Table from "./Table/Table";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Paginate from "./Pagination/Paginate";
import { Container } from "react-bootstrap";
import EditField from "./EditField/EditField";
import usePagination from "../Hooks/usePagination";
import useTable from "../Hooks/useTable";
import useSort from "../Hooks/useSort";
import useFilter from "../Hooks/useFiltered";
import AddItem from "./Add-item/AddItem";
import useAddItem from "../Hooks/useAddItem";

function Application({ data }) {
  const dataUsers = data.users;
  const headers = data.headers;
  const [activePage, setActivePage] = useState(1);
  const [newData, addItem] = useAddItem(dataUsers);

  const [searching, searchValue, filteredData] = useFilter(newData);

  const [filtered, sorted, sortedColumn] = useSort(filteredData);

  const {
    deletedItem,
    editShow,
    editCancel,
    savedItem,
    editStatus,
    editItem,
    index,
  } = useTable(filteredData, setActivePage);

  const {
    currentPage,
    itemsPerPage,
    disabledPrev,
    disabledNext,
    clickedPage,
    prevPage,
    nextPage,
  } = usePagination(filteredData, activePage, setActivePage);

  return (
    <div className="App ">
      <Header
        searching={searching}
        searchValue={searchValue}
        searchRes={filteredData}
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
                sortedColumn={sortedColumn}
                data={currentPage}
                deletedItem={deletedItem}
                editShow={editShow}
                filtered={filtered}
                searchValue={searchValue}
              />
            </div>

            <Paginate
              data={filteredData}
              itemsPerPage={itemsPerPage}
              currentPage={activePage}
              clickedPage={clickedPage}
              prevPage={prevPage}
              nextPage={nextPage}
              disabledPrev={disabledPrev}
              disabledNext={disabledNext}
              setActivePage={setActivePage}
            />

            <AddItem addItem={addItem} />
          </div>
        )}
      </Container>

      <Footer />
    </div>
  );
}

export default Application;
