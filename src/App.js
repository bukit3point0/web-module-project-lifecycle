import axios from 'axios';
import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import './App.css';

import User from './components/User'

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

  useEffect(() => {
    axios.get("https://api.github.com/users/bukit3point0")
    .then(res => {
      console.log(res.data)
      setUser(res.data)
    })
    .catch(err => {
      console.log(`heck ${err}`)
    })
  },[])
  console.log(user)

  return (
    <Page>
      <SearchBar>
        <Find placeholder="search by user"/>
        <Search>Look Up</Search>
      </SearchBar>
      <User user={user}/>
    </Page>
  );
}

export default App;
