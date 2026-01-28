import React, { useEffect, useRef, useState } from 'react'
import './style/analytics.css'
import { useNavigate } from 'react-router-dom';

const Analytics = ({language}) => {
  const navigate = useNavigate()
  const sectionRef = useRef(null)
  const [selectedTech, setSelectedTech] = useState(null)

  const handelProyect = () => {
    navigate('/tecnologiasDos')
  }

  const openModal = (tech) => {
    setSelectedTech(tech)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedTech(null)
    document.body.style.overflow = 'auto'
  }

  // Efecto de partículas en hover
  useEffect(() => {
    const cards = document.querySelectorAll('.tech-card-wrapper');
    
    cards.forEach(card => {
      card.addEventListener('mouseenter', (e) => {
        createParticles(e.currentTarget);
      });
    });

    return () => {
      cards.forEach(card => {
        card.removeEventListener('mouseenter', () => {});
      });
    };
  }, []);

  const createParticles = (element) => {
    for (let i = 0; i < 3; i++) {
      const particle = document.createElement('div');
      particle.className = 'tech-particle';
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      element.appendChild(particle);
      
      setTimeout(() => particle.remove(), 1000);
    }
  };

  const technologies = [
    {
      name: 'HTML',
      logo: 'logo1',
      description: language?.[0].HTML,
      color: '#ff0000',
      gradient: 'linear-gradient(135deg, #ff6b6b 0%, #ff0000 100%)',
      detailedInfo: {
        intro: language?.[0].HTML_INTRO,
        learned: language?.[0].HTML_LEARNED,
        level: language?.[0].HTML_LEVEL || 'Avanzado'
      }
    },
    {
      name: 'JavaScript',
      logo: 'logo2',
      description: language?.[0].JS,
      color: '#f7df1e',
      gradient: 'linear-gradient(135deg, #f7df1e 0%, #ffaa00 100%)',
      detailedInfo: {
        intro: language?.[0].JS_INTRO,
        learned: language?.[0].JS_LEARNED,
      }
    },
    {
      name: 'CSS',
      logo: 'logo3',
      description: language?.[0].CSS,
      color: '#0066ff',
      gradient: 'linear-gradient(135deg, #00d9ff 0%, #0066ff 100%)',
      detailedInfo: {
        intro: language?.[0].CSS_INTRO,
        learned: language?.[0].CSS_LEARNED 
      }
    },
    {
      name: 'Git',
      logo: 'logo4',
      description: language?.[0].GIT,
      color: '#ff8800',
      gradient: 'linear-gradient(135deg, #ff8800 0%, #ff4400 100%)',
      detailedInfo: {
        intro: language?.[0].GIT_INTRO,
        learned: language?.[0].GIT_LEARNED 
      }
    },
    {
      name: 'React',
      logo: 'logo5',
      description: language?.[0].REACT,
      color: '#00eeff',
      gradient: 'linear-gradient(135deg, #61dafb 0%, #00d9ff 100%)',
      detailedInfo: {
        intro: language?.[0].REACT_INTRO,
        learned: language?.[0].REACT_LEARNED 
      }
    },
    {
      name: 'Node.js',
      logo: 'logo6',
      description: language?.[0].NODE,
      color: '#1cf309',
      gradient: 'linear-gradient(135deg, #68d391 0%, #1cf309 100%)',
      detailedInfo: {
        intro: language?.[0].NODE_INTRO,
        learned: language?.[0].NODE_LEARNED 
      }
    }
  ];

  return (
    <div className="technologies" id="technologies" ref={sectionRef}>
      <div className="technologies__background">
        <div className="tech-orb tech-orb-1"></div>
        <div className="tech-orb tech-orb-2"></div>
        <div className="tech-orb tech-orb-3"></div>
      </div>

      <div className='technologies__container__title'>
        <h2 className="technologies__section__h2">
          <span className="tech-title-glow">{language?.[0].TECHNOLOGY}</span>
        </h2>
        <button className='technologies__btn' onClick={handelProyect}>
          <span>{language?.[0].SEEMORE}</span>
          <span className="btn-glow"></span>
        </button>
      </div>
       
      <section className="section-technoligi">
        {technologies.map((tech, index) => (
          <div 
            key={index} 
            className='tech-card-wrapper'
            style={{'--tech-color': tech.color, '--tech-gradient': tech.gradient}}
          >
            <div className='tech-card-inner'>
              <div className='tech-card-glow'></div>
              
              <div className="tech-content">
                <div className="tech-logo-container">
                  <div className="tech-hologram">
                    <div className={`tech-logo ${tech.logo}`}></div>
                    <div className="hologram-ring ring-1"></div>
                    <div className="hologram-ring ring-2"></div>
                    <div className="hologram-ring ring-3"></div>
                  </div>
                  <div className="tech-base"></div>
                  <div className="tech-light"></div>
                </div>

                <div className='tech-info'>
                  <h3 className="tech-name">{tech.name}</h3>
                  <p className='tech-description'>{tech.description}</p>
                  <button 
                    className='tech-read-more'
                    onClick={() => openModal(tech)}
                  >
                    {language?.[0].READ_MORE || 'Leer más'}
                    <span className="read-more-arrow">→</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="tech-card-border"></div>
          </div>
        ))}
      </section>

      {/* Modal */}
      {selectedTech && (
        <div className="tech-modal-overlay" onClick={closeModal}>
          <div 
            className="tech-modal-content" 
            onClick={(e) => e.stopPropagation()}
            style={{'--modal-color': selectedTech.color}}
          >
            <button className="tech-modal-close" onClick={closeModal}>
              ✕
            </button>

            <div className="tech-modal-header">
              <div className="tech-modal-logo-wrapper">
                <div className={`tech-modal-logo ${selectedTech.logo}`}></div>
              </div>
              <h2 className="tech-modal-title">{selectedTech.name}</h2>
            </div>

            <div className="tech-modal-body">
              {/* DESCRIPCIÓN E INTRO COMBINADAS EN UN SOLO PÁRRAFO */}
              <div className="tech-modal-section">
                <p className="tech-modal-intro-combined">{selectedTech.detailedInfo.intro}</p>
              </div>

              {/* LISTA DE LO APRENDIDO */}
              <div className="tech-modal-section">
                <h3 className="tech-modal-subtitle">
                  <span className="subtitle-icon">📚</span>
                  {language?.[0].TECH_LEARNED_TITLE || 'Conocimientos Adquiridos'}
                </h3>
                <ul className="tech-modal-list">
                  {selectedTech.detailedInfo.learned.map((item, idx) => (
                    <li key={idx} className="tech-modal-list-item">
                      <span className="list-bullet">▹</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="tech-modal-footer">
              <div className="tech-modal-gradient-bar"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Analytics