import { useAuth0 } from '@auth0/auth0-react';
import Home from './pages/Home';
import {Login} from './auth/Login';
import { Logout} from './auth/Logout';
import { Link,Route,Routes } from 'react-router-dom';
import { Favorites } from './pages/Favorites';
import SearchBar from './components/SearchBar';
import "../src/styles.css";
<link href="https://fonts.googleapis.com/css2?family=Belanosima:wght@700&display=swap" rel="stylesheet"></link>



function App () {
  const {isAuthenticated}=useAuth0();
  return (
    <div className="App">
      <header className="App-header">
         {isAuthenticated ? (
          <>

<nav className="navbar bg-dark navbar-dark border-bottom navbar-expand-lg">
<p className="navbar-text">LA CASA DE LOS FAMOSOS</p>
  <Link to="/home" className="navbar-brand">Home</Link>
  <Link to="/favorites" className="navbar-brand">Favorites</Link>
  <Link to="/logout" className="navbar-brand">Logout</Link>
</nav>
          </>
         ): (
          <Login/>
         )}  
      </header>
      <div >
      <img class="img-responsive watermark d-flex justify-content-center align-items-center" src=''/>
        <div>
        


        </div>
      
      </div>
       
      <Routes>
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/home' element={<SearchBar />} />
        <Route path='/logout' element={<Logout />} />
      </Routes>
    </div>
  );
}

export default App;
