import React from 'react'
import styled from 'styled-components'

import FollowerCard from './FollowerCard'

const Page = styled.div``
const FollowerTitle = styled.h2`
    text-align: center;
`
const FollowerContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
`

const Followers = props => {
    
    const {followersArray} = props

    return (
        <Page>
            <FollowerTitle>Followers:</FollowerTitle>
            <FollowerContainer>
                {followersArray.map(user => {
                    return(
                        <FollowerCard 
                            key={user.id}
                            user={user}
                        />
                    )
                })}
            </FollowerContainer>
        </Page>
    )
}

export default Followers