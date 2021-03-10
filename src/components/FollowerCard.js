import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'

import UserCard from './UserCard'

const Page = styled.div`
    margin: 1%;
    border: 1px solid black;
    border-radius: 15px;
    width: 22%;
`

const FollowerCard = props => {

    const {user} = props
    const [userInfo, setUserInfo] = useState([])

    useEffect(() => {
        axios.get(`https://api.github.com/users/${user}`)
        .then(res => {
        //   console.log(res.data)
          setUserInfo(res.data)
        })
        .catch(err => {
            console.log(err);
        });
    },[])

    console.log(userInfo)

    return (
        <Page>
            <UserCard userInfo={userInfo}/>
        </Page>
    )
}

export default FollowerCard