import * as React from 'react';
import * as Bos from 'react-bootstrap';


function App() {

    return(
        <Bos.Navbar className="shadow-s, bg-white" fixed="top" expand="lg">
        <Bos.Container fluid>
          <Bos.Navbar.Brand href="#home" className="text-white fw-bold">Admin</Bos.Navbar.Brand>
          <Bos.Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Bos.Navbar.Collapse id="basic-navbar-nav">
            <Bos.Nav className="me-auto gap-3">
            </Bos.Nav>
          </Bos.Navbar.Collapse>
        </Bos.Container>
      </Bos.Navbar>
    );
}

export default App;