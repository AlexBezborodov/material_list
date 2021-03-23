import { useState } from "react";

const useSort = (newData) => {
  const [sorted, setSorted] = useState("↑");
  const[sortedColumn, setSortedColumn] = useState("");
  const [sortedData] = useState(newData);
  
  const filteredBy = (title) => {
    if (sorted === "↑") {
      setSorted("↓");
      return (a, b) => (b[title] > a[title] ? 1 : -1);
    } else {
      setSorted("↑");
      return (a, b) => (a[title] > b[title] ? 1 : -1);
    }
  };
  const filteredColumn = (propName, column) => {
    setSortedColumn(column);
    sortedData.sort(filteredBy(propName.toLowerCase()))
    console.log(`sorted ${column}`, sortedData);
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
        return newData;
    }
  };

  return [filtered, sorted, sortedColumn, sortedData];
};

export default useSort;
