import { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/navIcon1.svg';
import navIcon2 from '../assets/img/navIcon2.svg';
import navIcon3 from '../assets/img/navIcon3.svg';

// Navigation bar for the top of screen

export const NavBar = () => {
    // Storage for active link and if page has been scrolled
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    // State change for scrolled when user scrolls
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
          <Container>
            <Navbar.Brand href="/">
                <img src={logo} alt="Logo"/>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggle-icon"></span>
            </Navbar.Toggle>

            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home"
                        className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} 
                        onClick={() => onUpdateActiveLink('home')}
                        >Home</Nav.Link>
                <Nav.Link href="#projects"
                        className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} 
                        onClick={() => onUpdateActiveLink('projects')}
                        >Projects</Nav.Link>
                <Nav.Link href="#resume" 
                        className={activeLink === 'resume' ? 'active navbar-link' : 'navbar-link'} 
                        onClick={() => onUpdateActiveLink('resume')}
                        >Resume</Nav.Link>
              </Nav>

              <span className="navbar-text">
                <div className="social-icon">
                    <a href="#"><img src={navIcon1} alt=""/></a>
                    <a href="#"><img src={navIcon2} alt=""/></a>
                    <a href="#"><img src={navIcon3} alt=""/></a>
                </div>

                <button className="vvd" onClick={() => console.log('connect')}>
                    <span>Let's Connect!</span>
                </button>
              </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    )
}