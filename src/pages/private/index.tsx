import {useContext} from 'react'
import { AuthContext } from '../../contexts/auth/authContext'

export const Private = () =>{
    const auth = useContext(AuthContext)

    return(
        <div>
            <h2>Página private</h2>
            <h3>Bem vindo {auth.user?.name}</h3>
        </div>
    )
}