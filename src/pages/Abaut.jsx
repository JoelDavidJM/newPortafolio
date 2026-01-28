import React, { useEffect, useRef } from 'react';
import './style/abaut.css';
import * as THREE from 'three';

const ParticlesBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);

    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // Partículas flotantes
    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 3000;
    const posArray = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 20;
      posArray[i + 1] = (Math.random() - 0.5) * 20;
      posArray[i + 2] = (Math.random() - 0.5) * 20;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: 0x00d9ff,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    camera.position.z = 5;

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);
      
      particlesMesh.rotation.x += 0.0002;
      particlesMesh.rotation.y += 0.0003;
      
      particlesMesh.position.x += (mouseX * 0.05 - particlesMesh.position.x) * 0.05;
      particlesMesh.position.y += (mouseY * 0.05 - particlesMesh.position.y) * 0.05;

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
    };
  }, []);

  return <div ref={mountRef} className="particles-background" />;
};

const Abaut = ({ language }) => {
  const features = [
    {
      title: language?.[0].TITLE1,
      description: language?.[0].TITLE1DESCRIPTION,
      icon: 'https://i.pinimg.com/originals/0e/c9/89/0ec989dde8b5fc0deef4e5b09292b605.gif',
      isGif: true
    },
    {
      title: language?.[0].TITLE2,
      description: language?.[0].TITLE2DESCRIPTION,
      icon: 'https://cdn-icons-gif.flaticon.com/12525/12525796.gif',
      isGif: true
    },
    {
      title: language?.[0].TITLE3,
      description: language?.[0].TITLE3DESCRIPTION,
      icon: 'https://cdn-icons-gif.flaticon.com/10051/10051256.gif',
      isGif: true
    },
    {
      title: language?.[0].TITLE4,
      description: language?.[0].TITLE4DESCRIPTION,
      icon: 'https://cdn-icons-gif.flaticon.com/11184/11184155.gif',
      isGif: true
    }
  ];

  return (
    <div className="aboutMe_div" id="aboutMe">
      <ParticlesBackground />
      
      <div className="about-morph"></div>
      
      <section className="section">
        <h2 className="section__h2__title">
          {language?.[0].ABAUTME}
        </h2>
        
        <div className="description-container">
          <p className="section__p-1">
            {language?.[0].DESCRIPTION}
          </p>
          <div className="description-glow"></div>
        </div>

        <h3 className="section__h3">{language?.[0].UNIQUE}</h3>
        
        <div className="section__grid">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="feature-card-inner">
                <div className="feature-icon">
                  {feature.isGif ? (
                    <img 
                      src={feature.icon} 
                      alt={feature.title}
                      className="icon-gif"
                    />
                  ) : (
                    feature.icon
                  )}
                </div>
                <div className="card-glow"></div>
                <strong className="feature-title">{feature.title}</strong>
                <span className="feature-description">{feature.description}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Abaut;