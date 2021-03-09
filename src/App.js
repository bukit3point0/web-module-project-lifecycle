import axios from 'axios';
import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import './App.css';

import User from './components/User'
import Followers from './components/Followers'

const Page = styled.div``

const SearchBar = styled.div`
  display: flex;
  justify-content: center;
  padding: 1.5rem 0;
`
const Find = styled.input``
const Search = styled.button``

const App = () => {

  const [user, setUser] = useState("bukit3point0")
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get(`https://api.github.com/users/${user}`)
    .then(res => {
      console.log(res.data)
      setData(res.data)
    })
    .catch(err => {
      console.log(`heck ${err}`)
    })
  },[])
  console.log(user)

  const handleChange = e => {
    console.log("new value", e.target.value)
    setUser(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    axios.get(`https://api.github.com/users/${user}`)
    .then(res => {
      console.log(res.data)
      setData(res.data)
    })
    .catch(err => {
      console.log(`AHH ERROR ${err}`)
    })
  }

  return (
    <Page>
      {/* <SearchBar
        onSubmit={handleSubmit}
      >
        <Find 
          type="text"
          // value="user"
          onChange={handleChange}
          placeholder="search by user"
        />
        <Search>Look Up</Search>
      </SearchBar> */}
      <User user={data}/>
      <Followers/>
    </Page>
  );
}

export default App;
