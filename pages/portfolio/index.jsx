import React, { useEffect } from 'react'
import Navbar from '../../components/navbar'
import Header from '../../components/header'
import './portfolio.css'
import { useState } from 'react'
import { register } from 'swiper/element/bundle';
register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react'
import fischerdesktop from '../../images/fischerdesktop.jpg'
import fischermobile from '../../images/fischermobile.jpg'
import jjtlogin_desk from '../../images/selvagemjjt-login-desktop.png'
import jjtlogin_mob from '../../images/selvagemjjt-login-mobile.png'
import jjtrecord_desk from '../../images/selvagemjjt-record-desktop.png'
import jjtrecord_mob from '../../images/selvagemjjt-record-mobile.png'
import jjt_learners_login_desktop from '../../images/jjt-learners-login-desktop.png'
import jjt_learners_login_mobile from '../../images/jjt-learners-login-mobile.png'
import jjt_learners_mainpage_desktop from '../../images/jjt-learners-mainpage-desktop.png'
import jjt_learners_mainpage_mobile from '../../images/jjt-learners-mainpage-mobile.png'
import jjt_learners_page_desktop from '../../images/jjt-learners-page-desktop.png'
import jjt_learners_page_mobile from '../../images/jjt-learners-page-mobile.png'
import spotify_project_image from '../../images/projeto-spotify.png'
import '../../media-queries/portfolio/portfolio_media-queries.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

function portfolio() {
  useEffect(() => {
    Aos.init()
  })
  const [backdrop, setBackdrop] = useState({
    fischer: false,
    jjt: false,
    jjtlearners: false,
    spotify_project: false
  });
  function showBackdrop(project) {
    setBackdrop(prevState => ({
      ...prevState,
      [project]: true,
    }));
  }
  function hiddenBackdrop(project) {
    setBackdrop(prevState => ({
      ...prevState,
      [project]: false,
    }));
  }

  function isMobileImage(imageUrl) {
    const image = new Image();
    image.src = imageUrl;
    return image.width < image.height;
  }

  const [color, setColor] = useState(false);
  function changeIcon() {
    setColor(!color);
  }
  const datafischer = [
    {
      id: '1', image: fischerdesktop
    },
    {
      id: '2', image: fischermobile
    }
  ]
  const datajjt = [
    {
      id: '1', image: jjtlogin_desk
    },
    {
      id: '2', image: jjtlogin_mob
    },
    {
      id: '3', image: jjtrecord_desk
    },
    {
      id: '4', image: jjtrecord_mob
    }
  ]
  const datajjtrecord = [
    {
      id: '1', image: jjt_learners_login_desktop
    },
    {
      id: '2', image: jjt_learners_login_mobile
    },
    {
      id: '3', image: jjt_learners_mainpage_desktop
    },
    {
      id: '4', image: jjt_learners_mainpage_mobile
    },
    {
      id: '5', image: jjt_learners_page_desktop
    },
    {
      id: '6', image: jjt_learners_page_mobile
    }
  ]
  const spotify = [
    {
      id: '1', image: spotify_project_image
    }
  ]
  return (
    <>
      <div className={color ? 'background-shine' : 'background-shadow'}>
        <div className='container-header_navbar'>
          <div>
            <Navbar />
          </div>
          <div className='grid-header-navbar'>
            <Header />
            <div className='container-header-portfolio'>
              <h1 className='title' data-aos='fade-down' data-aos-duration='1500'>Confira meus projetos em destaque</h1>
              <section className='grid-projects'>
                <div className='grid-1'>
                  <div className='projects-container'>
                    <div
                      className={backdrop.fischer ? 'backdrop-template' : 'project-fischer'}
                      onMouseEnter={() => showBackdrop('fischer')}
                      onMouseOut={() => hiddenBackdrop('fischer')}
                    >
                      <Swiper
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        navigation
                      >
                        {datafischer.map((iteration) => (
                          <SwiperSlide key={iteration.id}>
                            <img
                              src={iteration.image}
                              alt='slider'
                              className={`slider-itens ${isMobileImage(iteration.image) ? 'mobile-image' : ''}`}
                            />
                          </SwiperSlide>
                        ))}
                      </Swiper>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div className='description-container-white'>
                          <h1>
                            React.js
                          </h1>
                          <h1>
                            Google Analytics
                          </h1>
                          <h1>
                            JavaScript
                          </h1>
                        </div>
                        {backdrop.fischer && (
                          <div
                            className='description-container-white'
                            onMouseEnter={() => showBackdrop('fischer')}
                          >
                            <h1 data-aos='zoom-in' data-aos-duration='1000' data-aos-offset='50'>
                              Acesse:
                              <span
                                style={{ color: 'black', textDecoration: 'underline', cursor: 'pointer' }}
                                onMouseEnter={() => showBackdrop('fischer')}
                                onClick={() => window.open('https://tintasfischer.onrender.com/#/home')}
                              >
                                clicando aqui
                              </span>
                            </h1>
                          </div>
                        )}
                      </div>
                    </div>
                    <div
                      className={backdrop.jjt ? 'backdrop-template_right' : 'project-jjt'}
                      onMouseEnter={() => showBackdrop('jjt')}
                      onMouseOut={() => hiddenBackdrop('jjt')}
                    >
                      <Swiper
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        navigation
                      >
                        {datajjt.map((iteration) => (
                          <SwiperSlide key={iteration.id}>
                            <img
                              src={iteration.image}
                              alt='slider'
                              className={`slider-itens ${isMobileImage(iteration.image) ? 'mobile-image' : ''}`}
                            />
                          </SwiperSlide>
                        ))}
                      </Swiper>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div className='description-container'>
                          <h1>
                            React.js
                          </h1>
                          <h1>
                            Express.Js
                          </h1>
                          <h1>
                            JavaScript
                          </h1>
                        </div>
                        {backdrop.jjt && (
                          <div
                            className='description-container'
                            onMouseEnter={() => showBackdrop('jjt')}
                          >
                            <h1 data-aos='zoom-in' data-aos-duration='1000' data-aos-offset='50'>
                              Acesse:
                              <span
                                style={{ textDecoration: 'underline', cursor: 'pointer' }}
                                onMouseEnter={() => showBackdrop('jjt')}
                                onClick={() => window.open('https://selvagem-jjt.onrender.com/')}
                              >
                                clicando aqui
                              </span>
                            </h1>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className='grid-2'>
                  <div className='projects-container'>
                    <div
                      className={backdrop.jjtlearners ? 'backdrop-template' : 'project-jjt-learners'}
                      onMouseEnter={() => showBackdrop('jjtlearners')}
                      onMouseOut={() => hiddenBackdrop('jjtlearners')}
                    >
                      <Swiper
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        navigation
                      >
                        {datajjtrecord.map((iteration) => (
                          <SwiperSlide key={iteration.id}>
                            <img
                              src={iteration.image}
                              alt='slider'
                              className={`slider-itens ${isMobileImage(iteration.image) ? 'mobile-image' : ''}`}
                            />
                          </SwiperSlide>
                        ))}
                      </Swiper>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div className='description-container'>
                          <h1>
                            React.js
                          </h1>
                          <h1>
                            Express.Js
                          </h1>
                          <h1>
                            JavaScript
                          </h1>
                        </div>
                        {backdrop.jjtlearners && (
                          <div
                            className='description-container-white'
                            onMouseEnter={() => showBackdrop('jjtlearners')}
                          >
                            <h1 data-aos='zoom-in' data-aos-duration='1000' data-aos-offset='50'>
                              Acesse: 
                              <span
                                style={{ color: 'white', textDecoration: 'underline', cursor: 'pointer' }}
                                onMouseEnter={() => showBackdrop('jjtlearners')}
                                onClick={() => window.open('https://selvagemjjt-alunos.onrender.com')}
                              >
                                clicando aqui
                              </span>
                            </h1>
                          </div>
                        )}
                      </div>
                    </div>
                    <div
                      className={backdrop.spotify_project ? 'backdrop-template_right' : 'project-spotify'}
                      onMouseEnter={() => showBackdrop('spotify_project')}
                      onMouseOut={() => hiddenBackdrop('spotify_project')}
                    >
                      <Swiper
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        navigation
                      >
                        {spotify.map((iteration) => (
                          <SwiperSlide key={iteration.id} style={{width:'675px'}}>
                            <img
                            style={{width:'100%'}}
                              src={iteration.image}
                              alt='slider'
                              className={`slider-itens ${isMobileImage(iteration.image) ? 'mobile-image' : ''}`}
                            />
                          </SwiperSlide>
                        ))}
                      </Swiper>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div className='description-container-white'>
                          <h1>
                            HTML/CSS
                          </h1>
                          <h1>
                            API
                          </h1>
                          <h1>
                            JavaScript
                          </h1>
                        </div>
                        {backdrop.spotify_project && (
                          <div
                            className='description-container-white'
                            onMouseEnter={() => showBackdrop('spotify_project')}
                          >
                            <h1 data-aos='zoom-in' data-aos-duration='1000' data-aos-offset='50'>
                              Acesse
                              <span
                                style={{ color: 'black', textDecoration: 'underline', cursor: 'pointer' }}
                                onMouseEnter={() => showBackdrop('spotify_project')}
                              >
                                clicando aqui
                              </span>
                            </h1>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
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

export default portfolio
