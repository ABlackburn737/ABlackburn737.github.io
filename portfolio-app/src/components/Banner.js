import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/headerImg.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(200 - Math.random() * 100);
  const toRotate = [ "Software Engineer", "Indie Game Dev", "Permanent Learner." ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(200 - Math.random() * 100);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <div>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi, I'm Alex!`} </h1>
                <h1><span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Software Engineer", "Indie Game Dev", "Permanent Learner." ]'><span className="wrap">{text}</span></span></h1>
                <p>I'm a passionate developer with a knack for coding. I've been playing games and working with computers all my life, and I wanted to make a career out of it. Problem solving is like puzzles to me, and I devote each day to learning more. Let's learn together.</p>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div>
                <img src={headerImg} alt="Header Img"/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}