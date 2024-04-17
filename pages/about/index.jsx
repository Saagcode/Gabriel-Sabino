import React from 'react'
import Navbar from '../../components/navbar'
import Header from '../../components/header'
import './about.css'
import { useState } from 'react'
import '../../media-queries/about/about_media-queries.css'

function about() {
  const [color, setColor] = useState(false);
  function changeIcon() {
    setColor(!color);
  }
  function downloadFile() {
    // Crie os dados do arquivo
    const filePath = "../../images/curriculo_GabrielSabino.png";

    fetch(filePath)
      .then(response => response.blob())
      .then(blob => {
        // Crie um URL temporário para o Blob
        const url = URL.createObjectURL(blob);

        // Crie um link <a> para o URL e simule um clique para iniciar o download
        const a = document.createElement('a');
        a.href = url;
        a.download = 'curriculo_GabrielSabino'; // Nome do arquivo para download
        document.body.appendChild(a);
        a.click();

        // Limpe o URL temporário
        URL.revokeObjectURL(url);
      })
      .catch(error => console.error('Erro ao baixar o arquivo:', error));
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
            <div className='container-header-about'>
              <h1 className='title-presentation' data-aos='fade-up' data-aos-duration='1500'>
                Transformando códigos em arte a cada interface.
              </h1>
              <div className='container-description-grid'>
                <div className='personal-description'>
                  <h2 data-aos='zoom-in' data-aos-duration='2000'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur itaque rerum, culpa nemo omnis ad temporibus delectus repellendus ab, voluptatem totam maxime obcaecati aut laboriosam at ea, deleniti quod est?
                  </h2>
                  <h2 data-aos='zoom-in' data-aos-duration='2000'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo voluptates ipsam obcaecati minus dicta reprehenderit ab repellendus vero debitis est consectetur blanditiis similique nihil delectus, aspernatur facere nisi voluptate ipsa!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia aperiam fuga adipisci doloremque ipsum nisi repellat minus vel iusto magnam molestias molestiae necessitatibus odio delectus, veritatis voluptatibus magni omnis reiciendis.
                  </h2>
                </div>
                <div className='personal-data' data-aos='fade-right' data-aos-duration='3000' data-aos-offset='5' >
                  <h2 className='.title-presentation'>
                    Nome
                    <h1 className='subtitle-presentation'>
                      Gabriel Vinicius Moraes Sabino
                    </h1>
                  </h2>
                  <h2 className='.title-presentation'>
                    Telefone
                    <h1 className='subtitle-presentation'>
                      +55 (47 9 97722370)
                    </h1>
                  </h2>
                  <h2 className='.title-presentation'>
                    E-mail
                    <h1 className='subtitle-presentation'>
                      g_131n0@hotmail.com
                    </h1>
                  </h2>
                  <h2 className='.title-presentation'>
                    Localização
                    <h1 className='subtitle-presentation'>
                      São Bento do Sul, Brasil
                    </h1>
                  </h2>
                </div>
              </div>
              <button onClick={() => downloadFile()} className='btn-cv-about'>
                Download CV <span className='fa-solid fa-download' />
              </button>
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

export default about