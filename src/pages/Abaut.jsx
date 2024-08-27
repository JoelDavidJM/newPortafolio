import React from 'react'
import './style/abaut.css'

const Abaut = ({language}) => {

  return (
    <div className="aboutMe_div" id="aboutMe">
      <section id="aboutMe" className="section">
      <h2 className="section__h2__title" >{language?.[0].ABAUTME}</h2>
      <p className="section__p-1">
      {language?.[0].DESCRIPTION}
      </p>

      <h3 className="section__h3" >{language?.[0].UNIQUE}</h3>
      <ul className="section__ul">
        <li className="section__li">
          <strong>{language?.[0].TITLE1}</strong>
          <span >
          {language?.[0].TITLE1DESCRIPTION}
          </span>
        </li>
        <li className="section__li">
          <strong >{language?.[0].TITLE2}</strong>
          <span >
          {language?.[0].TITLE2DESCRIPTION}
          </span>
        </li>
        <li className="section__li">
          <strong >{language?.[0].TITLE3}</strong>
          <span>
          {language?.[0].TITLE3DESCRIPTION}
          </span>
        </li>
        <li className="section__li">
          <strong>{language?.[0].TITLE4}</strong>
          <span >
          {language?.[0].TITLE4DESCRIPTION}
          </span>
        </li>
      </ul>
    </section>

        </div>
  )
}

export default Abaut