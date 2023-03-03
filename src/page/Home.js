import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '/node_modules/bootstrap-icons/font/bootstrap-icons.css';
import * as React from 'react';
import * as Bos from 'react-bootstrap';
import Navbar from '../Navbar';
import Footer from '../Footer';


function App() {
  
    return (
        <>
            <Navbar url="/"/>
            <div className="bg-light mt-5 py-5">
                <Bos.Container className='mt-3'>
                    <Bos.Row className="g-4">
                        <Bos.Col md={6}>
                            <Bos.Badge className="fs-6 mb-3" bg="success"><i className='bi bi-tag me-2'></i>There is a Special Promo of Ramadan 20%</Bos.Badge>
                            <h1 className="fw-bold text-primary">Desktop based project application</h1>
                            <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipiscing elit suspendisse, ac conubia dapibus ad eleifend nostra cubilia, feugiat porttitor velit egestas class magnis lobortis. Euismod tempor lacinia turpis pharetra, gravida nulla.</p>
                            <Bos.Button className="fw-bold d-flex gap-2"><i className='bi bi-person-fill'></i> Try free or paid</Bos.Button>
                        </Bos.Col>
                        <Bos.Col md={6}>
                            <img src="/vector1.webp" className='w-100 rounded-5 shadow-sm'/>
                        </Bos.Col>
                    </Bos.Row>
                </Bos.Container>
            </div>

            <div className="my-5">
                <Bos.Container>
                    <div className='text-center'>
                        <h2 className="fw-bold text-primary">Price</h2>
                        <p className="text-secondary">Package Prices for Our Software</p>
                    </div>
                    <Bos.Row className='mt-5'>
                        <Bos.Col md={4}>
                            <Bos.Card className="shadow-sm rounded-4 overflow-hidden">
                                <div class="card-header py-3 text-center">
                                    <h1 className="text-primary fw-bold m-0">$50<span className="fs-5 opacity-50 text-primary fw-semibold">/2 months</span></h1>
                                </div>
                                <div class="card-body align-items-center text-center d-flex d-flex justify-content-between flex-column gap-3">
                                    <ul class="list-unstyled">
                                        <li>10 users included</li>
                                        <li>2 GB of storage</li>
                                        <li>Email support</li>
                                        <li>Help center access</li>
                                    </ul>
                                    <button type="button" class="w-100 btn btn-lg btn-outline-primary">Sign up for free</button>
                                </div>
                            </Bos.Card>
                        </Bos.Col>
                        <Bos.Col md={4}>
                            <Bos.Card className="shadow-sm rounded-4 overflow-hidden border-primary">
                                <div class="card-header py-3 text-center bg-primary">
                                    <h1 className="text-white fw-bold m-0">$50<span className="fs-5 opacity-50 text-white fw-semibold">/2 months</span></h1>
                                </div>
                                <div class="card-body align-items-center text-center d-flex d-flex justify-content-between flex-column gap-3">
                                    <ul class="list-unstyled">
                                        <li>10 users included</li>
                                        <li>2 GB of storage</li>
                                        <li>Email support</li>
                                        <li>Help center access</li>
                                    </ul>
                                    <button type="button" class="w-100 btn btn-lg btn-primary">Sign up for free</button>
                                </div>
                            </Bos.Card>
                        </Bos.Col>
                        <Bos.Col md={4}>
                            <Bos.Card className="shadow-sm rounded-4 overflow-hidden">
                                <div class="card-header py-3 text-center">
                                    <h1 className="text-primary fw-bold m-0">$50<span className="fs-5 opacity-50 text-primary fw-semibold">/2 months</span></h1>
                                </div>
                                <div class="card-body align-items-center text-center d-flex d-flex justify-content-between flex-column gap-3">
                                    <ul class="list-unstyled">
                                        <li>10 users included</li>
                                        <li>2 GB of storage</li>
                                        <li>Email support</li>
                                        <li>Help center access</li>
                                    </ul>
                                    <button type="button" class="w-100 btn btn-lg btn-outline-primary">Sign up for free</button>
                                </div>
                            </Bos.Card>
                        </Bos.Col>
                    </Bos.Row>
                    <div className='table-responsive mt-5'>
                        <Bos.Table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Free</th>
                                    <th>Pro</th>
                                    <th>Enterprise</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Unlimited members</th>
                                    <td><i className='bi bi-check text-success'></i></td>
                                    <td><i className='bi bi-check text-success'></i></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th scope="row">Permissions</th>
                                    <td></td>
                                    <td><i className='bi bi-check text-success'></i></td>
                                    <td><i className='bi bi-check text-success'></i></td>
                                </tr>
                                <tr>
                                    <th scope="row">Sharing</th>
                                    <td></td>
                                    <td><i className='bi bi-check text-success'></i></td>
                                    <td><i className='bi bi-check text-success'></i></td>
                                </tr>
                                <tr>
                                    <th scope="row">Extra security</th>
                                    <td><i className='bi bi-check text-success'></i></td>
                                    <td></td>
                                    <td><i className='bi bi-check text-success'></i></td>
                                </tr>
                            </tbody>
                        </Bos.Table>
                    </div>
                </Bos.Container>
            </div>

            <Bos.Container className='shadow-sm my-5 p-4 border rounded-5'>
                <Bos.Row className='g-5'>
                    <Bos.Col md={6}>
                        <img src="/site.webp" className='w-100 h-100 rounded-5'/>
                    </Bos.Col>
                    <Bos.Col md={6} className="d-flex justify-content-center h-100">
                        <div className="clearfix h-auto">
                            <h2 className='fw-bold text-primary'>Contact us</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit euismod, elementum velit lectus cum porta ullamcorper hendrerit, curabitur facilisis metus porttitor nostra ut tincidunt. Litora mi integer magnis netus, eleifend lobortis.</p>
                            <Bos.FormFloating className='mb-3'>
                                <Bos.FormControl placeholder=' '></Bos.FormControl>
                                <Bos.FormLabel>Your Name</Bos.FormLabel>
                            </Bos.FormFloating>
                            <Bos.FormFloating className='mb-3'>
                                <Bos.FormControl placeholder=' '></Bos.FormControl>
                                <Bos.FormLabel>Your Email</Bos.FormLabel>
                            </Bos.FormFloating>
                            <textarea className='form-control mb-3' placeholder='The message you will convey'></textarea>
                            <Bos.Button className='float-end'>Submit</Bos.Button>
                        </div>
                    </Bos.Col>
                </Bos.Row>
            </Bos.Container>


            <Bos.Container className='my-5'>
                <div className='text-center'>
                    <h3 className='fw-bold text-primary'>News</h3>
                </div>
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

            <Footer/>
        </>
    );
}
  
export default App;