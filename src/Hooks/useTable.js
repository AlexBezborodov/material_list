import { useState } from "react";


const useTable = (filteredData,setActivePage) => {
  const [users, setUsers] = useState(filteredData);
  const [editStatus, setEditStatus] = useState(false);
  const [editItem, setEditItem] = useState();
  const [index, setIndex] = useState(null);
  

  //Delete item
  const deletedItem = (id) => {
    let newUserList = filteredData; //searchres
    let index = newUserList.findIndex((el) => el.id === id);
    newUserList.splice(index, 1);
    setUsers(
      newUserList.map((user) => {
        return user;
      })
    );
  };

  //Edit & Save item
  const savedItem = (id, name, surname, age, bool, showEdit = false) => {
    const editedItem = {
      id,
      name,
      surname,
      age,
      bool,
    };
    let newUserList = filteredData; // searchres
    let index = newUserList.findIndex((el) => el.id === id);
    newUserList[index] = editedItem;
    setUsers(
      newUserList.map((user) => {
        return user;
      })
    );

    setEditStatus(showEdit);
  };

  const editShow = (status, id, data) => {
    setIndex(id);
    setEditStatus(status);
    setEditItem(data[id]);
  };
  const editCancel = (status) => {
    setEditStatus(status);
  };
  return {
    users,
    setUsers,
    deletedItem,
    editShow,
    editCancel,
    savedItem,
    editStatus,
    editItem,
    index,
  };
};

export default useTable;
