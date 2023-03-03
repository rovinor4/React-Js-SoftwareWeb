import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '/node_modules/bootstrap-icons/font/bootstrap-icons.css';
import * as React from 'react';
import * as Bos from 'react-bootstrap';
import Navbar from '../Navbar';
import Footer from '../Footer';

function App() {
    return(
        <>
            <Navbar url="/news"/>

            <Bos.Container className='my-5 pt-5'>
                <div className='text-center'>
                    <h3 className='fw-bold text-primary'>News</h3>
                </div>
                <Bos.InputGroup>
                    <Bos.FormControl placeholder='Masukan Keyword Pencarian'></Bos.FormControl>
                    <Bos.InputGroup.Text className='btn btn-primary'><i className='bi bi-search me-1'></i> Search</Bos.InputGroup.Text>
                </Bos.InputGroup>
                    
                <Bos.Row className='g-4 mt-3'>
                    <Bos.Col md={4}>
                        <Bos.Card className='shadow rounded-5 overflow-hidden'>
                            <Bos.CardImg src='card-img.webp'/>
                            <Bos.Card.Body>
                                <Bos.Badge className='bg-primary'>Pemrograman</Bos.Badge>
                                <h4 className='my-3'>Has been released an android based application</h4>
                                <p className='text-muted'>Lorem ipsum dolor sit amet consectetur adipiscing elit potenti lectus fermentum ornare..</p>
                                <Bos.Button className='my-2 w-100 btn-dark rounded-pill'>Open Artikel</Bos.Button>
                            </Bos.Card.Body>
                        </Bos.Card>
                    </Bos.Col> 
                    <Bos.Col md={4}>
                        <Bos.Card className='shadow rounded-5 overflow-hidden'>
                            <Bos.CardImg src='card-img.webp'/>
                            <Bos.Card.Body>
                                <Bos.Badge className='bg-primary'>Pemrograman</Bos.Badge>
                                <h4 className='my-3'>Has been released an android based application</h4>
                                <p className='text-muted'>Lorem ipsum dolor sit amet consectetur adipiscing elit potenti lectus fermentum ornare..</p>
                                <Bos.Button className='my-2 w-100 btn-dark rounded-pill'>Open Artikel</Bos.Button>
                            </Bos.Card.Body>
                        </Bos.Card>
                    </Bos.Col> 
                    <Bos.Col md={4}>
                        <Bos.Card className='shadow rounded-5 overflow-hidden'>
                            <Bos.CardImg src='card-img.webp'/>
                            <Bos.Card.Body>
                                <Bos.Badge className='bg-primary'>Pemrograman</Bos.Badge>
                                <h4 className='my-3'>Has been released an android based application</h4>
                                <p className='text-muted'>Lorem ipsum dolor sit amet consectetur adipiscing elit potenti lectus fermentum ornare..</p>
                                <Bos.Button className='my-2 w-100 btn-dark rounded-pill'>Open Artikel</Bos.Button>
                            </Bos.Card.Body>
                        </Bos.Card>
                    </Bos.Col> 
                </Bos.Row>
            </Bos.Container>

            <Bos.Button className='mx-auto d-block mb-4'>Show More News</Bos.Button>

            <Footer/>

        </>

    );
}

export default App;
