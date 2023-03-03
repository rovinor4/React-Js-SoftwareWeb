import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '/node_modules/bootstrap-icons/font/bootstrap-icons.css';
import * as React from 'react';
import * as Bos from 'react-bootstrap';



function App() {
    return(
        <Bos.Container>
            <Bos.Row className='justify-content-center'>
                <Bos.Col md={5} sm={12} className="my-5">
                    <Bos.Card className='rounded-4 shadow overflow-hidden'>
                        <Bos.Card.Img src='/vector3.webp'></Bos.Card.Img>
                        <Bos.Card.Body className='p-4'>
                            <h4 className='fw-bold text-primary m-0 mb-1'>Access for admin</h4>
                            <p className='text-muted m-0'>You can log in and register on this page</p>
                            <hr/>
                            <Bos.FormFloating className='mb-3'>
                                <Bos.FormControl placeholder=' '></Bos.FormControl>
                                <Bos.FormLabel>Your Email</Bos.FormLabel>
                            </Bos.FormFloating>
                            <Bos.FormFloating className='mb-3'>
                                <Bos.FormControl placeholder=' '></Bos.FormControl>
                                <Bos.FormLabel>Your Password</Bos.FormLabel>
                            </Bos.FormFloating>
                        </Bos.Card.Body>
                        <Bos.Card.Footer className='px-4 py-3 d-flex justify-content-end gap-3'>
                            <span className='btn btn-outline-dark'>Register</span>
                            <Bos.Button>Login</Bos.Button>
                        </Bos.Card.Footer>
                    </Bos.Card>
                </Bos.Col>
            </Bos.Row>
        </Bos.Container>
    )
}

export default App;