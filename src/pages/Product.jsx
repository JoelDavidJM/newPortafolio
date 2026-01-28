import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './style/contact.css';
import { FaWhatsapp, FaPhone, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';

const ParticleField = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles = [];
    const particleCount = 50;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.fillStyle = `rgba(0, 217, 255, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <canvas ref={canvasRef} className="particle-canvas" />;
};

const Contact = ({ language }) => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm('service_2hig7yc', 'template_dfuyat8', form.current, {
        publicKey: '6BHgc2-US2W2eqzBd',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setIsSubmitting(false);
          setShowSuccess(true);
          setFormData({ user_name: '', user_email: '', message: '' });
        },
        (error) => {
          console.log('FAILED...', error.text);
          setIsSubmitting(false);
        },
      );
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCloseSuccess = () => {
    setShowSuccess(false);
  };

  const socialLinks = [
  { 
    icon: <FaWhatsapp />, 
    url: "https://wa.me/+593939675278", 
    label: 'WhatsApp',
    color: 'var(--social-whatsapp)'
  },
  { 
    icon: <FaPhone />, 
    url: "tel:+593939675278", 
    label: 'Phone',
    color: 'var(--social-phone)'
  },
  { 
    icon: <FaLinkedin />, 
    url: "https://linkedin.com/in/joel-jativa-8554a4298", 
    label: 'LinkedIn',
    color: 'var(--social-linkedin)'
  },
  { 
    icon: <FaGithub />, 
    url: "https://github.com/JoelDavidJM", 
    label: 'GitHub',
    color: 'var(--social-github)'
  }
];


  return (
    <div className="contact__wrapper">
      <ParticleField />
      
      {/* Success Modal */}
      <div className={`success-modal ${showSuccess ? 'active' : ''}`}>
        <div className="success-content">
          <div className="success-icon">
            <div className="success-circle">
              <svg className="checkmark" viewBox="0 0 52 52">
                <circle className="checkmark-circle" cx="26" cy="26" r="25" fill="none"/>
                <path className="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
              </svg>
            </div>
          </div>
          <h2 className="success-title">{language?.[0].MESSAGE || '¡Mensaje enviado!'}</h2>
          <p className="success-text">
              {language?.[0].MESSAGEOFCONTACT}
          </p>
          <button onClick={handleCloseSuccess} className="success-btn">
            {language?.[0].ACCEPT || 'Aceptar'}
          </button>
        </div>
      </div>

      <div className="contact__container">
        <div className="contact__header">
          <div className="header-decoration"></div>
          <h1 className="contact__title">
            {language?.[0].CONTACT1 || 'Contacto'}
          </h1>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact__form">
          <div className="form-group">
            <label className="form-label">
              <span className="label-text">{language?.[0].NAME || 'Nombre'}</span>
              <span className="label-icon">✦</span>
            </label>
            <input
              className="form-input"
              type="text"
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
              required
              placeholder={language?.[0].TITLENAME}
            />
            <div className="input-glow"></div>
          </div>

          <div className="form-group">
            <label className="form-label">
              <span className="label-text">Email</span>
              <span className="label-icon">✦</span>
            </label>
            <input
              className="form-input"
              type="email"
              name="user_email"
              value={formData.user_email}
              onChange={handleChange}
              required
              placeholder={language?.[0].TITLEEMAIL}
            />
            <div className="input-glow"></div>
          </div>

          <div className="form-group">
            <label className="form-label">
              <span className="label-text">{language?.[0].MESSAGE1 || 'Mensaje'}</span>
              <span className="label-icon">✦</span>
            </label>
            <textarea
              className="form-textarea"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <div className="input-glow"></div>
          </div>

          <button 
            type="submit" 
            className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
            disabled={isSubmitting}
          >
            <span className="btn-content">
              {isSubmitting ? (
                <>
                  <span className="spinner"></span>
                  {language === 'español' ? 'Enviando...' : 'Sending...'}
                </>
              ) : (
                <>
                  <FaPaperPlane className="btn-icon" />
                  {language?.[0].SEND || 'Enviar mensaje'}
                </>
              )}
            </span>
            <div className="btn-glow"></div>
          </button>
        </form>

        <div className="contact__social">
          <div className="social-divider">
            <span className="divider-line"></span>
            <span className="divider-text">
              {language?.[0].MESSAGECONTACT}
            </span>
            <span className="divider-line"></span>
          </div>

          <div className="social-links">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label={social.label}
                style={{ '--hover-color': social.color }}
              >
                <div className="social-icon-wrapper">
                  {social.icon}
                  <div className="icon-ripple"></div>
                </div>
                <span className="social-label">{social.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;