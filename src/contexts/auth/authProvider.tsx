import { useState,useEffect } from "react";
import { AuthContext } from "./authContext";
import { User } from "../../types/User";
import { useApi } from "../../hooks/useApi";



export const AuthProvider = ({children}:{children: JSX.Element}) =>{
    const [user,setUser] = useState<User | null>(null)
    const api = useApi();

   useEffect(()=>{
        const validateToken = async ()=>{
            const storageData = localStorage.getItem('authToken')
            if(storageData){
                const data = await api.validityToken(storageData);
                    if(data.user) {
                       setUser(data.user)
                    }
               
                
            }
             }
        validateToken()
   },[])


    const signin = async (email:string, password:string) => {
        const data = await api.signin(email,password)
        if(data.user && data.token){
            setToken(data.token)
        setUser(data.user)

        return true
    }
        return false
    }
    const sigout = async() => {
        await api.logout();
        setUser(null)
        setToken('')
    }

    const setToken = (token:string) =>{
        localStorage.setItem('authToken',token)
    }
    return(
        <AuthContext.Provider value={{user, signin, sigout}}>
            {children}
        </AuthContext.Provider>
    )
}
      
