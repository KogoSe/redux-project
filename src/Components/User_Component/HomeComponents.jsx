import React from 'react'
import { useSelector } from 'react-redux'
const HomeComponents = () => {
    const userData = useSelector(state=>state.user)
    return (
        <div>
            <h1>WelCome to My Website</h1>
            <div>
                <label>Name: {userData.name}</label>
                <br/>
                <label>Lastname:{userData.lastname}</label>
            </div>
        </div>
    )
}

export default HomeComponents
