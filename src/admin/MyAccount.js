import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '/node_modules/bootstrap-icons/font/bootstrap-icons.css';
import * as React from 'react';
import * as Bos from 'react-bootstrap';
import Navbar from '../admin/Component';
import $ from 'jquery'

function App() {
 

    return(
        <>
            <Navbar url="/admin/my-account"/>
            <Bos.Container className='shadow p-5 rounded-5 clearfix' style={{ marginTop : "100px", marginBottom : "100px"}}>
                <Bos.Row className='mb-4 gx-4 gy-3'>
                    <h4>User data information</h4>
                    <Bos.Col md={3}><Bos.FormLabel>Nama Lengkap</Bos.FormLabel></Bos.Col>
                    <Bos.Col md={9}><Bos.FormControl></Bos.FormControl></Bos.Col>
                    <Bos.Col md={3}><Bos.FormLabel>Email</Bos.FormLabel></Bos.Col>
                    <Bos.Col md={9}><Bos.FormControl></Bos.FormControl></Bos.Col>
                    <Bos.Col md={3}><Bos.FormLabel>Username</Bos.FormLabel></Bos.Col>
                    <Bos.Col md={9}><Bos.FormControl></Bos.FormControl></Bos.Col>
                    <Bos.Col md={12}>
                        <Bos.Button className='float-end d-block mt-4 '>Save</Bos.Button>
                    </Bos.Col>
                    <hr/>
                    <h4>Update Password</h4>
                    <Bos.Col md={3}><Bos.FormLabel>Old Password</Bos.FormLabel></Bos.Col>
                    <Bos.Col md={9}><Bos.FormControl></Bos.FormControl></Bos.Col>
                    <Bos.Col md={3}><Bos.FormLabel>New Password</Bos.FormLabel></Bos.Col>
                    <Bos.Col md={9}><Bos.FormControl></Bos.FormControl></Bos.Col>
                    <Bos.Col md={3}><Bos.FormLabel>Confirm the new password</Bos.FormLabel></Bos.Col>
                    <Bos.Col md={9}><Bos.FormControl></Bos.FormControl></Bos.Col>
                    <Bos.Col md={12}>
                        <Bos.Button className='float-end d-block mt-4'>Update Password And Log Out All</Bos.Button>
                    </Bos.Col>
                </Bos.Row>
            </Bos.Container>
        </>
    )
}

export default App;