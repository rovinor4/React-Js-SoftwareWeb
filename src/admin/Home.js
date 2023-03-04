import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '/node_modules/bootstrap-icons/font/bootstrap-icons.css';
import * as React from 'react';
import * as Bos from 'react-bootstrap';
import Navbar from '../admin/Component';


function App() {
    return(
        <>
            <Navbar url="/admin/home"/>
            <Bos.Container className='mt-5 pt-5 text-center'>
                <img src='/vector4.webp' className='w-100 rounded-5 mb-4 shadow-sm' style={{ height : "200px" }}/>
                <h3 className='fw-bold text-primary'>Welcome To Admin</h3>
                <p>Selamat Pagi, Rovino Ramadhani</p>
                <div className='d-flex justify-content-center gap-3 align-items-center' style={{ height : "max-content" }}>
                    <Bos.Button variant='dark' className='fw-bold'>My account</Bos.Button>
                    <Bos.Button variant='outline-danger' className='fw-bold'>Log Out</Bos.Button>
                </div>
            </Bos.Container>
        </>
    )
}

export default App;