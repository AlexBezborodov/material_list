import { useState } from "react";

const useAddItem = (dataUsers) => {
  const [users, setUsers] = useState(dataUsers);
  let newData = users;
  const addItem = (id, name, surname, age, bool) => {
    const newItem = {
      id,
      name,
      surname,
      age,
      bool,
    };

    newData.push(newItem);
    setUsers(
      newData.map((user) => {
        return user;
      })
    );
  };
  return [newData, addItem];
};

export default useAddItem;
