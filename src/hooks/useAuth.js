import React, { useEffect, useState } from 'react';

const useAuth = () => {
    const [user, setUser] = useState('')
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
       
        // 
       

            const Authentication = JSON.parse(localStorage.getItem("token"))
            if (Boolean(Authentication)) {

                // setLoading(true)
               


                    const getUser = async () => {
                        // const Authentication = JSON.parse(localStorage.getItem("token"))
                        const res = await fetch("https://digi-storebackend.vercel.app/getadmin", {
                            method: "GET",
                            headers: {
                                "Authentication": Authentication
                            }
                        })
                        const result = await res.json()
                        setUser(result)

    
                        // loading = false
                        setLoading(false)
    
    
                    }
                    getUser()
                // loading = true
                



            }



       





    }, [])
      // ---------------------------------------log out ------------------------------------------------------------------------------
      const logOut = async () => {
        const Authentication = JSON.parse(localStorage.getItem("token"))
        const res = await fetch("https://digi-storebackend.vercel.app/adminlogout", {
            method: "GET",
            headers: {
                "Authentication": Authentication
            }
        })
        const result = await res.json()
        // now romove token form localStorage -----------------------------------------
        localStorage.removeItem("token")
        setUser('')

    }
    return {
        setUser,
        user,
        setLoading,
        loading ,
        logOut

    }
};

export default useAuth;