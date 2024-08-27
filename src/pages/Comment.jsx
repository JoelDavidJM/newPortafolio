import React, { useEffect, useState } from 'react'
import './style/slider.css'
import Clima from '../../public/clima.png'
import Fortuna from '../../public/fortuna.png'
import Hotel from '../../public/hotelApp.png'
import Pokedex from '../../public/pokemonRea.png'
import RickYMorty from '../../public/rickAndMortyRea.png'
import Users from '../../public/userCrudRea.png'

const Comment = ({language}) => {

  const [items, setItems] = useState([]);
    const [thumbnails, setThumbnails] = useState([]);
    const [countItem, setCountItem] = useState(0);
    const [itemActive, setItemActive] = useState(0);
  
    useEffect(() => {
      const items = document.querySelectorAll('.slider .list .item');
      const thumbnails = document.querySelectorAll('.thunbnall .item');
      setItems(items);
      setThumbnails(thumbnails);
      setCountItem(items.length);
    }, []);
  
    useEffect(() => {
      showSlider();
    }, [itemActive]);
  
    const handleClickNext = () => {
      setItemActive(itemActive + 1 >= countItem ? 0 : itemActive + 1);
    };
  
    const handleClickPrev = () => {
      setItemActive(itemActive - 1 < 0 ? countItem - 1 : itemActive - 1);
      showSlider(); 
    };
  
    const showSlider = () => {
      items.forEach((item, index) => {
        if (index === itemActive) {
          item.classList.add('active');
        } else {
          item.classList.remove('active'); 
        }
      });
  
      thumbnails.forEach((thumbnail, index) => {
        if (index === itemActive) {
          thumbnail.classList.add('active');
        } else {
          thumbnail.classList.remove('active'); 
        }
      });
    };

    useEffect(() => {
        thumbnails.forEach((thumbnail, index) => {
            thumbnail.addEventListener('click', () => {
                setItemActive(index);
                showSlider();
            });
        });
        
      
        return () => {
            thumbnails.forEach((thumbnail, index) => {
                thumbnail.removeEventListener('click', () => {
                    setItemActive(index);
                    showSlider();
                });
            });
        };
    }, [thumbnails]);

  return (
    <div className="slider">
    <div  className="list">
        <div className="item active">
            <img src={Clima} alt="" /> 
            <div className="content">
                <button className="btn__proyect"><a href="https://tiempo-climatico.onrender.com" className='link__container'>{language?.[0].LINK6}</a></button>
                <button className="btn__proyect"><a href="https://github.com/JoelDavidJM/Tiempo.git" className='link__container'>{language?.[0].CODE}</a></button>                
                <h2>{language?.[0].TITLETIME}</h2>
                <p>{language?.[0].TIME}</p>
            </div>
        </div>
        <div className="item">
            <img src={Fortuna} alt="" />
            <div className="content">
            <button className="btn__proyect"><a href="https://proyecto-galleta.onrender.com" className='link__container'>{language?.[0].LINK1}</a></button>
            <button className="btn__proyect"><a href="https://github.com/JoelDavidJM/Galleta-Fortuna.git" className='link__container'>{language?.[0].CODE}</a></button> 
                <h2>{language?.[0].TITLELUCK}</h2>
                <p>{language?.[0].LUCK}</p>
            </div>
        </div>
        <div className="item">
            <img src={Pokedex} alt="" />
            <div className="content">
            <button className="btn__proyect"><a href="https://pokedex-app-g8pp.onrender.com" className='link__container'>{language?.[0].LINK2}</a></button>
            <button className="btn__proyect"><a href="https://github.com/JoelDavidJM/pokedex-app.git" className='link__container'>{language?.[0].CODE}</a></button>
                <h2>{language?.[0].TITLEPOKEDEX}</h2>
                <p>{language?.[0].POKEDEX}</p>
            </div>
        </div>
        <div className="item">
            <img src={RickYMorty} alt="" />
            <div className="content">
            <button className="btn__proyect"><a href="https://rickandmorty-dbz7.onrender.com" className='link__container'>{language?.[0].LINK3}</a></button>
            <button className="btn__proyect"><a href="https://github.com/JoelDavidJM/rickandmorty.git" className='link__container'>{language?.[0].CODE}</a></button>
                <h2 className='rickMorty'>{language?.[0].TITLERANDM}</h2>
                <p>{language?.[0].RANDM}</p>
            </div>
        </div>
        <div className="item">
            <img src={Users} alt="" />
            <div className="content">
              <button className="btn__proyect"><a href="https://usercrud-frontend-1h47.onrender.com" className='link__container'>{language?.[0].LINK4}</a></button>
              <button className="btn__proyect"><a href="https://documenter.getpostman.com/view/33126947/2sA2rCUgih" className='link__container'>{language?.[0].LINK7}</a></button>
              <button className="btn__proyect"><a href="https://github.com/JoelDavidJM/userCrud-FrontEnd.git" className='link__container'>{language?.[0].CODE}</a></button>
              <button className="btn__proyect"><a href="https://github.com/JoelDavidJM/userCrud-Back.git" className='link__container'>{language?.[0].CODE1}</a></button>
            <h2>{language?.[0].TITLECRUD}</h2>
                <p>{language?.[0].CRUD}</p>
            </div>
        </div>
        <div className="item">
            <img src={Hotel} alt="" />
            <div className="content">
              <button className="btn__proyect"><a href="https://boking.onrender.com" className='link__container'>{language?.[0].LINK5}</a></button>
              <button className="btn__proyect"><a href="https://documenter.getpostman.com/view/33126947/2sA35D6jFU" className='link__container'>{language?.[0].LINK8}</a></button>
              <button className="btn__proyect"><a href="https://github.com/JoelDavidJM/Hotels.git" className='link__container'>{language?.[0].CODE}</a></button>
              <button className="btn__proyect"><a href="https://github.com/JoelDavidJM/booking.git" className='link__container'>{language?.[0].CODE1}</a></button>
            <h2>{language?.[0].TITLEHOTEL}</h2>
                <p>{language?.[0].HOTEL}</p>
            </div>
        </div>
    </div>

    <div className="arrow">
        <button onClick={handleClickPrev} id="prev"><i className='bx bxs-left-arrow'></i></button>
        <button onClick={handleClickNext} id="next"><i className='bx bxs-right-arrow'></i></button>
    </div>

    <div  className="thunbnall">
        <div className="item active">
            <img src={Clima} alt="" />
            <div className="content">
            {language?.[0].TITLETIME}
            </div>
        </div>
        <div className="item">
            <img src={Fortuna} alt="" />
            <div className="content">
            {language?.[0].TITLELUCK}
            </div>
        </div>
        <div className="item">
            <img src={Pokedex} alt="" />
            <div className="content">
            {language?.[0].TITLEPOKEDEX}
            </div>
        </div>
        <div className="item">
            <img src={RickYMorty} alt="" />
            <div className="content">
            {language?.[0].TITLERANDM}
            </div>
        </div>
        <div className="item">
            <img src={Users} alt="" />
            <div className="content">
            {language?.[0].TITLECRUD}
            </div>
        </div>
        <div className="item">
            <img src={Hotel} alt="" />
            <div className="content">
            {language?.[0].TITLEHOTEL}
            </div>
        </div>
    </div>

</div>
  )
}

export default Comment