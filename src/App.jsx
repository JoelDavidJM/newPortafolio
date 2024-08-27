
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
import español from './utils/español.json';

function App() {

  const [language, setLanguage] = useState(español);

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
          language={language}
          setLanguage={setLanguage}
        >
          <Routes>
            <Route path='/' element={<Dashborad
              language={language}
            />} />
            <Route path='/inicio' element={<Dashborad
              language={language}
            />} />
            <Route path='/sobre mi' element={<Abaut
              language={language}
            />} />
            <Route path='/tecnologias' element={<Analytics
              language={language}
            />} />
            <Route path='/proyectos' element={<Comment
              language={language}
            />} />
            <Route path='/tecnologiasDos' element={<ProyectDos
              language={language}
            />} />
            <Route path='/contacto' element={<Product
              language={language}
            />} />
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </>


  )
}

export default App
