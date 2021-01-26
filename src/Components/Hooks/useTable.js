import { useState } from "react";
import data from "../Json-files/users.json";

const useTable = () => {
  const dataUsers = data.users;
  const headers = data.headers;
  const [users, setUsers] = useState(dataUsers);
  const [editStatus, setEditStatus] = useState(false);
  const [editItem, setEditItem] = useState();
  const [index, setIndex] = useState(null);
  const [sorted, setSorted] = useState("↑");
  const [searchValue, setSearchValue] = useState("");

  //Delete item
  const deletedItem = (id) => {
    let newUserList = searchRes;
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
    let newUserList = searchRes;
    newUserList[idx] = editedItem;
    // filtered('Name')
    setUsers(
      newUserList.map((user) => {
        return user;
      })
    );

    setEditStatus(showEdit);
  };

  const editShow = (status, id) => {
    
    setIndex(id);
    setEditStatus(status);
    setEditItem(users[id]);
  };
  const editCancel = (status) => {
    setEditStatus(status);
  };
//   Search
  let searchRes;
  const searching = (val) => {
    setSearchValue(val);
  };
  const createSearchList = (info, text) => {
    
    if (text.length === 0) {
      return info;
    }
    return info.filter((user) => {
      return (
        user.name.toLowerCase().indexOf(text.toLowerCase()) > -1 ||
        user.surname.toLowerCase().indexOf(text.toLowerCase()) > -1
      );
    });
  };

  searchRes = createSearchList(users, searchValue);

   //filters
   const filteredBy = (title) => {
    if (sorted === "↑") {
      setSorted("↓");
      return (a, b) => (b[title] > a[title] ? 1 : -1);
    } else {
      setSorted("↑");
      return (a, b) => (a[title] > b[title] ? 1 : -1);
    }
  };
  const filteredColumn = (filter) => {
    let filteredData = searchRes;

    filteredData.sort(filteredBy(filter.toLowerCase()));
    setUsers(filteredData);
    setUsers(
      filteredData.map((user) => {
        return user;
      })
    );
  };
  const filtered = (filter) => {
    switch (filter) {
      case "Number":
        filteredColumn("id");
        break;
      case "Name":
        filteredColumn(filter);
        break;
      case "Surname":
        filteredColumn(filter);
        break;
      case "Age":
        filteredColumn(filter);
        break;
      default:
        return users;
    }
  };
  return {
    headers,
    users,
    setUsers,
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
    searchValue
  };
};

export default useTable;
