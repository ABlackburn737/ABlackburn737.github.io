import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import comingSoonImg from "../assets/img/futureProjectHereImg.png"
import 'animate.css';

export const Projects = () => {

  const gameProjects = [
    {
        title: "Coming Soon!",
        description: "Who knows what I might do next...",
        imgUrl: comingSoonImg,
        projectUrl: "#projects",
    },
    {
        title: "Coming Soon!",
        description: "Who knows what I might do next...",
        imgUrl: comingSoonImg,
        projectUrl: "#projects",
    },
    {
        title: "Coming Soon!",
        description: "Who knows what I might do next...",
        imgUrl: comingSoonImg,
        projectUrl: "#projects",
    },
    {
        title: "Coming Soon!",
        description: "Who knows what I might do next...",
        imgUrl: comingSoonImg,
        projectUrl: "#projects",
    },
    {
        title: "Coming Soon!",
        description: "Who knows what I might do next...",
        imgUrl: comingSoonImg,
        projectUrl: "#projects",
    },
    {
        title: "Coming Soon!",
        description: "Who knows what I might do next...",
        imgUrl: comingSoonImg,
        projectUrl: "#projects",
    },
  ];

  const webProjects = [
    {
        title: "Portfolio Website",
        description: "You're looking at it! This website is an ongoing project utilizing React and GitHub pages to create an interactive webpage for hosting my portfolio. Have a look around!",
        imgUrl: comingSoonImg,
        projectUrl: "https://github.com/ABlackburn737/ABlackburn737.github.io",
    },
    {
        title: "Coming Soon!",
        description: "Who knows what I might do next...",
        imgUrl: comingSoonImg,
        projectUrl: "#projects",
    },
    {
        title: "Coming Soon!",
        description: "Who knows what I might do next...",
        imgUrl: comingSoonImg,
        projectUrl: "#projects",
    },
    {
        title: "Coming Soon!",
        description: "Who knows what I might do next...",
        imgUrl: comingSoonImg,
        projectUrl: "#projects",
    },
    {
        title: "Coming Soon!",
        description: "Who knows what I might do next...",
        imgUrl: comingSoonImg,
        projectUrl: "#projects",
    },
    {
        title: "Coming Soon!",
        description: "Who knows what I might do next...",
        imgUrl: comingSoonImg,
        projectUrl: "#projects",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <div>
                <h2>Projects</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Game Development</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Web Development</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp">
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          gameProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          webProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}