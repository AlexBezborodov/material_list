import { useState } from "react";

const useAddItem = (dataUsers) => {
  const [users, setUsers] = useState(dataUsers);
  // let newData = users;
  const addItem = (id, name, surname, age, bool) => {
    const newItem = {
      id,
      name,
      surname,
      age,
      bool,
    };

   
    setUsers(
      [...users,newItem]
    );
  };
  return [users, addItem];
};

export default useAddItem;
