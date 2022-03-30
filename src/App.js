import { useState, useEffect } from 'react';
import Gallery from './components/Gallery';
import SearchBar from './components/SearchBar';

function App() {
  let [search, setSearch] = useState('')
  let [message, setMessage] = useState('Search for Music!')
  let [data, setData] = useState([])

  return (
    <div>
      <SearchBar />
      {message}
      <Gallery />
    </div>
  )
}

export default App;
