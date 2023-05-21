import {useState, useContext} from "react"
import { AuthContext } from "../../contexts/auth/authContext";
import {useNavigate} from "react-router-dom"



export const Login = () =>{
    const [email,setemail]= useState('')
    const [password,setpassword]= useState('');
    const navegate = useNavigate()


const auth =useContext(AuthContext)
    const handleLogin = async ()=>{
        if(email && password){
            const isLogged =await auth.signin(email, password)
            if(isLogged){
                navegate('/')
            }
        }
        
    }

    return(
        <div>
            <h2>Página Fechada</h2>

                <input 
                    type="text" 
                    value={email}
                    onChange={e => setemail(e.target.value)} 
                    placeholder="Digite seu email.."
                     />
                <input 
                    type="text" 
                    value={password} 
                    onChange={e => setpassword(e.target.value)}
                    placeholder="Digite sua senha" 
                    />

                <button onClick={handleLogin}>Logar</button>
        </div>
    )
}