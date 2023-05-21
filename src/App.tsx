import {useContext} from 'react';
import './App.css';
import { Route, Routes , Link, useNavigate } from 'react-router-dom'
import {Home} from './pages/home/index'
import {Private} from './pages/private'
import { RequireAuth } from './contexts/auth/RequireAuth';
import { AuthContext } from './contexts/auth/authContext';

function App() {
;
const auth = useContext(AuthContext)
const navigate = useNavigate()
const handleLogout= async()=>{
  await auth.sigout()
  navigate('/')
  
  }

  return (
    <div className="App">
      <header className="App-header">
       <h1>header do site</h1>
       <nav>
            <Link to="/">Home</Link>
            <Link to="/private">Private</Link>
            {auth.user && <button onClick={handleLogout}>SAIR</button>}
            

        </nav>
      </header>
      <hr />
     <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/private" element={<RequireAuth><Private/></RequireAuth>}/>   
        
      </Routes> 
    </div>
  );
}

export default App;
