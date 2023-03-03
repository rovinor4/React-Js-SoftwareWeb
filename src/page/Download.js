import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '/node_modules/bootstrap-icons/font/bootstrap-icons.css';
import * as React from 'react';
import * as Bos from 'react-bootstrap';
import Navbar from '../Navbar';
import Footer from '../Footer';

function App() {
    return(
        <>
            <Navbar url="/download"/>
            
            <Bos.Container className='my-5 pt-5'>
                <Bos.Row className='g-5'>
                    <Bos.Col md={6} className="clearfix">
                        <h4 className="fw-bold text-primary">Download</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit ornare dui duis</p>
                        <Bos.FormFloating>
                            <Bos.FormSelect>
                                <option>Windows</option>
                                <option>Mac</option>
                                <option>Linux</option>
                            </Bos.FormSelect>
                            <Bos.FormLabel>Select your device type</Bos.FormLabel>
                        </Bos.FormFloating>
                        <Bos.Button className='floating-end mt-3'>Download Now</Bos.Button>
                    </Bos.Col>
                    <Bos.Col md={6} className="clearfix">
                        <img src='vector2.webp' className='w-100 h-100 rounded-4 shadow'/>
                    </Bos.Col>
                </Bos.Row>
            </Bos.Container>


        </>

    );
}

export default App;
