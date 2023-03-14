import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap-icons/font/bootstrap-icons.css";
import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Bos from "react-bootstrap";
import Navbar from "../admin/Component";
import $ from "jquery";
import { CekAkun } from "../controller/main";

function App() {
  const [error, setError] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [search, setSearch] = React.useState("");
  const [input, setInput] = React.useState("");

  CekAkun();
  const Navigate = useNavigate();

  React.useEffect(() => {
    if (!localStorage._token) {
      Navigate("/login");
    }

    if (sessionStorage.is_admin != 1) {
      alert("Anda bukan admin");
      Navigate("/akun/");
    }

    const fetchReq = {
      method: "POST",
    };

    fetch("http://lks.test/api/news/all?page=" + page + search, fetchReq)
      .then((res) => res.json())
      .then(
        (result) => {
          if (result.message && result.message === "No data found") {
            if (search != "") {
              alert("No search found");
            } else {
              alert("There is no more data");
            }
            $("#load").addClass("d-none");
          }
          setIsLoaded(true);
          setItems(result.data.data);
        },
        (error) => {
          setError(error);
          setIsLoaded(true);
        }
      );
  }, [page, search]);

  const loadMore = () => {
    setPage(page + 1);
  };

  const searchBtn = () => {
    if (input == "") {
      let ss = prompt("Enter the search keywords");
      if (ss == null || ss == "") {
        alert("You keep emptying input search");
      } else {
        setInput(ss);
      }
    } else {
      setSearch("&search=" + input);
    }
  };

  const Delete = (e, slug) => {
    e.preventDefault();
    var x = new FormData();
    x.append("token", localStorage._token);
    const fetchReq = {
      method: "POST",
      body: x,
    };
    fetch("http://lks.test/api/news/destroy/" + slug, fetchReq)
      .then((res) => res.json())
      .then(
        (result) => {
          alert("Already deleted");
          Navigate("/akun/news");
        },
        (error) => {
          alert("There is an error");
        }
      );
  };

  return (
    <>
      <Navbar url="/akun/news" />
      <Bos.Container
        className="shadow p-4 rounded-5 border"
        style={{ marginTop: "100px" }}
      >
        <Bos.Row className="mb-4 g-4">
          <Bos.Col md={8}>
            <h3 className="fw-bold text-primary m-0" id="contoh">
              News
            </h3>
            <p className="text-muted m-0" style={{ fontSize: "14.5px" }}>
              You can add, delete and edit news
            </p>
          </Bos.Col>
          <Bos.Col md={4}>
            <Bos.Row className="g-3">
              <Bos.Col md={4}>
                <a href="./news/create">
                  <Bos.Button className="w-100">Create</Bos.Button>
                </a>
              </Bos.Col>
              <Bos.Col md={8}>
                <Bos.InputGroup>
                  <Bos.FormControl
                    value={input}
                    onInput={(e) => {
                      setInput(e.target.value);
                    }}
                  ></Bos.FormControl>
                  <Bos.InputGroup.Text
                    className="btn btn-primary bi bi-search"
                    onClick={searchBtn}
                  ></Bos.InputGroup.Text>
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
              <th colSpan={2} className="text-center">
                Detail
              </th>
            </tr>
            <tr>
              <th>Url Slug</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              (() => {
                if (error) {
                  return (
                    <tr>
                      <td colSpan={5}>Error: {error.message}</td>
                    </tr>
                  );
                } else if (!isLoaded) {
                  return (
                    <tr>
                      <td colSpan={5}>
                        <Bos.Spinner animation="border" variant="primary" />
                      </td>
                    </tr>
                  );
                } else {
                  var i = 1;
                  return items.map((item) => (
                    <tr>
                      <td>{i++}</td>
                      <td>{item.judul}</td>
                      <td>{item.slug}</td>
                      <td style={{ width: "60px" }}>
                        <Bos.Dropdown>
                          <Bos.Dropdown.Toggle
                            variant="primary"
                            id="dropdown-basic"
                          ></Bos.Dropdown.Toggle>
                          <Bos.Dropdown.Menu>
                            <Bos.Dropdown.Item
                              href={"/akun/news/edit/" + item.slug}
                              key={"edit" + item.id}
                            >
                              Edit
                            </Bos.Dropdown.Item>
                            <Bos.Dropdown.Item
                              href={"delete/" + item.id}
                              key={"delete" + item.id}
                              onClick={(e) => {
                                Delete(e, item.slug);
                              }}
                            >
                              Delete
                            </Bos.Dropdown.Item>
                          </Bos.Dropdown.Menu>
                        </Bos.Dropdown>
                      </td>
                    </tr>
                  ));
                }
              })()
            }
          </tbody>
        </Bos.Table>
        <fungsi />
        <Bos.Button
          onClick={loadMore}
          id="load"
          className="mx-auto d-block mt-4 "
        >
          Load More
        </Bos.Button>
      </Bos.Container>
    </>
  );
}

export default App;
