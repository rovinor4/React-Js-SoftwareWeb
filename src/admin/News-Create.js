import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '/node_modules/bootstrap-icons/font/bootstrap-icons.css';
import * as React from 'react';
import * as Bos from 'react-bootstrap';
import Navbar from '../admin/Component';
import $ from 'jquery'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function App() {

    const [imageShow, setImageShow] = React.useState(false);
    const [show, setShow] = React.useState(false);
    const [value, setValue] = React.useState('');
    const [textStatus, setTextStatus] = React.useState(false);
    const [divId, setDivId] = React.useState(1);
    const [textEdit, setTextEdit] = React.useState(0);
    const handleClose = () => setShow(false);
    
    const CreatePrg = () => {
        var x = $("#setText .ql-editor").html();
        if(x === ""){
            window.alert("input tidak boleh kosong")
        }else{
            if(textStatus === true && textEdit !== 0){
                $(`div[data-id="${textEdit}"]`).html(x);
            }else{
                setDivId(divId+1);
                $("#main").append(`<div data-x="text" data-id="${divId}">${x}</div>`);
            }
            setShow(false);
        }
    }
    
    
    const OpenText = () => {
        setShow(true);
        setTextStatus(false);
        setValue("")
    }
    
    $(`#dropdown .edit`).on("click", function (e) {
        e.preventDefault()
        setShow(true);
        var x = $(this).attr("href");
        setTextEdit(x);
        setTextStatus(true);
        setValue($(`div[data-id="${x}"]`).html())
        $("#dropdown").removeClass("show");
    });


    $(`#dropdown .hapus`).on("click", function (e) {
        var x = $(this).attr("href");
        $(`div[data-id="${x}"]`).remove();
        $("#dropdown").removeClass("show");
        e.preventDefault()
    });



    $(`#main > div[data-x="text"]`).on("contextmenu", function (e) {
        if(!$("#dropdown").hasClass("show")){
            $("#dropdown").addClass("show");
        }
        $("#dropdown").css({
            left: e.pageX,
            top: e.pageY
        });
        $("#dropdown a").attr("href", $(this).data("id"));
        e.preventDefault()
    });


    $("#main").click(function (e) { 
        $("#dropdown").removeClass("show");
    });

    const imageCLick = () => {
        setImageShow(true);
    }



    return(
        <>
            <Navbar url="/akun/news"/>
            <Bos.Container style={{ marginTop : "100px", marginBottom : "100px" }}>
                <Bos.Row>
                    <Bos.Col md={8} id="main">
                    </Bos.Col>
                    <Bos.Col md={4}> 
                        <Bos.Card>
                            <Bos.Card.Body>
                                <Bos.Tabs defaultActiveKey="Detail" id="uncontrolled-tab-example" className="mb-3">
                                    <Bos.Tab eventKey="Component" title="Component">
                                        <div className='d-flex gap-3 flex-wrap'>
                                            <Bos.Button variant='dark' onClick={OpenText}><i className='bi bi-text-paragraph me-1'></i> Add Text</Bos.Button>
                                            <Bos.Button variant='dark' onClick={imageCLick}><i className='bi bi-card-image me-1'></i> Image</Bos.Button>
                                        </div>
                                    </Bos.Tab>
                                    <Bos.Tab eventKey="Detail" title="Detail">
                                        <Bos.FormFloating className='mb-3'>
                                            <Bos.FormControl></Bos.FormControl>
                                            <Bos.FormLabel>Judul</Bos.FormLabel>
                                        </Bos.FormFloating>
                                        <Bos.FormFloating className='mb-3'>
                                            <Bos.FormControl></Bos.FormControl>
                                            <Bos.FormLabel>Slug</Bos.FormLabel>
                                        </Bos.FormFloating>
                                        <Bos.FormFloating className='mb-3'>
                                            <Bos.FormControl></Bos.FormControl>
                                            <Bos.FormLabel>Judul</Bos.FormLabel>
                                        </Bos.FormFloating>
                                    </Bos.Tab>
                                </Bos.Tabs>
                            </Bos.Card.Body>
                            <Bos.Card.Footer>
                                <Bos.Button className='float-end'>Simpan</Bos.Button>
                            </Bos.Card.Footer>
                        </Bos.Card>
                    </Bos.Col>
                </Bos.Row>

                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" id='dropdown'>
                    <a class="dropdown-item edit" href="#">Edit</a>
                    <a class="dropdown-item hapus" href="#">Hapus</a>
                </div>


            </Bos.Container>




            <Bos.Modal id="setText" show={show} onHide={handleClose} backdrop="static" size="lg" aria-labelledby="contained-modal-title-vcenter" centered keyboard={false}>
                <Bos.Modal.Header>
                    <h5 className='text-primary fw-bold m-0'>Paragraf</h5>
                </Bos.Modal.Header>
                <Bos.Modal.Body>
                    <ReactQuill theme="snow" value={value} onChange={setValue}/>
                </Bos.Modal.Body>
                <Bos.Modal.Footer>
                    <Bos.Button onClick={CreatePrg}>Save</Bos.Button>
                    <Bos.Button variant='danger' onClick={handleClose}>Close</Bos.Button>
                </Bos.Modal.Footer>
            </Bos.Modal>

            <Bos.Modal show={imageShow} onHide={handleClose} backdrop="static" centered >
                <Bos.Modal.Header className='d-flex justify-content-between align-items-center'>
                    <h5 className='text-primary fw-bold m-0'>Upload Image</h5>
                    <Bos.Button variant='danger' onClick={() => {setImageShow(false)}}>Close</Bos.Button>
                </Bos.Modal.Header>
                <Bos.Modal.Body>
                    <Bos.Tabs defaultActiveKey="Select" id="uncontrolled-tab-example" className="mb-3">
                        <Bos.Tab eventKey="Select" title="Select">
                            <Bos.FormCheck>
                                <Bos.FormCheck.Label>
                                <Bos.FormCheck.Input></Bos.FormCheck.Input>
                                    https://image.png
                                </Bos.FormCheck.Label>
                            </Bos.FormCheck>
                            <hr/>
                            <div className='d-flex mt-4 justify-content-end'>
                                <Bos.Button>Submit</Bos.Button>
                            </div>
                        </Bos.Tab>
                        <Bos.Tab eventKey="Upload" title="Upload">
                            <Bos.FormControl type='file'/>
                            <div className='d-flex mt-4 justify-content-end'>
                                <Bos.Button>Submit</Bos.Button>
                            </div>
                        </Bos.Tab>
                        <Bos.Tab eventKey="UrlLink" title="Url Link">
                            <Bos.FormControl type='url'/>
                            <div className='d-flex mt-4 justify-content-end'>
                                <Bos.Button>Submit</Bos.Button>
                            </div>
                        </Bos.Tab>
                    </Bos.Tabs>
                </Bos.Modal.Body>
            </Bos.Modal>

        </>
    )
}

export default App;