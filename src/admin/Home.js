import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '/node_modules/bootstrap-icons/font/bootstrap-icons.css';
import * as React from 'react';
import * as Bos from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../admin/Component';


function App() {

    const Navigate = useNavigate();

    React.useEffect(() => {
        if(!localStorage._token){
            Navigate("/login")
        }
    },[]);
    
    const logOut = () => {
        localStorage.clear();
        Navigate("/login")
    }

    return(
        <>
            <Navbar url="/akun/"/>
            <Bos.Container className='mt-5 pt-5 text-center'>
                <img src='/vector4.webp' className='w-100 rounded-5 mb-4 shadow-sm' style={{ height : "200px" }}/>
                <h3 className='fw-bold text-primary'>Welcome To Admin</h3>
                <p>Selamat Pagi, Rovino Ramadhani</p>
                <div className='d-flex justify-content-center gap-3 align-items-center' style={{ height : "max-content" }}>
                    <Link to={"/akun/my-account"}>
                        <Bos.Button variant='dark' className='fw-bold'>My account</Bos.Button>
                    </Link>
                    <Bos.Button variant='outline-danger' className='fw-bold' onClick={logOut}>Log Out</Bos.Button>
                </div>
            </Bos.Container>
        </>
    )
}

export default App;