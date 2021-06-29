import {BrowserRouter} from 'react-router-dom'
import AppRouter from './components/AppRouter';
import Navbar from './components/NavBar/NavBar';
import './App.css';
import {useAuthState} from 'react-firebase-hooks/auth'
import { Context } from './index';
import Load from './components/Load/load';
import { useContext } from 'react';


function App() {

  const {auth} = useContext(Context)
  const [user, loading, error] = useAuthState(auth)

  if (loading) {
    return <Load />
  }
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
