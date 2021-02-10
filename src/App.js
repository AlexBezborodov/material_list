import React, {useState} from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "./Table";
import tableData from './mock/table-data.json';

// TODO add sortable
const headersConfig = [
  {
    "nameHeader": "Number",
    "propType": "number",
    "isSearchable": true,
    "propName": "id"
  },
  {
    "nameHeader": "Name",
    "propType": "string",
    "isSearchable": true,
    "propName": "name"
  },
  {
    "nameHeader": "Surname",
    "propType": "string",
    "isSearchable": true,
    "propName": "surname"
  },
  {
    "nameHeader": "Age",
    "propType": "number",
    "isSearchable": true,
    "propName": "age"
  },
  {
    "nameHeader": "Bool",
    "propType": "number",
    "isSearchable": true,
    "propName": "bool"
  },
  {
    "nameHeader": "Change",
    "propType": "string",
    "isSearchable": true,
    "propName": "change"
  }
];

function App() {

  const [data, setData] = useState(tableData);
  const handleChange = (changedItem) => {
    const newData = [...data];
    const index = newData.findIndex(({id}) => changedItem.id === id);
    if (index < 0) {
      return;
    }
    newData.splice(index, 1, changedItem);
    setData(newData);
  }

  return (
    <div className="App">
      <Table
        tableData={data}
        headersConfig={headersConfig}
        onChange={handleChange}
      />
    </div>
  );
}

export default App;
