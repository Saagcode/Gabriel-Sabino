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
                    Acredito que se existe uma palavra que possa me definir deve ser "Porquê" e isso se deve ao fato de que sempre tive curiosidades e decorrente disso dia após dia eu me pergunto, "Porquê?" e principalmente, "Qual é o seu porquê?". Desde muito jovem sempre fui aficionado pelo mundo do design gráfico, utilizei por muito tempo ferramentas como Photoshop e After Effects, porém nunca me indaguei sobre o porquê, apenas gostava daquilo.
                  </h2>
                  <h2 data-aos='zoom-in' data-aos-duration='2000'>
                    Como sempre fui curioso nas áreas que envolviam tecnologia e me chamavam atenção um bom tempo depois eu conheci a programação e após pesquisas e estudos de forma autodidata encontrei a área do Frontend, isso abriu minha mente de uma forma peculiar. Acredito que após encontrar essa vertente da programação eu posso afirmar que estou bem mais próximo de encontrar o meu porquê, e não exatamente porque o desenvolvimento Frontend me empolga, mas sim porque se tornou a ferramenta para que eu possa alcançar algo maior, e isso não tem a ver com conquistas financeiras ou pessoais. Mas sim, inspirar outras pessoas e acordar todos os dias para ser 1% melhor dia após dia, ter um propósito e transmitir a todos à minha volta o meu porquê através do meu código, que em minha concepção eu o considero uma arte.
                  </h2>
                </div>
                <div className='personal-data'>
                  <h2 className='.title-presentation'>
                    Nome
                    <h1 className='subtitle-presentation' >
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