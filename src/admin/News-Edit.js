import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "/node_modules/bootstrap-icons/font/bootstrap-icons.css";
import * as React from "react";
import * as Bos from "react-bootstrap";
import Navbar from "../admin/Component";
import $ from "jquery";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CekAkun } from "../controller/main";

function App() {
  const [imageShow, setImageShow] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [textStatus, setTextStatus] = React.useState(false);
  const [divId, setDivId] = React.useState(1);
  const [textEdit, setTextEdit] = React.useState(0);
  const [Judul, setJudul] = React.useState("");
  const [Slug, setSlug] = React.useState("");
  const [Id_User, setIdUser] = React.useState("");
  const [Isi, setIsi] = React.useState("");
  let { slugGet } = useParams();
  const handleClose = () => setShow(false);
  const myDivRef = React.useRef(null);
  CekAkun();
  const Navigate = useNavigate();

  React.useEffect(() => {
    if (!localStorage._token) {
      Navigate("/login");
    }

    var _token = localStorage._token;
    const data = new FormData();
    data.append("token", _token);
    const fetc2hReq = {
      method: "POST",
      body: data,
    };

    fetch("http://lks.test/api/user/show/" + _token, fetc2hReq)
      .then((res) => res.json())
      .then(
        (result) => {
          sessionStorage.setItem("is_admin", result.is_admin);
          setIdUser(result.id);
        },
        (error) => {
          return false;
        }
      );

    const fetchReq = {
      method: "POST",
    };

    fetch("http://lks.test/api/news/show/" + slugGet, fetchReq)
      .then((res) => res.json())
      .then(
        (result) => {
          if (result.status == false) {
            alert("Terjadi Kesalahan : " + result.message);
          } else {
            $("#main").html(result.data.isi);
            setJudul(result.data.judul);
            setSlug(result.data.slug);
          }
        },
        (error) => {
          alert("Terjadi Kesalahan : " + error);
        }
      );
  }, []);

  const CreatePrg = () => {
    var x = $("#setText .ql-editor").html();
    if (x === "") {
      window.alert("input tidak boleh kosong");
    } else {
      if (textStatus === true && textEdit !== 0) {
        $(`div[data-id="${textEdit}"]`).html(x);
      } else {
        setDivId(divId + 1);
        $("#main").append(`<div data-x="text" data-id="${divId}">${x}</div>`);
      }
      setShow(false);
    }
  };

  const OpenText = () => {
    setShow(true);
    setTextStatus(false);
    setValue("");
  };

  $(`#dropdown .edit`).on("click", function (e) {
    e.preventDefault();
    setShow(true);
    var x = $(this).attr("href");
    setTextEdit(x);
    setTextStatus(true);
    setValue($(`div[data-id="${x}"]`).html());
    $("#dropdown").removeClass("show");
  });

  $(`#dropdown .hapus`).on("click", function (e) {
    var x = $(this).attr("href");
    $(`div[data-id="${x}"]`).remove();
    $("#dropdown").removeClass("show");
    e.preventDefault();
  });

  $(`#main > div[data-x="text"]`).on("contextmenu", function (e) {
    if (!$("#dropdown").hasClass("show")) {
      $("#dropdown").addClass("show");
    }
    $("#dropdown").css({
      left: e.pageX,
      top: e.pageY,
    });
    $("#dropdown a").attr("href", $(this).data("id"));
    e.preventDefault();
  });

  $("#main").click(function (e) {
    $("#dropdown").removeClass("show");
  });

  const imageCLick = () => {
    setImageShow(true);
  };

  const slugCreate = (title) => {
    setSlug(
      title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "")
    );
  };

  const simpan = () => {
    var x = new FormData();
    x.append("judul", Judul);
    x.append("slug", Slug);
    x.append("isi", document.getElementById("main").innerHTML);
    x.append("token", localStorage._token);
    x.append("user_id", Id_User);

    var files = document.getElementById("file").files;
    if (files.length > 0) {
      x.append("file", files[0]);
    }

    const fetchReq = {
      method: "POST",
      body: x,
    };

    fetch("http://lks.test/api/news/store", fetchReq)
      .then((res) => res.json())
      .then(
        (result) => {
          if (result.status == false) {
            alert("Terjadi Kesalahan : " + result.message);
          } else {
            alert("Berhasil Di Tambahkan");
          }
        },
        (error) => {
          alert("Terjadi Kesalahan : " + error);
        }
      );
  };

  return (
    <>
      <Navbar url="/akun/news" />
      <Bos.Container style={{ marginTop: "100px", marginBottom: "100px" }}>
        <Bos.Row>
          <Bos.Col
            md={8}
            id="main"
            onChange={(e) => {
              setIsi(e.target.innerHtml);
              console.log(setIsi);
            }}
            ref={myDivRef}
          >
            {Isi}
          </Bos.Col>
          <Bos.Col md={4}>
            <Bos.Card>
              <Bos.Card.Body>
                <Bos.Tabs
                  defaultActiveKey="Detail"
                  id="uncontrolled-tab-example"
                  className="mb-3"
                >
                  <Bos.Tab eventKey="Component" title="Component">
                    <div className="d-flex gap-3 flex-wrap">
                      <Bos.Button variant="dark" onClick={OpenText}>
                        <i className="bi bi-text-paragraph me-1"></i> Add Text
                      </Bos.Button>
                    </div>
                  </Bos.Tab>
                  <Bos.Tab eventKey="Detail" title="Detail">
                    <form onSubmit={simpan}></form>
                    <Bos.FormFloating className="mb-3">
                      <Bos.FormControl
                        value={Judul}
                        onChange={(e) => {
                          slugCreate(e.target.value);
                        }}
                        onInput={(e) => {
                          setJudul(e.target.value);
                        }}
                      ></Bos.FormControl>
                      <Bos.FormLabel>Judul</Bos.FormLabel>
                    </Bos.FormFloating>
                    <Bos.FormFloating className="mb-3">
                      <Bos.FormControl value={Slug} disabled></Bos.FormControl>
                      <Bos.FormLabel>Slug</Bos.FormLabel>
                    </Bos.FormFloating>

                    <Bos.FormControl type="file" id="file"></Bos.FormControl>

                    <Bos.FormFloating className="mb-3"></Bos.FormFloating>
                  </Bos.Tab>
                </Bos.Tabs>
              </Bos.Card.Body>
              <Bos.Card.Footer>
                <Bos.Button className="float-end" onClick={simpan}>
                  Simpan
                </Bos.Button>
              </Bos.Card.Footer>
            </Bos.Card>
          </Bos.Col>
        </Bos.Row>

        <div
          class="dropdown-menu"
          aria-labelledby="dropdownMenuButton"
          id="dropdown"
        >
          <a class="dropdown-item edit" href="#">
            Edit
          </a>
          <a class="dropdown-item hapus" href="#">
            Hapus
          </a>
        </div>
      </Bos.Container>

      <Bos.Modal
        id="setText"
        show={show}
        onHide={handleClose}
        backdrop="static"
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        keyboard={false}
      >
        <Bos.Modal.Header>
          <h5 className="text-primary fw-bold m-0">Paragraf</h5>
        </Bos.Modal.Header>
        <Bos.Modal.Body>
          <ReactQuill theme="snow" value={value} onChange={setValue} />
        </Bos.Modal.Body>
        <Bos.Modal.Footer>
          <Bos.Button onClick={CreatePrg}>Save</Bos.Button>
          <Bos.Button variant="danger" onClick={handleClose}>
            Close
          </Bos.Button>
        </Bos.Modal.Footer>
      </Bos.Modal>
    </>
  );
}

export default App;
