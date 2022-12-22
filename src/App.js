import "./App.css";
import { users } from "./users";
import { useState } from "react";
import Table from "./Table";

function App() {
  const [query, setQuery] = useState("");


 const keys = ["first_name","last_name","email"];


  const search = (data) => {
    return data.filter(
      (item) =>
    //     item.first_name.toLowerCase().includes(query) ||
    //     item.last_name.toLowerCase().includes(query) ||
    //     item.email.toLowerCase().includes(query)
    keys.some((key)=>item[key].toLowerCase().includes(query))
    );
  };

  return (
    <div className="App">
      <input
        placeholder="search ... "
        className="p-[10px] mt-[20px] text-[20px]"
        onChange={(e) => setQuery(e.target.value.toLowerCase())}  
      />

      <Table data={search(users)} />
    </div>
  );
}

export default App;
