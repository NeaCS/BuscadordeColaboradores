
import { useState } from 'react';
import './App.css';
import SearchAppBar from './components/SearchBar';
import { BaseColaboradores } from './database/data';
import MyTable from './components/MyTable';




function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores)
  const [searchTerm, setSearchTerm] = useState("")
  

  const handleSearchChange = (value) => {
  setSearchTerm(value);
  
};

console.log("term",searchTerm)
  return (
    <div className="App">
      <SearchAppBar onSearchChange={handleSearchChange}/>
      <MyTable colaboradores={colaboradores} searchTerm={searchTerm}/>
        
    </div>
  );
}

export default App;
