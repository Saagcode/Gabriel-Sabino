import React, { useState, useEffect } from 'react'
import './header.css'
import { Link, useLocation } from 'react-router-dom';

function Header() {
    const [contactHover, setContactHover] = useState(false);
    function handleContactHover() {
        setContactHover(true);
    }
    function handleContactHoverLeave() {
        setContactHover(false);
    }
    const [activeItem, setActiveItem] = useState(0);
    function handleItemClick(index) {
        setActiveItem(index);
    }
    const location = useLocation();
    useEffect(() => {
        switch (location.pathname) {
            case '/home':
                setActiveItem(0);
                break;
            case '/portfolio':
                setActiveItem(1);
                break;
            case '/about':
                setActiveItem(2);
                break;
            case '/experiences':
                setActiveItem(3);
                break;
            case '/contact':
                setActiveItem(4);
                break;
            default:
                setActiveItem(0);
        }
    }, [location.pathname]);
    return (
        <section className={'menu-container'}>
            <div className='grid-menu'>
                <div className='container-li' data-aos='fade-right' data-aos-duration='1000'>
                    <ul className='menu'>
                        <li>
                            <Link to={'/home'}>
                                <p className={activeItem === 0 ? 'active' : ''} onClick={() => handleItemClick(0)}>
                                    Home
                                </p>
                            </Link>
                        </li>
                        <li >
                            <Link to={'/portfolio'}>
                                <p className={activeItem === 1 ? 'active' : ''} onClick={() => handleItemClick(1)}>
                                    Portfólio
                                </p>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/about'}>
                                <p className={activeItem === 2 ? 'active' : ''} onClick={() => handleItemClick(2)}>
                                    Sobre mim
                                </p>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/experiences'}>
                                <p className={activeItem === 3 ? 'active' : ''} onClick={() => handleItemClick(3)}>
                                    Experiência
                                </p>
                            </Link>
                        </li>
                        <li className={activeItem === 4 ? 'active' : ''} onClick={() => handleItemClick(4)}>
                            <Link to={'/contact'}>
                                <p className={activeItem === 4 ? 'active' : ''} onClick={() => handleItemClick(4)}> 
                                    Contato
                                </p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='container-btn'>
                <button className='btn-whatsapp' onMouseEnter={handleContactHover} onMouseLeave={handleContactHoverLeave} onClick={() => window.open(`https://wa.me/${'+5547997722370'}/?text=${encodeURIComponent('Gostaria de fazer um orçamento')}`)}>
                    {contactHover ? (
                        <span className="fa-brands fa-whatsapp"></span>
                    ) : (
                        <span className="title-contact">Entre em contato</span>
                    )}
                </button>
            </div>
        </section>
    )
}

export default Header
