import React from 'react'
import sendRequest from '../utils/sendRequest'

export default function Login() {

    const validateLogin = async () => {
        console.log("Inside validateLogin");
        try {
            console.log("Inside validateLogin Try Block");
            const response = await sendRequest("/login", 
            {
                "username": "gadanishant",
                "password": "gadanishant"
            }, 
            "POST", {
                "content-type": "Application/json"
            })
            console.log("After Request");

            console.log("response: ", response.success);
        } catch (error) {
            console.log("error: ", error);
        }
    }

    console.log("On Login!");

    return (
        <>
            <div>Login</div>
            <form method="post" onSubmit={validateLogin}>
                <input type="text" name="username" id="username" placeholder="username" autoComplete="off" />
                <input type="password" name="password" id="password" placeholder="password" autoComplete="off" />
                <input type="submit" />
            </form>
        </>
    )
}