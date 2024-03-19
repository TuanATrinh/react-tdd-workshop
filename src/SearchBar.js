import React from 'react';
import DetailsContext from "./DetailsContext"

const SearchBar = () => {
const {setSearchTerm} = React.useContext(DetailsContext)

  const handleChange = event => {
    if(event.target.value){
        setSearchTerm(event.target.value);
    }else{
        setSearchTerm(".*")
    }
  };


  return (
    <header>
      <input style={{marginRight: 'auto'}}
        type="text"
        placeholder="Search movies..."
        onChange={handleChange}
      />
    </header>
  );
};

export default SearchBar;