import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '/node_modules/bootstrap-icons/font/bootstrap-icons.css';
import * as React from 'react';
import * as Bos from 'react-bootstrap';
import Navbar from '../admin/Component';
import $ from 'jquery'

function App() {
 

    return(
        <>
            <Navbar url="/admin/news"/>
            <Bos.Container className='shadow p-4 rounded-5 border' style={{ marginTop : "100px" }}>
                <Bos.Row className='mb-4 g-4'>
                    <Bos.Col md={8}>
                        <h3 className='fw-bold text-primary m-0' id='contoh'>News</h3>
                        <p className='text-muted m-0' style={{ fontSize : "14.5px" }}>You can add, delete and edit news</p>
                    </Bos.Col>
                    <Bos.Col md={4}>
                        <Bos.Row className='g-3'>
                            <Bos.Col md={4}>
                                <a href='./news/create'>
                                    <Bos.Button className='w-100'>Create</Bos.Button>
                                </a>
                            </Bos.Col>
                            <Bos.Col md={8}>
                                <Bos.InputGroup>
                                    <Bos.FormControl></Bos.FormControl>
                                    <Bos.InputGroup.Text className='btn btn-primary bi bi-search'></Bos.InputGroup.Text>
                                </Bos.InputGroup>
                            </Bos.Col>
                        </Bos.Row>
                    </Bos.Col>
                </Bos.Row>
                <Bos.Table striped bordered hover>
                <thead>
                    <tr>
                        <th rowSpan={2}>#</th>
                        <th rowSpan={2}>Judul</th>
                        <th colSpan={2} className="text-center">Detail</th>
                    </tr>
                    <tr>
                        <th>Url Slug</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Say Hallo</td>
                        <td>Say-Hallo</td>
                        <td style={{ width : "60px" }}>
                        <Bos.Dropdown>
                            <Bos.Dropdown.Toggle variant="primary" id="dropdown-basic">
                            </Bos.Dropdown.Toggle>

                            <Bos.Dropdown.Menu>
                                <Bos.Dropdown.Item href="#/action-1">Edit</Bos.Dropdown.Item>
                                <Bos.Dropdown.Item href="#/action-2">Open New Tab</Bos.Dropdown.Item>
                                <Bos.Dropdown.Item href="#/action-3">Delete</Bos.Dropdown.Item>
                            </Bos.Dropdown.Menu>
                        </Bos.Dropdown>
                        </td>
                    </tr>
                </tbody>
                </Bos.Table>
                <Bos.Button className='mx-auto d-block mt-4 '>Load More</Bos.Button>
            </Bos.Container>
        </>
    )
}

export default App;