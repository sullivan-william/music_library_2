import { useState, useEffect } from 'react';
import Gallery from './components/Gallery';
import SearchBar from './components/SearchBar';
import './App.css';
import { createResource as fetchData } from './helper'

function App() {
  let [search, setSearch] = useState('')
  let [message, setMessage] = useState("Search for Music!")
  let [data, setData] = useState(null)

  const API_URL = 'https://itunes.apple.com/search?term='

  useEffect(() => {
    if(search) {
      setData(fetchData(search))
    }
  }, [search])

  const handleSearch = (e, term) => {
    e.preventDefault()
    setSearch(term)
  }

  return (
    <div className='App'>
      <SearchBar handleSearch={handleSearch} />
      {message}
      {/* <Gallery data={data} /> */}
    </div>
  )
}

export default App