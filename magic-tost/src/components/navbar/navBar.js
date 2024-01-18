import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavbarHeader(){
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
            <Navbar.Brand>
            <img
              src="/Image/magicTost.png"
              width="60"
              height="60"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            </Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="http://localhost:3000">Home</Nav.Link>
                <Nav.Link href="http://localhost:3000/screenBitcoin">Bitcoin</Nav.Link>
                <Nav.Link href="http://localhost:3000/screenEthereum">Ethereum</Nav.Link>
                <Nav.Link href="http://localhost:3000/screenXrp">Xrp</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
    )
}

export default NavbarHeader;