import * as React from 'react';
import * as Bos from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

function Navigation(props){
    var dataURL = {
      "Home" : "/",
      "Price" : "/price",
      "Download" : "/download",
      "News" : "/news",
    }
    const objEntries = Object.entries(dataURL);
  
    const items = objEntries.map(([key, value]) => {
  
      var x;
      if(props.url == value){
        x = <Bos.Nav.Link as={NavLink} to={value} className="fw-bold text-primary bg-white rounded-pill px-4">{key}</Bos.Nav.Link>
      }else{
        x = <Bos.Nav.Link as={NavLink} to={value} className="text-white opacity-75">{key}</Bos.Nav.Link>   
      }
      
      return(x);
    });
  
    return items;
}

const ButtonLogin = () => {
    var x = null;

    if(localStorage._token){
      x = <Link to={"/akun"}><Bos.Button variant='outline-light'>Open My Account</Bos.Button></Link>
    }else{
      x = <Link to={"/login"}><Bos.Button variant='outline-light'>Login Or Register</Bos.Button></Link>
    }

    return x;
}


function Navbar(props){
    return(
        <Bos.Navbar bg="primary" className="shadow" fixed="top" expand="lg">
        <Bos.Container>
          <Bos.Navbar.Brand href="/" className="text-white fw-bold">Rovino React </Bos.Navbar.Brand>
          <Bos.Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Bos.Navbar.Collapse id="basic-navbar-nav">
            <Bos.Nav className="me-auto gap-3">
              <Navigation url={props.url}/>
            </Bos.Nav>
            
            <ButtonLogin/>
          </Bos.Navbar.Collapse>
        </Bos.Container>
      </Bos.Navbar>
    );
}

export default Navbar;
