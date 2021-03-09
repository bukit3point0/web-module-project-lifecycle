import React from 'react'
import styled from 'styled-components'

import User from './User'

const Page = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
`
const FollowersTitle = styled.h2``
const FollowersList = styled.div``

const Followers = props => {
    return (
        <Page>
            
            <FollowersTitle>Followers</FollowersTitle>

            <FollowersList>
                {/* <User/> */}
            </FollowersList>
        </Page>
    )
}

export default Followers