import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '/node_modules/bootstrap-icons/font/bootstrap-icons.css';
import * as React from 'react';
import * as Bos from 'react-bootstrap';
import Navbar from '../Navbar';

function App() {
    return(
        <>
            <Navbar/>
            <Bos.Container className='mt-5 py-5 text-center'>
                <img src='/error.webp' width={350}  className="d-block mx-auto"/>
                <h1 className='fw-bold text-primary'><i className='bi bi-exclamation-triangle text-danger'></i> Not Page</h1>
                <p>No page was found, http status code: 404</p>
                <a href='/'>
                    <Bos.Button className='fw-bold'>Back To Home</Bos.Button>
                </a>
            </Bos.Container>
        </>

    );
}

export default App;
