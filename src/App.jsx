
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Dashborad from './pages/Dashborad'
import Abaut from './pages/Abaut'
import Comment from './pages/Comment'
import Analytics from './pages/Analytics'
import Product from './pages/Product'
import Sidebar from './components/Sidebar'
import ProyectDos from './pages/ProyectDos'
import './style/styleColors.css'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import useFetch from './hooks/useFetch'

function App() {

  const change = useSelector(state => state.change); 

  const [changeUse, getChangeUse] = useFetch(change);

  useEffect(() => {
    getChangeUse(); // Fetch data based on the current change value
  }, [change]); // Re-run useEffect whenever change value updates

  const [isLoading, setIsLoading] = useState(true); 

  const fetchData = async () => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <img className='loading' src="https://media4.giphy.com/media/MydKZ8HdiPWALc0Lqf/giphy.gif?cid=6c09b952r6rjdlgatfuw1v92n00tqa9zrfhxujqc0u2cgdlv&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g" alt="" />;
  }

  return (
    <>
    <BrowserRouter>
      <Sidebar
      changeUse={changeUse}
      change={change}
      >
        <Routes>
        <Route path='/' element={<Dashborad
        changeUse={changeUse}
        />}/>
        <Route path='/inicio' element={<Dashborad
        changeUse={changeUse}
        />}/>
        <Route path='/sobre mi' element={<Abaut
        changeUse={changeUse}
        />}/>
        <Route path='/tecnologias' element={<Analytics
        changeUse={changeUse}
        />}/>
        <Route path='/proyectos' element={<Comment
        changeUse={changeUse}
        />}/>
        <Route path='/tecnologiasDos' element={<ProyectDos
        changeUse={changeUse}
        />}/>
        <Route path='/contacto' element={<Product
        changeUse={changeUse}
        />}/>
      </Routes>
      </Sidebar>
      </BrowserRouter>
    </>
      
     
  )
}

export default App
