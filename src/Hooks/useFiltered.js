import { useState } from "react";

const useFilter = (newData) => {
  const [searchValue, setSearchValue] = useState("");
  
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
  let filteredData = createSearchList(newData, searchValue);
  return [searching, searchValue, filteredData];
};

export default useFilter;
