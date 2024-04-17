import React, { useEffect, useRef } from 'react'
import Navbar from '../../components/navbar'
import Header from '../../components/header'
import './experiences.css'
import { useState } from 'react'
import js from '../../logotechs-images/js.png'
import react from '../../logotechs-images/react.png'
import figma from '../../logotechs-images/figma.png'
import html from '../../logotechs-images/html.png'
import css from '../../logotechs-images/css.png'
import mysql from '../../logotechs-images/mysql.png'
import python from '../../logotechs-images/python.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
import '../../media-queries/experiences/experiences_media-queries.css'

function experiences() {
  const sectionRef = useRef(null);
  useEffect(() => {
    Aos.init()
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Adiciona a classe de animação quando a seção está visível
          entry.target.classList.add('tech');
        } else {
          // Remove a classe de animação quando a seção não está visível
          entry.target.classList.remove('tech');
        }
      });
    }, options);

    document.querySelectorAll('.tech').forEach((item) => {
      observer.observe(item);
    });

    return () => {
      document.querySelectorAll('.tech').forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, []);
  const [color, setColor] = useState(false);
  function changeIcon() {
    setColor(!color);
  }
  return (
    <>
      <div className={color ? 'background-shine' : 'background-shadow'}>
        <div className='container-header_navbar'>
          <div>
            <Navbar />
          </div>
          <div className='grid-header-navbar'>
            <Header />
            <div className={'container-header-experiences'}>
              <h1 className='title'>
                Cursos e experiência prática
              </h1>
              <h2 className='subtitle'>
                Meus cursos
              </h2>
              <div className='container-grid_content' data-aos='fade-up' data-aos-duration='3000'>
                <div className='course01' data-aos='fade-up' data-aos-duration='1000'>
                  <p className='year'>
                    2023-2024
                  </p>
                  <h2 className='courseType'>
                    Lógica de Programação <br /> & Algoritmos
                    <h2 style={{ fontSize: '9pt' }}>
                      Realizado por: <b>Curso em Video</b>
                    </h2>
                  </h2>
                  <p className='desc-text'>
                    Curso intensivo sobre os fundamentos de Lógica de Programação com Javascript e Algoritmos com Visualg.
                  </p>
                </div>
                <div className='course02'>
                  <p className='year'>
                    2023-2024
                  </p>
                  <h2 className='courseType'>
                    HTML5 & CSS3
                    <h2 style={{ fontSize: '9pt' }}>
                      Realizado por: <b>Curso em Video</b>
                    </h2>
                  </h2>
                  <p className='desc-text'>
                    Principais tags, Convenções, fundamentos da linguagem de marcação, fundamentos do CSS3, responsividade e integração com Javascript.
                  </p>
                </div>
                <div className='course03'>
                  <p className='year'>
                    2024-2024
                  </p>
                  <h2 className='courseType'>
                    Design Frontend <br /> & React.Js
                    <h2 style={{ fontSize: '9pt' }}>
                      Realizado por: <b>Alura</b>
                    </h2>
                  </h2>
                  <p className='desc-text'>
                    Noções de scripts com React, Layout Grid e Flexbox, Criação de rotas e componentes.
                  </p>
                </div>
                <section>
                  <h2 className='subtitle-tools'>
                    Tecnologias que possuo experiência.
                  </h2>
                  <div className='grid-techs'>
                    <div ref={sectionRef} className='tech'>
                      <img src={js} alt="js" />
                      <h2>
                        Javascript
                      </h2>
                    </div>
                    <div ref={sectionRef} className='tech'>
                      <img src={react} alt="react" />
                      <h2>
                        React.Js
                      </h2>
                    </div>
                    <div ref={sectionRef} className='tech'>
                      <img src={figma} alt="figma" />
                      <h2>
                        Figma
                      </h2>
                    </div>
                    <div ref={sectionRef} className='tech'>
                      <img src={html} alt="html" />
                      <h2>
                        HTML5
                      </h2>
                    </div>
                    <div ref={sectionRef} className='tech'>
                      <img src={css} alt="css" />
                      <h2>
                        CSS3
                      </h2>
                    </div>
                    <div ref={sectionRef} className='tech'>
                      <img src={mysql} alt="mysql" />
                      <h2>
                        MySQL
                      </h2>
                    </div>
                    <div ref={sectionRef} className='tech'>
                      <img src={python} alt="python" />
                      <h2>
                        Python
                      </h2>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
        <div className='container-config-color'>
          <span className={color ? 'fa-regular fa-moon' : 'fa-regular fa-sun'} onClick={changeIcon}></span>
        </div>
      </div>
    </>
  )
}

export default experiences