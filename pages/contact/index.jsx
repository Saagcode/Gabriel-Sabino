import React, { useEffect } from 'react'
import Navbar from '../../components/navbar'
import Header from '../../components/header'
import './contact.css'
import { useState } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import "sweetalert2/dist/sweetalert2.min.css";
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser'
import { mask, unMask } from 'remask'

function contact() {
  const [name, setUserName] = useState('');
  const [email, setUserEmail] = useState('');
  const [company, setUserCompany] = useState('');
  const [phone, setUserPhone] = useState('');
  const [description, setUserDescription] = useState('');

  function handleSubmit() {
    if (name === '' || email === '' || phone === '' || description === '') {
      Swal.fire({
        title: 'Algo deu errado.',
        text: 'Preencha todos os dados obrigatórios *',
        icon: 'error',
        confirmButtonText: 'Confirmar',
        buttonsStyling: false,
        customClass: {
          confirmButton: 'custom-confirm-swal-button'
        }
      });
      setUserName('');
      setUserEmail('');
      setUserCompany('');
      setUserPhone('');
      setUserDescription('');
      return;
    } else {
      const templateParams = {
        from_name: name,
        email: email,
        company: company,
        phone: phone,
        description: description
      }

      emailjs.send('service_kefnn4h', 'template_dyox76h', templateParams, '8WAMP9QzRSZDyK_Uz')
        .then((response) => {
          console.log('Email send with success', response.status, response.text)
        }, (error) => {
          console.log('Algo deu errado', error)
          Swal.fire({
            title: 'Ocorreu um erro inesperado',
            text: 'Tente novamente mais tarde',
            icon: 'error'
          })
        })
      Swal.fire({
        title: 'Mensagem Enviada!',
        text: 'Em breve, retornarei a sua mensagem.',
        icon: 'success',
        confirmButtonText: 'Confirmar',
        buttonsStyling: false,
        customClass: {
          confirmButton: 'custom-confirm-swal-button'
        }
      });
      setUserName('');
      setUserEmail('');
      setUserCompany('');
      setUserPhone('');
      setUserDescription('');
    }
  }

  useEffect(() => {
    Aos.init()
  })
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
            <div className='container-header-contact'>
              <h1 className='title' data-aos='fade-up' data-aos-duration='1500' data-aos-offset='50'>
                Vamos realizar algo incrível juntos!
              </h1>
              <form action="">
                <div className='user-data'>
                  <div>
                    <input
                      placeholder='Seu nome*'
                      type="text"
                      className='name'
                      onChange={e => setUserName(e.target.value)}
                      value={name}
                    />
                    <input
                      placeholder='E-mail*'
                      type="text"
                      className='email'
                      onChange={e => setUserEmail(e.target.value)}
                      value={email}
                    />
                  </div>
                  <div>
                    <input
                      placeholder='Nome da empresa'
                      type="text"
                      className='companyName'
                      onChange={e => setUserCompany(e.target.value)}
                      value={company}
                    />
                    <input
                      placeholder='Telefone*'
                      type="text"
                      className='phone'
                      onChange={e => setUserPhone(mask(unMask(e.target.value), ['(99) 9 9999-9999', '(99) 9999-9999']))}
                      value={phone}
                    />
                  </div>
                </div>
                <textarea
                  placeholder='Assunto ou uma breve descrição*'
                  className='desc'
                  cols="45"
                  rows="5"
                  onChange={e => setUserDescription(e.target.value)}
                  value={description}
                />
                <button
                  className='submit-form'
                  onClick={handleSubmit}
                >
                  Enviar Mensagem
                  <span className='fa-regular fa-paper-plane' />
                </button>
              </form>
              <div className='container-socialmedia'>
                <div>
                  <span
                    className='fa-brands fa-discord'
                    onClick={() => window.open('https://discord.gg/mqVfeAEQeH')}
                  />
                  <span
                    className='fa-brands fa-instagram'
                    onClick={() => window.open('https://www.instagram.com/sabino._g/')}
                  />
                  <span
                    className='fa-brands fa-linkedin-in'
                    onClick={() => window.open('https://www.linkedin.com/in/gabriel-sabino-073289211/')}
                  />
                </div>
              </div>
              <h1 className='subtitle'>
                Possui dúvidas, gostaria de conhecer mais sobre mim ou conversar a respeito do seu projeto? <br />Me envie uma mensagem ou acesse as minhas redes sociais acima e eu entrarei em contato o mais breve possível.
              </h1>
              <footer>
                <div className='grid-text-info'>
                  <div>
                    <h1>
                      Localização
                      <p>
                        São Bento do Sul, Brasil
                      </p>
                    </h1>
                  </div>
                  <div>
                    <h1>
                      Telefone
                      <p>
                        +55 (47) 9 9772-2370
                      </p>
                    </h1>
                  </div>
                  <div>
                    <h1>
                      E-mail
                      <p>
                        g_131n0@hotmail.com
                      </p>
                    </h1>

                  </div>
                </div>
              </footer>
            </div>
          </div>
        </div>
        <div className='container-config-color'>
          <span
            className={color ? 'fa-regular fa-moon' : 'fa-regular fa-sun'}
            onClick={changeIcon}
          />
        </div>
      </div>
    </>
  )
}

export default contact