import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap-icons/font/bootstrap-icons.css";
import * as React from "react";
import * as Bos from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import $ from "jquery";

function App() {
  const [Email, setEmail] = React.useState("");
  const [Password, setPassword] = React.useState("");
  const Navigate = useNavigate();

  React.useEffect(() => {
    if (localStorage._token) {
      Navigate("/");
    }
  });

  function validate() {
    var input = document.querySelectorAll("form input");
    input.forEach((element) => {
      if (element.value == "") {
        element.classList.add("is-invalid");
      } else {
        if (element.classList.contains("is-invalid")) {
          element.classList.remove("is-invalid");
        }
      }
    });
  }

  const submit = (e) => {
    e.preventDefault();
    validate();
    $.ajax({
      type: "POST",
      url: "http://lks.test/api/user/login",
      data: {
        email: Email,
        password: Password,
      },
      success: function (response) {
        localStorage.setItem("_token", response["data"]["remember_token"]);
        Navigate("/");
      },
      error: function (xhr) {
        alert(xhr.responseJSON["message"]);
      },
    });
  };

  return (
    <Bos.Container>
      <Bos.Row className="justify-content-center">
        <Bos.Col md={6} sm={12} className="my-5">
          <form id="form" onSubmit={submit}>
            <Bos.Card className="rounded-4 shadow overflow-hidden">
              <Bos.Card.Img
                src="/vector3.webp"
                style={{ height: "300px" }}
              ></Bos.Card.Img>
              <Bos.Card.Body className="p-4">
                <h4 className="fw-bold text-primary m-0 mb-1">
                  Access to your account
                </h4>
                <p className="text-muted m-0">
                  You just need an email and password
                </p>
                <hr />
                <Bos.FormFloating className="mb-3">
                  <Bos.FormControl
                    placeholder=" "
                    onInput={(e) => {
                      setEmail(e.target.value);
                    }}
                    value={Email}
                  />
                  <Bos.FormLabel>Your Email</Bos.FormLabel>
                </Bos.FormFloating>
                <Bos.FormFloating className="mb-3">
                  <Bos.FormControl
                    placeholder=" "
                    onInput={(e) => {
                      setPassword(e.target.value);
                    }}
                    value={Password}
                  />
                  <Bos.FormLabel>Your Password</Bos.FormLabel>
                </Bos.FormFloating>
              </Bos.Card.Body>
              <Bos.Card.Footer className="px-4 py-3 d-flex justify-content-end gap-3">
                <Link to={"/register"}>
                  <span className="btn btn-outline-dark">Register</span>
                </Link>
                <Bos.Button type="submit">Login</Bos.Button>
              </Bos.Card.Footer>
            </Bos.Card>
          </form>
        </Bos.Col>
      </Bos.Row>
    </Bos.Container>
  );
}

export default App;
