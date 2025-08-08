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
import { useState } from 'react'
import español from './utils/español.json';

function App() {

  const [language, setLanguage] = useState(español);

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