import { useState } from "react";

const useSort = (filteredData) => {
  const [sorted, setSorted] = useState("↑");
  const[sortedColumn, setSortedColumn] = useState("")
  const filteredBy = (title) => {
    if (sorted === "↑") {
      setSorted("↓");
      return (a, b) => (b[title] > a[title] ? 1 : -1);
    } else {
      setSorted("↑");
      return (a, b) => (a[title] > b[title] ? 1 : -1);
    }
  };
  const filteredColumn = (filter, column) => {
    setSortedColumn(column)
   
    filteredData.sort(filteredBy(filter.toLowerCase()));
  };
  const filtered = (propName, column) => {
    switch (propName) {
      case "id":
        filteredColumn(propName, column);
        break;
      case "name":
        filteredColumn(propName, column);
        break;
      case "surname":
        filteredColumn(propName, column);
        break;
      case "age":
        filteredColumn(propName, column);
        break;
      default:
        return filteredData;
    }
  };
  return [filtered, sorted, sortedColumn];
};

export default useSort;
