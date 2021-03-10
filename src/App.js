import React from 'react'
import './App.css';
import styled from 'styled-components'
import axios from 'axios'

import UserCard from './components/UserCard'
import Followers from './components/Followers'

class App extends React.Component {

  state = {
    user: "bukit3point0",
    userInfo: [],
    followersArray: []
}

componentDidMount() {
    axios.get(`https://api.github.com/users/${this.state.user}`)
        .then(res => {
          // console.log(res.data)
            this.setState({
                userInfo: res.data
            });
        })
        .catch(err => {
            console.log(err);
        });
    axios.get(`https://api.github.com/users/${this.state.user}/followers`)
        .then(res => {
          // console.log(res.data)
          const followers = []
          res.data.forEach(e => {
            followers.push(e.login)
          })
          this.setState({followersArray: followers})
          // console.log(this.state.followersArray)
        })
        .catch(err => {
          console.log(err)
        })
}




render() {
    return (
      <Page>

        <SearchBar>
          <SearchByUser/>
            <Find>Search User</Find>
        </SearchBar>

        <UserCard userInfo={this.state.userInfo}/>
        <Followers followersArray={this.state.followersArray}/>
      </Page>
    )
}

}

export default App;

const Page = styled.div``
const SearchBar = styled.div`
  display:flex;
  justify-content: center;
`
const SearchByUser = styled.input``
const Find = styled.button``