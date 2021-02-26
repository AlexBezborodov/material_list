import { useState } from "react";

const useFilter = (data) => {
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
  let filteredData = createSearchList(data, searchValue);

  return [searching, searchValue, filteredData];
};

export default useFilter;
