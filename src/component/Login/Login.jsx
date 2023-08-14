import React, { useEffect, useRef, useState } from 'react';
import './login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/Auth_context';


const LogIn = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [errorMessage, setErrorMessage] = useState('')
    const from = location.state?.from?.pathname || '/'
    const { logIn, setUser, user, setLoading } = useAuthContext()
    const emailValue = useRef()
    const passwordValue = useRef()
    const handleLogIn = async (e) => {
        e.preventDefault()
        const email = emailValue.current.value
        const password = passwordValue.current.value
        // logIn(email,password)   
        // ---------------------------------------------------------------------------
        try {
            const userInfo = { email, password }
            const res = await fetch("https://digi-storebackend.vercel.app/adminlogin", {
                method: "POST",
                headers: {
                    "content-Type": "application/json"
                },
                body: JSON.stringify(userInfo)
            }
            )

            if (res.status == '400') {

                const result = await res.json()
                setErrorMessage(result.msg)

            } else {

                const result = await res.json()
                setUser(result.admin)
                const token = `Bearer ${result.token}`
                const stringifiedToken = JSON.stringify(token)

                localStorage.setItem("token", stringifiedToken)
                setLoading(false)
                navigate(from, { replace: true })

            }





            // console.log(result,'result')



        } catch (error) {
            console.log(error)

        }


        // -----------------------------------------------------------------------------
        // navigate(from,{replace:true})
        // navigate('/')

    }
    return (
        <div className='logInContainer'>
            <div className='logIn'>
                <h1>Please log in</h1>
                <form action="" onSubmit={handleLogIn}>
                    <label htmlFor="email">Email</label>
                    <input ref={emailValue} type="email" name="" id="email" placeholder='email' />
                    <label htmlFor="password">Password</label>
                    <input ref={passwordValue} type="password" name="" id="password" placeholder='Password' />
                    <input type="submit" value="log in" />
                    <p>{errorMessage}</p>


                </form>




            </div>

        </div>
    );
};

export default LogIn;