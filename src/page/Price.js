import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '/node_modules/bootstrap-icons/font/bootstrap-icons.css';
import * as React from 'react';
import * as Bos from 'react-bootstrap';
import Navbar from '../Navbar';
import Footer from '../Footer';

function App() {
    return(
        <>
            <Navbar url="/price"/>
            <div className="my-5 pt-5">
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
            <Footer/>
        </>

    );
}

export default App;
