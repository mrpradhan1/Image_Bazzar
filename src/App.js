import React,{useState} from "react";
import SearchBar from "./components/SearchBar";
import Display from "./components/Display";
const App= ()=>{
  const [searchResults,setSearchResults]=useState([]);
  return(
    <div>
      <SearchBar setSearchResults={setSearchResults}/>
      <Display searchResults={searchResults}/>
    </div>
  )
}

export default App;