import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap-icons/font/bootstrap-icons.css";
import * as React from "react";
import * as Bos from "react-bootstrap";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useNavigate, useParams } from "react-router-dom";
import $ from "jquery";

function App() {
  let { slugGet } = useParams();
  const Navigate = useNavigate();

  const [Judul, setJudul] = React.useState("");
  const [File, setFile] = React.useState("");
  const [RatingSave, setRatingSave] = React.useState("");
  const [RatingComment, setRatingComment] = React.useState("");
  const [idNews, setidNews] = React.useState("");
  const [idUser, setidUser] = React.useState("");
  React.useEffect(() => {
    var _token = localStorage._token;
    const data = new FormData();
    data.append("token", _token);
    const fetc2hReq = {
      method: "POST",
      body: data,
    };

    if (_token != "") {
      fetch("http://lks.test/api/user/show/" + _token, fetc2hReq)
        .then((res) => res.json())
        .then(
          (result) => {
            setidUser(result.id);
          },
          (error) => {
            return false;
          }
        );
    }

    const fetchReq = {
      method: "POST",
    };

    fetch("http://lks.test/api/news/show/" + slugGet, fetchReq)
      .then((res) => res.json())
      .then(
        (result) => {
          if (result.status == false) {
            Navigate("/news");
          } else {
            $("#main").html(result.data.isi);
            setJudul(result.data.judul);
            setFile(result.data.file);
            setidNews(result.data.id);
          }
        },
        (error) => {
          Navigate("/news");
        }
      );

    var dataset = new FormData();
    dataset.append("user_id", idUser);

    const fetchReq2 = {
      method: "POST",
      body: dataset,
    };

    fetch("http://lks.test/api/rating/show/" + idNews, fetchReq2)
      .then((res) => res.json())
      .then((result) => {
        if (result.status == true) {
          document.querySelector("#show").classList.remove("d-none");
          for (let index = 1; index <= parseInt(result.data[0].star); index++) {
            var x = document.querySelector(
              `input[name="rating"][value="${index}"] ~ i`
            );
            x.classList.remove("bi-star");
            x.classList.add("bi-star-fill");
          }
          $("#komentar").val(result.data[0].comment);
        }
      });
  }, [idNews, idUser]);

  const SetRating = (e) => {
    var allRating = document.querySelectorAll(`input[name="rating"] ~ i`);
    allRating.forEach((element) => {
      if (element.classList.contains("bi-star-fill")) {
        element.classList.remove("bi-star-fill");
        element.classList.add("bi-star");
      }
      setRatingSave(e.target.value);
    });

    var val = parseInt(e.target.value);

    for (let index = 1; index <= val; index++) {
      var x = document.querySelector(
        `input[name="rating"][value="${index}"] ~ i`
      );
      x.classList.remove("bi-star");
      x.classList.add("bi-star-fill");
    }

    if (val > 0 && val <= 5) {
      document.querySelector("#show").classList.remove("d-none");
    }
  };

  const SaveDataComment = () => {
    var _token = localStorage._token;
    var x = new FormData();
    x.append("user_id", idUser);
    x.append("news_id", idNews);
    x.append("star", RatingSave);
    x.append("comment", RatingComment);
    x.append("token", _token);

    if (!localStorage._token || _token == "") {
      Navigate("/login");
    }

    const fetc2hReq = {
      method: "POST",
      body: x,
    };

    if (_token != "") {
      fetch("http://lks.test/api/rating/store", fetc2hReq)
        .then((res) => res.json())
        .then(
          (result) => {
            if (result.status == true) {
              alert("rating anda berhasil di simpan");
            } else {
              alert("rating gagal di simpan");
            }
          },
          (error) => {
            alert("rating gagal di simpan, karena : " + error);
          }
        );
    }
  };

  return (
    <>
      <Navbar url="/news" />

      <Bos.Container className="my-5 py-5">
        <Bos.Row className="g-4 justify-content-center">
          <Bos.Col md={9}>
            <Bos.Button className="mb-4 btn-dark rounded-pill px-4">
              Back To Home
            </Bos.Button>
            <h2 className="fw-bold text-primary">{Judul}</h2>
            <img
              src={"http://lks.test/storage/" + File.split("/")[1]}
              className="w-100 h-auto shadow rounded-5 border my-4 d-block"
            />
            <div id="main"></div>
            <Bos.Container className="shadow-sm border rounded-5 p-4 clearfix">
              <h5 className="text-primary fw-bold text-center mb-2">
                Rating for this article
              </h5>
              <div className="d-flex justify-content-center align-item-center gap-4">
                <label className="text-warning fs-4 position-relative">
                  <input
                    type={"radio"}
                    name="rating"
                    onChange={(e) => SetRating(e)}
                    value={"1"}
                    className="position-absolute start-50 opacity-0"
                  />
                  <i className="bi bi-star"></i>
                </label>
                <label className="text-warning fs-4 position-relative">
                  <input
                    type={"radio"}
                    name="rating"
                    onChange={(e) => SetRating(e)}
                    value={"2"}
                    className="position-absolute start-50 opacity-0"
                  />
                  <i className="bi bi-star"></i>
                </label>
                <label className="text-warning fs-4 position-relative">
                  <input
                    type={"radio"}
                    name="rating"
                    onChange={(e) => SetRating(e)}
                    value={"3"}
                    className="position-absolute start-50 opacity-0"
                  />
                  <i className="bi bi-star"></i>
                </label>
                <label className="text-warning fs-4 position-relative">
                  <input
                    type={"radio"}
                    name="rating"
                    onChange={(e) => SetRating(e)}
                    value={"4"}
                    className="position-absolute start-50 opacity-0"
                  />
                  <i className="bi bi-star"></i>
                </label>
                <label className="text-warning fs-4 position-relative">
                  <input
                    type={"radio"}
                    name="rating"
                    onChange={(e) => SetRating(e)}
                    value={"5"}
                    className="position-absolute start-50 opacity-0"
                  />
                  <i className="bi bi-star"></i>
                </label>
              </div>
              <div id="show" className="mt-3 d-none">
                <textarea
                  className="form-control d-block"
                  id="komentar"
                  onInput={(e) => {
                    setRatingComment(e.target.value);
                  }}
                ></textarea>
                <Bos.Button
                  className="float-end mt-3"
                  onClick={SaveDataComment}
                >
                  Submit
                </Bos.Button>
              </div>
            </Bos.Container>
          </Bos.Col>
        </Bos.Row>
      </Bos.Container>

      <Footer />
    </>
  );
}

export default App;
