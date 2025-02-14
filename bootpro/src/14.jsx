import { Button, Row, Col, Container } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaCar} from "react-icons/fa"; 



function prac(){
    return(

        <>
        {/* copy from react bootstrap> navbars>live editor */}
            <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <Container>
        <h1>This is normal Container with margin</h1>
      </Container>
      <Container fluid>
        <h1>This is Container flued without margin</h1>
        </Container>

        <Container>
            <Row>
                <Col lg={6} md={6} sm={12} className='bg-success  p-3'>
                <h1>First Column</h1>
                <Button>Hello</Button>
                </Col>
                <Col lg={6} md={6} sm={12} className='bg-danger text-white p-4 g-0'>
                <h1 variant='success'>Second Column</h1>
                <Button variant='success'> <FaCar style={{color:"skyblue", fontSize:"100"}}/></Button>
                </Col>
            </Row>
        </Container>
        </>
    )
}
export default prac