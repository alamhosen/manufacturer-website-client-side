import { useEffect, useState } from "react"

const useUser = user => {
    const [normalUser, setnormalUser] = useState(false);
    const [normalUserLoading, setnormalUserLoading] = useState(true);
    useEffect( () =>{
        const email = user?.email;
        if(email){
            fetch(`http://localhost:5000/user/${email}`, {
                method:'GET',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            .then(res=>res.json())
            .then(data => {
                setnormalUser(data.normalUser);
                setnormalUserLoading(false);
            })
        }
    }, [user])

    return [normalUser, normalUserLoading]
}

export default useUser;