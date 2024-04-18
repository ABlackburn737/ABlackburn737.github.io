import { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import linkedinIcon from '../assets/img/linkedinIcon.svg';
import githubIcon from '../assets/img/githubIcon.svg';

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
                <Nav.Link href="https://docs.google.com/document/d/1WoeMxLeHIptmiu0eWaufbv9C0xDg0wVU1VwrydPAyME/edit?usp=sharing" target="_blank" 
                        className={activeLink === 'resume' ? 'active navbar-link' : 'navbar-link'} 
                        onClick={() => onUpdateActiveLink('resume')}
                        >Resume</Nav.Link>
              </Nav>

              <span className="navbar-text">
                <div className="social-icon">
                    <a href="https://www.linkedin.com/in/alexander-blackburn-167573269/" target="_blank"><img src={linkedinIcon} alt=""/></a>
                    <a href="https://github.com/ABlackburn737" target="_blank"><img src={githubIcon} alt=""/></a>
                </div>
              </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    )
}