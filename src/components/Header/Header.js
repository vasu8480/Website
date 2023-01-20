import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";
import myFile from "./vasu_resume.pdf";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" style={{ height: 60 }}>
      <Container className="head">
        <Navbar.Brand>
          <Link to="/">Nurukurthi Vasu</Link>
        </Navbar.Brand>
        <Nav className="head" id="li">
          <Nav.Link href="http://vasu8480@gmail.com/">Email</Nav.Link>
          <Nav.Link href="https://www.linkedin.com/in/vasu-nurukurthi-231204180/">
            Linkedln
          </Nav.Link>
          <Nav.Link href="https://www.credly.com/earner/earned">
            Credly
          </Nav.Link>
          <Nav.Link href="https://github.com/vasu8480">Git-Hub</Nav.Link>
          <Nav.Link href="">LeetCode</Nav.Link>
          <Nav.Link href={myFile} style={{ fontWeight: "bold" }}>
            <button class="button-os">
              <a> Download The Resume!</a>
            </button>
          </Nav.Link>
        </Nav>
        <button className="but">
          <a>Hire me!</a>
        </button>
      </Container>
    </Navbar>
  );
};
export default Header;
