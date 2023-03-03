import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '/node_modules/bootstrap-icons/font/bootstrap-icons.css';
import * as React from 'react';
import * as Bos from 'react-bootstrap';
import Navbar from '../Navbar';
import Footer from '../Footer';


function App() {

    const SetRating = (e) => {
        var allRating = document.querySelectorAll(`input[name="rating"] ~ i`);
        allRating.forEach(element => {
            if(element.classList.contains("bi-star-fill")){
                element.classList.remove("bi-star-fill");
                element.classList.add("bi-star");
            }
        });

        var val = parseInt(e.target.value);

        for (let index = 1; index <= val; index++) {
            var x = document.querySelector(`input[name="rating"][value="${index}"] ~ i`);
            x.classList.remove("bi-star")
            x.classList.add("bi-star-fill")
        }

        if(val > 0 && val <= 5){
            document.querySelector("#show").classList.remove("d-none");
        }

    }

    const ShowComment = (e) => {

    }

    return(
        <>
            <Navbar url="/news"/>

            <Bos.Container className='my-5 py-5'>
                <Bos.Row className='g-4 justify-content-center'>
                    <Bos.Col md={9}>
                        <Bos.Button className='mb-4 btn-dark rounded-pill px-4'>Back To Home</Bos.Button>
                        <h2 className='fw-bold text-primary'>Uji Coba Saja</h2>
                        <div className='d-flex align-items-center gap-3 text-muted'>
                            <span className='m-0'>12 Agustus 2021 11:23</span>
                            <span className='m-0'><i className='bi bi-person'></i> Rovino Ramadhani</span>
                            <Bos.Badge className='bg-dark'>Pemrograman</Bos.Badge>
                        </div>
                        <hr/>
                        <img src='/vector1.webp' className='w-100 h-auto shadow rounded-5 border my-4 d-block'/>
                        <p style={{ textAlign : "justify" }}>Lorem ipsum dolor sit amet consectetur adipiscing elit placerat aptent, cras nibh molestie praesent fermentum semper varius. Pretium habitasse fringilla lacus suscipit libero vehicula cum, etiam cursus ultricies lobortis curae ac, eros neque mi iaculis euismod tempus. Praesent luctus torquent sollicitudin dictumst platea ultrices purus, nec quisque consequat cras tempus dui cubilia, nisl tristique congue suscipit leo magnis. Congue est purus suscipit auctor fames condimentum nascetur pellentesque donec dapibus, blandit facilisis curae commodo ullamcorper ultricies aptent tristique conubia arcu, tempor proin maecenas libero neque convallis malesuada iaculis mollis. Quisque platea arcu nulla mauris iaculis quam lacinia tincidunt nunc, hac vitae dignissim litora volutpat tristique ante nibh non mus, class laoreet nisi dictumst diam semper rhoncus dapibus. Potenti felis ante eu curae sem porta ullamcorper massa, morbi aliquam rutrum integer sagittis luctus nullam suscipit sapien, netus viverra scelerisque quam rhoncus senectus auctor. In leo curae bibendum lobortis dictumst tempus, quis porttitor orci nisl dignissim, imperdiet odio mattis aliquet ultrices. Ligula ornare viverra placerat ultrices, aptent aliquam per aliquet, porta natoque semper.</p>
                        <Bos.Container className='shadow-sm border rounded-5 p-4 clearfix'>
                            <h5 className='text-primary fw-bold text-center mb-2'>Rating for this article</h5>
                            <div className='d-flex justify-content-center align-item-center gap-4'>
                                <label className="text-warning fs-4 position-relative">
                                    <input type={'radio'} name="rating" onChange={(e) => SetRating(e)} value={"1"} className='position-absolute start-50 opacity-0'/>
                                    <i className='bi bi-star'></i>
                                </label>
                                <label className="text-warning fs-4 position-relative">
                                    <input type={'radio'} name="rating" onChange={(e) => SetRating(e)} value={"2"} className='position-absolute start-50 opacity-0'/>
                                    <i className='bi bi-star'></i>
                                </label>
                                <label className="text-warning fs-4 position-relative">
                                    <input type={'radio'} name="rating" onChange={(e) => SetRating(e)} value={"3"} className='position-absolute start-50 opacity-0'/>
                                    <i className='bi bi-star'></i>
                                </label>
                                <label className="text-warning fs-4 position-relative">
                                    <input type={'radio'} name="rating" onChange={(e) => SetRating(e)} value={"4"} className='position-absolute start-50 opacity-0'/>
                                    <i className='bi bi-star'></i>
                                </label>
                                <label className="text-warning fs-4 position-relative">
                                    <input type={'radio'} name="rating" onChange={(e) => SetRating(e)} value={"5"} className='position-absolute start-50 opacity-0'/>
                                    <i className='bi bi-star'></i>
                                </label>
                            </div>
                            <div id='show' className='mt-3 d-none'>
                               <textarea className='form-control d-block'></textarea>
                                <Bos.Button className='float-end mt-3'>Submit</Bos.Button>
                            </div>
                        </Bos.Container>
                    </Bos.Col>
                </Bos.Row>
            </Bos.Container> 

            <Footer/>

        </>

    );
}

export default App;
