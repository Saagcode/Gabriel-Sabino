import React from 'react'
import Navbar from '../../components/navbar'
import Header from '../../components/header'
import './home.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../media-queries/home/home_media-queries.css'

function home() {
  const [color, setColor] = useState(false);
  function changeIcon() {
    setColor(!color);
  }
  function downloadFile() {
    // Crie os dados do arquivo
    const filePath = "../../images/curriculo_GabrielSabino.pdf";

    fetch(filePath)
      .then(response => response.blob())
      .then(blob => {
        // Crie um URL temporário para o Blob
        const url = URL.createObjectURL(blob);

        // Crie um link <a> para o URL e simule um clique para iniciar o download
        const a = document.createElement('a');
        a.href = url;
        const mimeType = blob.type;
        a.download = 'curriculo_GabrielSabino'; // Nome do arquivo para download
        a.type = mimeType
        document.body.appendChild(a);
        a.click();

        // Limpe o URL temporário
        URL.revokeObjectURL(url);
      })
      .catch(error => console.error('Erro ao baixar o arquivo:', error));
  }

  const [curriculum, setCurriculum] = useState(false);
  function showCurriculum() {
    setCurriculum(true);
  }
  function hiddenCurriculum() {
    setCurriculum(false)
  }
  const [showPicture, setShowPicture] = useState(false);
  function showPic() {
    setShowPicture(true);
  }
  function hiddenPic() {
    setShowPicture(false);
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
            <div className='container-header-homepage'>
              <div className='section-container_presentation'>
                <div className='section-container_tittle_sub'>
                  <h1 className='tittle' data-aos="fade-left" data-aos-duration='2500' data-aos-offset="50">Olá, <br />Eu sou Gabriel Sabino.</h1>
                  <div id='wrapper'>
                    <div id='internal' data-aos="fade-right" data-aos-duration='2500' data-aos-offset="50">
                      <h1 className='sub-tittle' data-aos="fade-right" data-aos-duration='2500' data-aos-offset="50">Desenvolvedor</h1>
                      <ul>
                        <li className='list-item'>FRONTEND</li>
                        <li className='list-item'>REACT.JS</li>
                      </ul>
                    </div>
                  </div>
                  <div className='container-btn-jobs_cv'>
                    <div className='btn-organization'>
                      <div className='container-btn-projects'>
                        <Link to='/portfolio'>
                          <button className='btn-projects' onMouseEnter={showPic} onMouseOut={hiddenPic}>
                            Meus Projetos <span className='fa-solid fa-laptop-code' onMouseEnter={showPic} onMouseOut={hiddenPic} />
                          </button>
                        </Link>
                      </div>
                      <button onClick={() => downloadFile()} className='btn-cv' onMouseEnter={showCurriculum} onMouseOut={hiddenCurriculum}>
                        Download CV <span className='fa-solid fa-download' onMouseEnter={showCurriculum} onMouseOut={hiddenCurriculum} />
                      </button>
                    </div>
                    {showPicture && (
                      <div style={{ display: 'flex', justifyContent: 'center', opacity: '0.7' }}>
                        <div className='line-content' data-aos='zoom-in' data-aos-duration='2000' data-aos-offset='50' />
                      </div>
                    )}
                    {curriculum && (
                      <div style={{ display: 'flex', justifyContent: 'center', opacity: '0.7' }}>
                        <div className='line-content-curriculum' data-aos='zoom-in' data-aos-duration='2000' data-aos-offset='50' />
                      </div>
                    )}
                  </div>
                  {showPicture && (
                    <div className='container-line'>
                      <div className='line'>
                      </div>
                    </div>
                  )}
                  {curriculum && (
                    <div className='container-line-curriculum'>
                      <div className='line-curriculum'>
                      </div>
                    </div>
                  )}
                </div>
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

export default home