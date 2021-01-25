import React, { useState } from "react";
import Table from "./Components/Table/Table";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Paginate from "./Components/Pagination/Paginate";
import { Container } from "react-bootstrap";
// import EditModal from "./Components/Modal/Modal";
import EditField from "./Components/EditField/EditField";

import data from "../src/Components/Json-files/users.json";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [users, setUsers] = useState(data.users);
  const [activePage, setActivePage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [disabledPrev, setDisabledPrev] = useState(true);
  const [disabledNext, setDisabledNext] = useState(false);
  // const [modalStatus, setModalStatus] = useState(false);
  const [editStatus, setEditStatus] = useState(false);
  const [editItem, setEditItem] = useState();
  const [index, setIndex] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  //Current page

  const lastItem = activePage * itemsPerPage;
  const firstItem = lastItem - itemsPerPage;

  //Change page (Pagination)
  const clickedPage = (pageNumber) => {
    setActivePage(pageNumber);
    if (pageNumber === 1) {
      setDisabledPrev(true);
    } else {
      setDisabledPrev(false);
    }

    if (pageNumber === itemsPerPage) {
      setDisabledNext(true);
    } else {
      setDisabledNext(false);
    }
  };
  const prevPage = () => {
    setActivePage(activePage - 1);
  };

  const nextPage = () => {
    setActivePage(activePage + 1);
  };
  //Delete item
  const delItem = (id) => {
    let newUserList = users;
    newUserList.splice(id, 1);
    setUsers(
      newUserList.map((user) => {
        return user;
      })
    );
  };

  //Edit & Save item
  const savedItem = (idx, id, name, surname, age, bool, showEdit = false) => {
    const editedItem = {
      id,
      name,
      surname,
      age,
      bool,
    };
    let newUserList = users;
    newUserList[idx] = editedItem;
    setUsers(
      newUserList.map((user) => {
        return user;
      })
    );

    setEditStatus(showEdit);
  };

  // const modalShow = (status, id) => {
  //   setModalStatus(status);
  //   setEditItem(users[id - 1]);
  // };
  const editShow = (status, id) => {
    setIndex(id - 1);
    setEditStatus(status);
    setEditItem(users[id - 1]);
  };
  const editCancel = (status) => {
    setEditStatus(status);
  };

  //Search
  const searching = (val) => {
    setSearchValue(val);
  };
  const createSearchList = (data, text) => {
    if (text.length === 0) {
      return data;
    }
    return data.filter((user) => {
      return (
        user.name.toLowerCase().indexOf(text.toLowerCase()) > -1 ||
        user.surname.toLowerCase().indexOf(text.toLowerCase()) > -1
      );
    });
  };
  let searchRes = createSearchList(users, searchValue);
  const currentPage = searchRes.slice(firstItem, lastItem);

  // (searchValue.length === 0) ? setUsers(data.users) :
  return (
    <div className="App">
      <Header searching={searching} searchValue={searchValue} />
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
            <Table
              data={currentPage}
              delItem={delItem}
              //  modalShow={modalShow}
              editShow={editShow}
            />
            <Paginate
              data={searchRes}
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
