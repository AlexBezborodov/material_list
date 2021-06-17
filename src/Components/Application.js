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
import StartPage from './Start-page/Start-page';
import SideBar from "./SideBar/SideBar";

function Application({ data }) {
  const dataUsers = data.users;
  const headers = data.headers;
  const [activePage, setActivePage] = useState(1);
  const [users, addItem] = useAddItem(dataUsers);
  const [searching, searchValue, filteredData] = useFilter(users);
  const [filtered, sorted, sortedColumn, sortedData] = useSort(filteredData);
  const [isEnter, setIsEnter] = useState(true);
  
  const {
    deletedItem,
    editShow,
    editCancel,
    savedItem,
    editStatus,
    editItem,
    index,
  } = useTable(sortedData, setActivePage);

  const {
    currentPage,
    itemsPerPage,
    disabledPrev,
    disabledNext,
    clickedPage,
    prevPage,
    nextPage,
  } = usePagination(sortedData, activePage, setActivePage);


  return (
    <div className="App ">
      <Header
        searching={searching}
        searchValue={searchValue}
        searchRes={filteredData}
        isEnter={isEnter}
        setIsEnter={setIsEnter}
        
      />
      {isEnter? <StartPage setIsEnter={setIsEnter} /> : <div className="d-flex wrapper"> 
      <SideBar />
      <Container >
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
              activePage={activePage}
            />
            <AddItem addItem={addItem} />
          </div>
        )}
      </Container>
      </div>
      }

      

      <Footer />
    </div>
  );
}

export default Application;
