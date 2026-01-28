import React, { useEffect, useState } from 'react'
import './style/proyectDos.css'
import { useNavigate } from 'react-router-dom';

const ProyectDos = ({language}) => {
    const navigate = useNavigate()
    const [selectedTech, setSelectedTech] = useState(null)
    
    const handelReset = () => {
        navigate('/tecnologias')
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
         name: 'GitHub',
         logo: 'logo9',
         description: language?.[0].GITHUB,
         color: '#a8a4a4',
         gradient: 'linear-gradient(135deg, #888484ce 0%, #d4cfcfa9 100%)',
         detailedInfo: {
           intro: language?.[0].GITHUB_INTRO,
           learned: language?.[0].GITHUB_LEARNED || [
             'Control de versiones distribuido con repositorios locales y remotos',
             'Gestión de repositorios remotos: push, pull, fetch y sincronización',
             'Colaboración mediante Pull Requests y code reviews',
             'GitHub Actions para CI/CD: automatización de tests, builds y deployments',
             'Issues tracking y Project Management con GitHub Projects',
             'GitHub Pages para deployment de sitios estáticos',
             'Fork, clone y sincronización de repositorios open source',
             'Gestión de branches, tags y releases para versionado',
             'GitHub CLI para operaciones desde terminal',
             'Wikis y documentación de proyectos',
             'Security features: dependabot, code scanning y secret scanning',
             'GitHub Packages para gestión de dependencias privadas'
           ],
           level: language?.[0].GITHUB_LEVEL || 'Avanzado'
         }
       },
       {
         name: 'PHP Laravel',
         logo: 'logo7',
         description: language?.[0].LARAVEL,
         color: '#f7801e',
         gradient: 'linear-gradient(135deg, #cf7a19 0%, #f1aa1c 100%)',
         detailedInfo: {
           intro: language?.[0].LARAVEL_INTRO,
           learned: language?.[0].LARAVEL_LEARNED 
         }
       },
       {
         name: 'Symfony',
         logo: 'logo8',
         description: language?.[0].SYMFONY,
         color: '#3880ec',
         gradient: 'linear-gradient(135deg, #3a65f5 0%, #0066ff 100%)',
         detailedInfo: {
           intro: language?.[0].SYMFONY_INTRO,
           learned: language?.[0].SYMFONY_LEARNED
         }
       },
       {
         name: 'SQL Server',
         logo: 'logo10',
         description: language?.[0].SQLSERVER,
         color: '#cb61f5ce',
         gradient: 'linear-gradient(135deg, #f35cf3ce 0%, #e967e9c4 100%)',
         detailedInfo: {
           intro: language?.[0].SQLSERVER_INTRO,
           learned: language?.[0].SQLSERVER_LEARNED 
         }
       },
       {
         name: 'PgAdmin',
         logo: 'logo12',
         description: language?.[0].PGADMIN,
         color: '#787fbe9c',
         gradient: 'linear-gradient(135deg, #3a43ca 0%, #4a64da 100%)',
         detailedInfo: {
           intro: language?.[0].PGADMIN_INTRO,
           learned: language?.[0].PGADMIN_LEARNED 
         }
       },
       {
        name: 'DBeaver',
        logo: 'logo11',
        description: language?.[0].DBEAVER,
        color: '#b3662f',
        gradient: 'linear-gradient(135deg, #A0522D 0%, #6F4E37 100%)',
        detailedInfo: {
          intro: language?.[0].DBEAVER_INTRO,
          learned: language?.[0].DBEAVER_LEARNED
        }
       }
     ];
   
     return (
       <div className="technologies" id="technologies" >
         <div className="technologies__background">
           <div className="tech-orb tech-orb-1"></div>
           <div className="tech-orb tech-orb-2"></div>
           <div className="tech-orb tech-orb-3"></div>
         </div>
   
         <div className='technologies__container__title'>
           <h2 className="technologies__section__h2">
             <span className="tech-title-glow">{language?.[0].TECHNOLOGY}</span>
           </h2>
           <button className='technologies__btn' onClick={handelReset}>
             <span>{language?.[0].PREV}</span>
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

export default ProyectDos