import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link, Outlet} from 'react-router-dom'

function Layout() {
  return (
    <>
    
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand><Link to='About'>React-Bootstrap</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to='/'>Home</Link></Nav.Link>
            <Nav.Link><Link to='Services'>Services</Link></Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item><Link to='About'>About</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to='Services'>Services</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to='/'>Home</Link></NavDropdown.Item>
             
              <NavDropdown.Divider />
              <NavDropdown.Item><Link to='Gallary'>Other Link</Link></NavDropdown.Item>

            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <nav>
            <h1>Hello</h1>
            <ul>
                <li><Link to='/' style={{color:'black', textDecoration:'none', fontWeight:'bold', fontSize:'25px'}}>Home</Link></li>
                <li><Link to='About' style={{color:'black', textDecoration:'none', fontWeight:'bold', fontSize:'25px'}}>About</Link></li>
                <li><Link to='Services'  style={{color:'black', textDecoration:'none', fontWeight:'bold', fontSize:'25px'}}>Services</Link></li>
            </ul>
        </nav>
        <div>
            <Outlet/>
        </div>
        <footer>
            <h1>Footer</h1>
        </footer>
    </>
  );
}

export default Layout;