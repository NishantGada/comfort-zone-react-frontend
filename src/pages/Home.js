import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();
    console.log("Hey!");
    return (
        <>
            <h3>Home</h3>
            <button onClick={() => {navigate('login')}}>Login</button>
            <button onClick={() => {navigate('add-new-toilet')}}>Add</button>
        </>
    )
}