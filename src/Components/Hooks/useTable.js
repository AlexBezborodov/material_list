import { useState } from "react";
import data from "../Json-files/users.json";

const useTable = (setActivePage) => {
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
    let newUserList = users; //searchres
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
    let newUserList = users; // searchres
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
  //   Search
  let searchRes;
  const searching = (val) => {
    setSearchValue(val);
  };
  const createSearchList = (info, text) => {
    if (text === "") {
      return info;
    } else {
      return info.filter((user) => {
        return (
          user.name.toLowerCase().includes(text.toLowerCase()) ||
          user.surname.toLowerCase().includes(text.toLowerCase())
        );
      });
    }
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
    let filteredData = users;

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
        return searchRes;
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
    searchValue,
  };
};

export default useTable;
