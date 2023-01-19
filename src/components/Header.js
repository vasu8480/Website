import { Container, Nav, Navbar } from "react-bootstrap";
import { SiGmail, SiGithub } from "react-icons/si";
import { GrLinkedin } from "react-icons/gr";
import { Link } from "react-router-dom";
import "./Header.css"

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" style={{ height: 70 }} className="nav">
      <Container>
        <Navbar.Brand>
          <Link to="/">vasu_web</Link>
        </Navbar.Brand>
        <Nav className="head">
          <Nav.Link href="http://vasu8480@gmail.com/">
            <SiGmail size="20px" color="#3b60c4" />
            Email
          </Nav.Link>
          <Nav.Link href="https://www.linkedin.com/in/vasu-nurukurthi-231204180/">
            <GrLinkedin size="20px" color="#3b60c4" />
            Linkedln
          </Nav.Link>
          <Nav.Link href="https://www.credly.com/earner/earned">
            Credly
          </Nav.Link>
          <Nav.Link href="https://github.com/vasu8480">
            <SiGithub size="20px" color="dark" /> Git Hub
          </Nav.Link>
          <Nav.Link href="" >
            <GrLinkedin size="20px" color="yellow" />
            LeetCode
          </Nav.Link>
          <Nav.Link href="Download The Resume!" style={{ fontWeight: 'bold' }}>Download The Resume!</Nav.Link>
        </Nav>
        <button className="but">
          <a>Hire me!</a>
        </button>

      </Container>
    </Navbar>
  );
};
export default Header;
