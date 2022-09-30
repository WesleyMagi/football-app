import React from "react";
import {useState} from "react";

function SearchBar(props) {
  const {onSearch} = props;
  const [searchText, setSearchText] = useState([])
  const [filteredResults, setFilteredResults] = useState([]);

  const handleInput = (e) => {
    const text = e.target.value
    setSearchText(text)
  }

  const handleEnterKeyPressed = (e) => {
    if (e.key === 'Enter') {
      let results = onSearch(searchText)
      
      if (searchText !== ''){
        const filteredData = results.results.filter((item) => {
          console.log(Object.values(item))
          return Object.values(item).join('').toLowerCase().includes(searchText.toLowerCase())
        })  
        console.log(filteredData)
        setFilteredResults(filteredData)
      }
      else {
        setFilteredResults(results)
      }
    }
  }

  return(
    <div>
      <div className="control">
        <input className="input" onChange={handleInput} onKeyPress={handleEnterKeyPressed} type="text" value={searchText} placeholder="Search for Team"/>
      </div>
    </div>
  )
}

export default SearchBar;