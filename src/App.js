import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Home'
import DetailsContext from './DetailsContext'
import DetailsPage from './DetailsPage'

function App() {
  const [movies, setMovies] = useState([])
  const [details, setDetails] = useState({})
  const [searchTerm, setSearchTerm] = useState('.*');

  React.useEffect(() => {
    fetch('http://localhost:3001/movies')
    .then(response => response.json())
    .then(json => setMovies(json))
  }, [])

  return (
    <DetailsContext.Provider value={{movies, setMovies, details, setDetails, searchTerm, setSearchTerm}}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/id/:id" element={<DetailsPage />} />
        </Routes>
      </Router>
    </DetailsContext.Provider>
  );
}

export default App;
