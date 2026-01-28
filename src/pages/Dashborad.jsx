import React, { useEffect, useRef } from 'react';
import './style/dashborad.css';
import { useNavigate } from 'react-router-dom';
import * as THREE from 'three';
import DescargarCVEsp from '../../public/CV-E.pdf';
import DescargarCVEng from '../../public/CV-I.pdf';
import español from '../utils/español.json';
import english from '../utils/english.json';
import { FaLinkedin, FaGithub, FaPhone, FaWhatsapp } from 'react-icons/fa';

const ThreeBackground = () => {
  const mountRef = useRef(null);
  const animationFrameId = useRef(null);
  const particlesMeshRef = useRef(null);
  const particlesGeometryRef = useRef(null);
  const particlesMaterialRef = useRef(null);
  const starsRef = useRef(null);

  useEffect(() => {
    // Configuración de Three.js
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);

    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // Crear partículas principales mejoradas
    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 8000;
    const posArray = new Float32Array(particleCount * 3);
    const sizeArray = new Float32Array(particleCount);

    for (let i = 0; i < particleCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 15;
      posArray[i + 1] = (Math.random() - 0.5) * 15;
      posArray[i + 2] = (Math.random() - 0.5) * 15;
      sizeArray[i / 3] = Math.random() * 0.05 + 0.01;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('size', new THREE.BufferAttribute(sizeArray, 1));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.03,
      color: 0x00d9ff,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Crear estrellas adicionales (más pequeñas y lejanas)
    const starsGeometry = new THREE.BufferGeometry();
    const starsCount = 3000;
    const starsArray = new Float32Array(starsCount * 3);

    for (let i = 0; i < starsCount * 3; i++) {
      starsArray[i] = (Math.random() - 0.5) * 20;
    }

    starsGeometry.setAttribute('position', new THREE.BufferAttribute(starsArray, 3));
    const starsMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: 0xffffff,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    });

    const starsMesh = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(starsMesh);

    // Guardar referencias
    particlesMeshRef.current = particlesMesh;
    particlesGeometryRef.current = particlesGeometry;
    particlesMaterialRef.current = particlesMaterial;
    starsRef.current = starsMesh;

    camera.position.z = 5;

    // Variables para el mouse parallax
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animación mejorada
    const animate = () => {
      animationFrameId.current = requestAnimationFrame(animate);
      
      if (particlesMeshRef.current) {
        particlesMeshRef.current.rotation.x += 0.0003;
        particlesMeshRef.current.rotation.y += 0.0005;
        
        // Efecto parallax suave
        particlesMeshRef.current.position.x += (mouseX * 0.1 - particlesMeshRef.current.position.x) * 0.05;
        particlesMeshRef.current.position.y += (mouseY * 0.1 - particlesMeshRef.current.position.y) * 0.05;
      }

      if (starsRef.current) {
        starsRef.current.rotation.x += 0.0001;
        starsRef.current.rotation.y += 0.0002;
      }

      renderer.render(scene, camera);
    };
    animate();

    // Manejo de resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Limpieza
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId.current);

      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }

      renderer.dispose();
      if (particlesGeometryRef.current) particlesGeometryRef.current.dispose();
      if (particlesMaterialRef.current) particlesMaterialRef.current.dispose();
      if (starsRef.current) {
        starsRef.current.geometry.dispose();
        starsRef.current.material.dispose();
      }
    };
  }, []);

  return <div ref={mountRef} className="three-background" />;
};

const Dashboard = ({ language }) => {
  const navigate = useNavigate();

  const handleHeader = () => {
    navigate('/contacto');
  };

  const descargarCV = language === español ? DescargarCVEsp : DescargarCVEng;

const socialLinks = [
  { icon: <FaLinkedin />, url: "https://linkedin.com/in/joel-jativa-8554a4298", label: 'LinkedIn' },
  { icon: <FaGithub />, url: "https://github.com/JoelDavidJM", label: 'GitHub' },
  { icon: <FaPhone />, url: 'tel:+593939675278', label: 'Teléfono' },
  { icon: <FaWhatsapp />, url: "https://wa.me/+593939675278", label: 'WhatsApp' }
];

  return (
    <header id="home" className="header">
      <ThreeBackground />
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
        
        {/* Nueva línea descriptiva */}
        <p className="header__subtitle">
          {language?.[0].TITLEDESCRIPTIONHEADER}
        </p>

        <div className="header__social">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social__icon"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>

        <div className="div--contact">
        
          <div onClick={handleHeader} id="contacto" className="button-container">
            <a href="#" className="btn-double">
              <span>{language?.[0].CONTACTME}</span>
              <span>{language?.[0].CONTACTME}</span>
              <span>{language?.[0].CONTACTME}</span>
              <span>{language?.[0].CONTACTME}</span>
            </a>
          </div>
          <div className="button-container">
        <a className="btn-original" download
            href={descargarCV}
            id="downloadCV">
            <span>{language?.[0].DOWLOAND}</span>
            <span>{language?.[0].DOWLOAND}</span>
            <span>{language?.[0].DOWLOAND}</span>
            <span>{language?.[0].DOWLOAND}</span>
        </a>
    </div>
        </div>

        <div className="morph"></div>
      </div>

      <div className='img-astronauta'>
        <div className="glow-effect"></div>
        <img className='div__img-astronauta' src="/astronauta2.png" alt="Astronaut" />
      </div>
    </header>
  );
};

export default Dashboard;