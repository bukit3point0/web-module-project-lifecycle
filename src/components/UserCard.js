import React from 'react'
import styled from 'styled-components'

const Page = styled.div`
    display:flex;
    justify-content:center;
    align-items: center;
    
    margin: auto;
    padding: 10px;
`
const Icon = styled.img`
    width: 150px;
    height: 150px;
    padding-right: 1rem;
`
const Info = styled.div``
const Username = styled.h1``
const UserLink = styled.a``
const Name = styled.p``
const UserInfo = styled.p``

const UserCard = props => {

    const {userInfo} = props
    console.log(userInfo)

    return (
        <Page>
            <Icon src={userInfo.avatar_url}/>
            <Info>
                <Username>
                    <UserLink href={userInfo.html_url}>        
                        {userInfo.login}
                    </UserLink>
                </Username>
                <Name>{userInfo.name}</Name>
                <UserInfo>{userInfo.location}</UserInfo>
                <UserInfo>Public Repos: {userInfo.public_repos}</UserInfo>
                <UserInfo>Followers: {userInfo.followers}</UserInfo>
                <UserInfo>Following: {userInfo.following}</UserInfo>
            </Info>
        </Page>
    )
}

export default UserCard