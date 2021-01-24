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

  //Current page
  const lastItem = activePage * itemsPerPage;
  const firstItem = lastItem - itemsPerPage;
  const currentPage = users.slice(firstItem, lastItem);


  //Change page
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

  const delItem = (id) => {
    let newUserList = users;
    newUserList.splice(id, 1);
    setUsers(
      newUserList.map((user) => {
        return user;
      })
    );
  };

  const prevPage = () => {
    setActivePage(activePage - 1);
  };

  const nextPage = () => {
    setActivePage(activePage + 1);
  };
  const savedItem = ( idx, id, name, surname, age, bool, showEdit = false) => {
    const editedItem = {
      id,
      name,
      surname,
      age,
      bool
    }
    let newUserList = users;
     newUserList[idx]= editedItem;
      setUsers(
      newUserList.map((user) => {
        return user;
      })
    );
    
    console.log('users', users);
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

  return (
    <div className="App">
      <Header />
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
              data={users}
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
