import React, { useEffect, useState } from 'react';
import { FaBars } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import './style/sidebar.css';
import ReactSwitch from 'react-switch';
import { useThemeContext } from '../contect/ThemaContext';
import Photo from '../../public/phtotoOfFace.png';
import español from '../utils/español.json';
import english from '../utils/english.json';

const Sidebar = ({ children, language, setLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { contextTheme, setContextTheme } = useThemeContext();
  const [checked, setChecked] = useState(true);

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth < 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const menuItem = [
    {
      path: "/",
      name: language?.[0].NAME1,
      icon: <i className='bx bxs-home-alt-2'></i>
    },
    {
      path: "/sobre mi",
      name: language?.[0].NAME2,
      icon: <i className='bx bxs-user-circle'></i>
    },
    {
      path: "/tecnologias",
      name: language?.[0].NAME3,
      icon: <i className='bx bxs-category'></i>
    },
    {
      path: "/proyectos",
      name: language?.[0].NAME4,
      icon: <i className='bx bxs-dice-6'></i>
    },
    {
      path: "/contacto",
      name: language?.[0].NAME5,
      icon: <i className='bx bxs-phone'></i>
    }
  ];

  const handleSwitch = (nextChecked) => {
    setContextTheme((state) => (state === 'Light' ? 'Dark' : 'Light'));
    setChecked(nextChecked);
  };

  const handleClick = () => {
    setLanguage(language === español ? english : español); // Cambia el idioma
  };

  return (
    <div id={contextTheme} className='container'>
      <div style={{ width: isOpen ? "10em" : "3em" }} className="sidebar sidebar1">
        <div className="top_section">
          <img style={{ display: isOpen ? "block" : "none" }} className="logo" src={Photo} alt="" />
          <div style={{ marginLeft: isOpen ? "20px" : "0px" }} id={contextTheme} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        <div className='sidebar__div-icons'>
          <div className='sidebar__media'>
            {menuItem.map((item, index) => (
              <NavLink to={item.path} key={index} className={'link' || 'active'}>
                <div className='icom'>{item.icon}</div>
                <div style={{ display: windowWidth < 768 ? "none" : (isOpen ? "block" : "none") }} className="link_text">{item.name}</div>
              </NavLink>
            ))}
          </div>
          <div className='sidebar__choose__container'>
            <div className='change__mode'>
              <ReactSwitch
                onChange={handleSwitch}
                checked={checked}
                onColor="#86d3ff"
                onHandleColor="#2693e6"
                handleDiameter={15}
                uncheckedIcon={false}
                checkedIcon={false}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                height={10}
                width={28}
                className="react-switch"
                id="material-switch"
              />
            </div>
            <div className='change__lengish' onClick={handleClick}>
              <button>
                <i className='bx bx-globe'></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
