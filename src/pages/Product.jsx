import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import './style/contact.css'

const Product = ({changeUse}) => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

     emailjs
       .sendForm('service_2hig7yc', 'template_dfuyat8', form.current, {
         publicKey: '6BHgc2-US2W2eqzBd',
       })
       .then(
         () => {
           console.log('SUCCESS!');
         },
         (error) => {
           console.log('FAILED...', error.text);
         },
       );
  };

  const [click, setClick] = useState(false)

  const handelClick = () => {
  setClick(click ? false : true)
  }

  const handelExit = () => {
    setClick(click ? false : true)
  }

  return (
    
    <div className='contact__container'>
      <div className={`close ${click && 'open container__contact__logo'}`} >
      <section className='container__contact'>
    <h1 className='contact__mensage'>{changeUse?.[0].MESSAGE}</h1>
    <button onClick={handelExit} className={`close ${click && 'open btn'}`}>{changeUse?.[0].ACCEPT}</button>
    </section>
    </div>
      <h1 className='contact__container__title'>{changeUse?.[0].CONTACT1}</h1>
       <section className='contact__from'>
        <form ref={form} onSubmit={sendEmail} className='field'>
      <label className='form__title__name'>{changeUse?.[0].NAME}</label>
      <input className='form__name' type="text" name="user_name"/>
      <label className='form__title__email'>Email</label>
      <input className='form__email' type="email" name="user_email" placeholder="email@gmail.com"/>
      <label className='form__title__message'>{changeUse?.[0].MESSAGE1}</label>
      <textarea className='from__message' name="message" />
      <input onClick={handelClick} type="submit" value={changeUse?.[0].SEND}/>
    </form>
    
    
      </section>
      <section className='contact__section__logo'>
        
        <div className='contact__logo__container'>
          <div>
        <a href="https://wa.me/+593939675278"><i className='bx logo__contact bxl-whatsapp-square' ></i></a>
        </div>
        <div>
          <a href="mailto:joeljativa560@gmail.com"><i className='bx logo__contact bxs-envelope' ></i></a>
        </div>
        <div>
          <a href="tel:+593939675278"><i className='bx logo__contact bxs-phone-call'></i></a>
        </div>
        <div>
          <a href="https://linkedin.com/in/joel-jativa-8554a4298"><i className='bx logo__contact bxl-linkedin-square'></i></a>
        </div>
        <div>
          <a href="https://github.com/JoelDavidJM"><i className='bx logo__contact bxl-github' ></i></a>
        </div>
        </div>
      </section>
    </div>
    
  )
}

export default Product