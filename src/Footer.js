import * as React from 'react';
import * as Bos from 'react-bootstrap';


function Footer(props){
    return(
      <footer className='py-4 bg-light'>
        <Bos.Container>
            <p className="text-center text-primary fw-bold">© 2022 Company, Inc</p>
        </Bos.Container>
      </footer>
    );
}

export default Footer;
