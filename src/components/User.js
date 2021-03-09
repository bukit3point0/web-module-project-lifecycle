import React from 'react'
import styled from 'styled-components'

const Page = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    padding: 2rem;
`
const Avatar = styled.img`
    height: 150px;
    border-radius: 50%;
    padding: 0 2rem 0 0;
`
const Info = styled.div``
const Username = styled.h2`
    margin: 0;
`
const Stats = styled.p`
    margin: 0;
`
const LinkToProfile = styled.a`
    color: lightpurple;
    text-decoration: none;
`

const User = props => {

    const {user} = props

    return (
        <Page>
            <Avatar src={user.avatar_url}/>
            <Info>
                <Username><LinkToProfile href={user.html_url}>{user.login}</LinkToProfile></Username>
                <Stats>{user.name}</Stats>
                <Stats>{user.location}</Stats>
                <Stats>Repos: {user.public_repos}</Stats>
                <Stats>Following: {user.following}</Stats>
                <Stats>Followers: {user.followers}</Stats>
            </Info>
            

        </Page>
    )
}

export default User