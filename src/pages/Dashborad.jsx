import React from 'react';
import './style/dashborad.css';
import { useNavigate } from 'react-router-dom';
import DescargarCVEsp from '../../public/EspañolCv.pdf';
import DescargarCVEng from '../../public/InglishCv.pdf';
import español from '../utils/español.json';
import english from '../utils/english.json';

const Bubbles = () => {

  return (
    <div className="bubbles">
      {[11, 12, 24, 10, 14, 23, 48, 16, 19, 20, 22, 25, 18, 21, 15, 43, 26, 17, 13, 28].map((i) => (
        <span key={i} style={{ '--i': i }} > </span>
      ))}
    </div>
  );
};

const Dashboard = ({language}) => {


  const navigate = useNavigate(); 

  const handleHeader = () => {
    navigate('/contacto');
  };

  const descargarCV = language === español ? DescargarCVEsp : DescargarCVEng;

  return (
    <header id="home" className="header">
      <Bubbles />
      <div className='container__header'>
         <h1 className="headerh1">
        Joel Játiva
      </h1>
      <h2 
        className="header__h2" 
        data-translate-es="Desarrollador web Full Stack"
        data-translate-en="Full Stack Web Developer"
      >
        {language?.[0].TITLECV}
      </h2>
      <div className="div--contact">
        <div onClick={handleHeader} id="contactMeBtn" className="div__a">
          <span>{language?.[0].CONTACTME}</span>
          <span className="material-symbols-outlined"><i className='bx bxs-phone'></i></span>
        </div>
        <a 
          className="div__a" 
          download 
          href={descargarCV}
          id="downloadCV"
        >
          {language?.[0].DOWLOAND}
        </a>
      </div>
      <div className="morph"></div>
      </div>
     
    </header>
  );
};

export default Dashboard;
