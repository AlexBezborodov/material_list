import React, { useState } from 'react';
import Table from "./Components/Table/Table";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Paginate from './Components/Pagination/Paginate'
import { Container } from 'react-bootstrap';
import data from "../src/Components/Json-files/users.json";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";



function App() {
  const [users, setUsers] = useState(data.users);
  const [activePage, setActivePage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [disabledPrev, setDisabledPrev] = useState(true);
  const [disabledNext, setDisabledNext] = useState(false);

  
  
  //Current page 
  const lastItem = activePage * itemsPerPage;
  const firstItem = lastItem - itemsPerPage;
  const currentPage = users.slice(firstItem, lastItem)

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
    }else {
      setDisabledNext(false);
    }
  }

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
    setActivePage(activePage - 1 );
    }
   
  const nextPage  = () => {
    setActivePage(activePage + 1);
  }
  
  return (
    <div className="App">
      <Header />
      <Container className="wrapper" >
        <Table data={currentPage}  delItem={delItem}/>
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
          
      </Container>
      <Footer />
    </div>
  );
}

export default App;
