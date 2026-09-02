import React, { useEffect, useState, useRef } from 'react'
import './style/slider.css'
import Clima from '../../public/clima.png'
import CORZEN from '../../public/CORZEN.png'
import Rosalito from '../../public/Rosalito-Ludoteca.png'
import Fortuna from '../../public/fortuna.png'
import Hotel from '../../public/hotelApp.png'
import Pokedex from '../../public/pokemonRea.png'
import RickYMorty from '../../public/rickAndMortyRea.png'
import Users from '../../public/userCrudRea.png'
import Shoes from '../../public/shoes.png'
import technologicalProducts from '../../public/technologicalProducts.png'
import flowerBlue from '../../public/flowerBlue.jpeg'
import flowerYellow from '../../public/flowerYellow.jpeg'
import projectUi from '../../public/proyectUI.jpeg'
import pdfExcel from '../../public/PDF-EXCEL.png'

const Comment = ({ language }) => {
  const [itemActive, setItemActive] = useState(0);
  const [thumbnailStart, setThumbnailStart] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const itemsRef = useRef([]);
  const thumbnailsRef = useRef([]);

  // Detectar si estamos en móvil
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 678);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const projects = [
    {
      img: CORZEN,
      title: language?.[0].TITLECORZEN,
      description: language?.[0].CORZEN,
      buttons: [
        { link: "https://corzenec.com/", text: language?.[0].LINK15 }
      ]
    },
    {
      img: Rosalito,
      title: language?.[0].TITLEROSALITO,
      description: language?.[0].ROSALITO,
      buttons: [
        { link: "https://rosalitoludoteca.com/", text: language?.[0].LINK16 }
      ]
    },
    {
      img: Clima,
      title: language?.[0].TITLETIME,
      description: language?.[0].TIME,
      buttons: [
        { link: "https://tiempo-climatico.onrender.com", text: language?.[0].LINK6 },
        { link: "https://github.com/JoelDavidJM/Tiempo.git", text: language?.[0].CODE }
      ]
    },
    {
      img: Fortuna,
      title: language?.[0].TITLELUCK,
      description: language?.[0].LUCK,
      buttons: [
        { link: "https://proyecto-galleta.onrender.com", text: language?.[0].LINK9 },
        { link: "https://github.com/JoelDavidJM/Galleta-Fortuna.git", text: language?.[0].CODE }
      ]
    },
    {
      img: Pokedex,
      title: language?.[0].TITLEPOKEDEX,
      description: language?.[0].POKEDEX,
      buttons: [
        { link: "https://pokedex-app-g8pp.onrender.com", text: language?.[0].LINK2 },
        { link: "https://github.com/JoelDavidJM/pokedex-app.git", text: language?.[0].CODE }
      ]
    },
    {
      img: RickYMorty,
      title: language?.[0].TITLERANDM,
      description: language?.[0].RANDM,
      buttons: [
        { link: "https://rickandmorty-dbz7.onrender.com", text: language?.[0].LINK3 },
        { link: "https://github.com/JoelDavidJM/rickandmorty.git", text: language?.[0].CODE }
      ],
      className: 'rickMorty'
    },
    {
      img: Users,
      title: language?.[0].TITLECRUD,
      description: language?.[0].CRUD,
      buttons: [
        { link: "https://usercrud-frontend-1h47.onrender.com", text: language?.[0].LINK4 },
        { link: "https://documenter.getpostman.com/view/33126947/2sA2rCUgih", text: language?.[0].LINK7 },
        { link: "https://github.com/JoelDavidJM/userCrud-FrontEnd.git", text: language?.[0].CODE },
        { link: "https://github.com/JoelDavidJM/userCrud-Back.git", text: language?.[0].CODE1 }
      ]
    },
    {
      img: Hotel,
      title: language?.[0].TITLEHOTEL,
      description: language?.[0].HOTEL,
      buttons: [
        { link: "https://boking.onrender.com", text: language?.[0].LINK5 },
        { link: "https://documenter.getpostman.com/view/33126947/2sA35D6jFU", text: language?.[0].LINK8 },
        { link: "https://github.com/JoelDavidJM/Hotels.git", text: language?.[0].CODE },
        { link: "https://github.com/JoelDavidJM/booking.git", text: language?.[0].CODE1 }
      ]
    },
    {
      img: flowerYellow,
      title: language?.[0].FLOWERYELLOW,
      description: language?.[0].FLOWERSAMARILLAS,
      buttons: [
        { link: "https://flowers-yellow.onrender.com", text: language?.[0].LINK11 },
        { link: "https://github.com/JoelDavidJM/flowers-yellow.git", text: language?.[0].CODE }
      ]
    },
    {
      img: projectUi,
      title: language?.[0].PROJECTUI,
      description: language?.[0].PROJECTOUI,
      buttons: [
        { link: "https://project-ui-rqa9.onrender.com", text: language?.[0].LINK13 },
        { link: "https://github.com/JoelDavidJM/Job.git", text: language?.[0].CODE }
      ]
    },
    {
      img: flowerBlue,
      title: language?.[0].FLOWERBLUE,
      description: language?.[0].FLOWERSBLUE,
      buttons: [
        { link: "https://flowers-blue1.onrender.com", text: language?.[0].LINK12 },
        { link: "https://github.com/JoelDavidJM/flowers-blue.git", text: language?.[0].CODE }
      ]
    },
    {
      img: pdfExcel,
      title: language?.[0].PDFYECXEL,
      description: language?.[0].PDFYECXELDESCRIPTION,
      buttons: [
        { link: "https://documenter.getpostman.com/view/33126947/2sB3HjN2MW", text: language?.[0].LINK14 },
        { link: "https://github.com/JoelDavidJM/proyect-PDF-EXCEL.git", text: language?.[0].CODE1 }
      ]
    },
    {
      img: technologicalProducts,
      title: language?.[0].TITLETECHNOLOGICALPRODUCTS,
      description: language?.[0].TECHNOLOGICALPRODUCTS,
      buttons: [
        { link: "https://pagejshtmlcss.onrender.com", text: language?.[0].LINK10 },
        { link: "https://github.com/JoelDavidJM/pageJSHTMLCSS.git", text: language?.[0].CODE }
      ]
    },
    {
      img: Shoes,
      title: language?.[0].TITLESHOES,
      description: language?.[0].SHOES,
      buttons: [
        { link: "https://pagehtmlcss.onrender.com", text: language?.[0].LINK9 },
        { link: "https://github.com/JoelDavidJM/-pagecsshtml.git", text: language?.[0].CODE }
      ]
    }
  ];

  const getThumbnailsToShow = () => {
    return isMobile ? 1 : 4;
  };

  const handleClickNext = () => {
    const newIndex = itemActive + 1 >= projects.length ? 0 : itemActive + 1;
    setItemActive(newIndex);
    const thumbnailsToShow = getThumbnailsToShow();
    // Ajustar el thumbnailStart si es necesario
    if (newIndex >= thumbnailStart + thumbnailsToShow || newIndex < thumbnailStart) {
      setThumbnailStart(Math.max(0, Math.min(newIndex - Math.floor(thumbnailsToShow / 2), projects.length - thumbnailsToShow)));
    }
  };

  const handleClickPrev = () => {
    const newIndex = itemActive - 1 < 0 ? projects.length - 1 : itemActive - 1;
    setItemActive(newIndex);
    const thumbnailsToShow = getThumbnailsToShow();
    // Ajustar el thumbnailStart si es necesario
    if (newIndex < thumbnailStart || newIndex >= thumbnailStart + thumbnailsToShow) {
      setThumbnailStart(Math.max(0, Math.min(newIndex - Math.floor(thumbnailsToShow / 2), projects.length - thumbnailsToShow)));
    }
  };

  const handleThumbnailNext = () => {
    const thumbnailsToShow = getThumbnailsToShow();
    if (thumbnailStart + thumbnailsToShow < projects.length) {
      setThumbnailStart(thumbnailStart + 1);
    }
  };

  const handleThumbnailPrev = () => {
    if (thumbnailStart > 0) {
      setThumbnailStart(thumbnailStart - 1);
    }
  };

  const handleThumbnailClick = (index) => {
    setItemActive(index);
    const thumbnailsToShow = getThumbnailsToShow();
    // Ajustar el thumbnailStart si es necesario
    if (index >= thumbnailStart + thumbnailsToShow || index < thumbnailStart) {
      setThumbnailStart(Math.max(0, Math.min(index - Math.floor(thumbnailsToShow / 2), projects.length - thumbnailsToShow)));
    }
  };

  useEffect(() => {
    // Actualizar clases activas cuando cambia itemActive
    if (itemsRef.current && thumbnailsRef.current) {
      itemsRef.current.forEach((item, index) => {
        if (item) {
          if (index === itemActive) {
            item.classList.add('active');
          } else {
            item.classList.remove('active');
          }
        }
      });

      thumbnailsRef.current.forEach((thumbnail, index) => {
        if (thumbnail) {
          if (index === itemActive) {
            thumbnail.classList.add('active');
          } else {
            thumbnail.classList.remove('active');
          }
        }
      });
    }
  }, [itemActive]);

  return (
    <div className="slider">
      <div className="list">
        {projects.map((project, index) => (
          <div
            key={index}
            ref={el => itemsRef.current[index] = el}
            className={`item ${index === itemActive ? 'active' : ''}`}
          >
            <img src={project.img} alt="" />
            <div className="content">
              {project.buttons.map((button, btnIndex) => (
                <button key={btnIndex} className="btn__proyect">
                  <a href={button.link} className='link__container' target="_blank" rel="noopener noreferrer">
                    {button.text}
                  </a>
                </button>
              ))}
              <h2 className={project.className}>{project.title}</h2>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>


      <div className="thumbnail-container">
        <div className="thumbnail-arrow left" onClick={handleThumbnailPrev}>
          <i className='bx bxs-left-arrow'></i>
        </div>
        <div className="thunbnall">
          {projects.slice(thumbnailStart, thumbnailStart + getThumbnailsToShow()).map((project, index) => {
            const globalIndex = thumbnailStart + index;
            return (
              <div
                key={globalIndex}
                ref={el => thumbnailsRef.current[globalIndex] = el}
                className={`item ${globalIndex === itemActive ? 'active' : ''}`}
                onClick={() => handleThumbnailClick(globalIndex)}
              >
                <img src={project.img} alt="" />
                <div className="content">
                  {project.title}
                </div>
              </div>
            );
          })}
        </div>
        <div className="thumbnail-arrow right" onClick={handleThumbnailNext}>
          <i className='bx bxs-right-arrow'></i>
        </div>
      </div>
    </div>
  )
}

export default Comment;