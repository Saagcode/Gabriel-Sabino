import React, { useEffect } from 'react'
import './navbar.css'
import '@fortawesome/fontawesome-free/css/all.css';
import user_img from '../../images/user.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom';
import '../../media-queries/navbar/navbar_media-queries.css'

function Navbar() {
    useEffect(() => {
        Aos.init()
    })

    return (
        <section className='navbar-container' data-aos='fade-right' data-aos-duration='1500' data-aos-offset='50'>
            <nav className='navbar'>
                <div className='navbar-content'>
                    <figure>
                        <fieldset>

                            <legend className='my-name'>

                                Gabriel Sabino
                            </legend>

                            <img src={user_img} alt="user" />
                        </fieldset>
                        <figcaption>
                            Especialização
                            <h1>
                                Web designer & <br />Desenvolvedor Frontend
                            </h1>
                        </figcaption>
                    </figure>

                    <div>
                        Estabelecido em:
                        <h1>
                            São Bento do Sul, Brasil
                        </h1>
                    </div>

                    <div className='footer-navbar_container'>
                        <section className='social-media_container'>
                            <div className='social-media_content'>
                                <span className='fa-brands fa-github' onClick={() => window.open('https://github.com/Saagcode')} />
                                <span className='fa-brands fa-linkedin' onClick={() => window.open('https://www.linkedin.com/in/gabriel-sabino-073289211/')} />
                                <span className='fa-brands fa-square-instagram' onClick={() => window.open('https://www.instagram.com/sabino._g/')} />
                            </div>
                        </section>
                        <Link to={'/contact'}>
                            <button className='btn_work-together'>
                                <p>
                                    Vamos Trabalhar Juntos!
                                </p>
                            </button>
                        </Link>
                    </div>

                </div>
            </nav>
        </section>
    )
}

export default Navbar