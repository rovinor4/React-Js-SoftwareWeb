import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap-icons/font/bootstrap-icons.css";
import * as React from "react";
import * as Bos from "react-bootstrap";
import Navbar from "../Navbar";
import Footer from "../Footer";
import $ from "jquery";
import { Link } from "react-router-dom";

function App() {
  const [error, setError] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [search, setSearch] = React.useState("");
  const [input, setInput] = React.useState("");

  function shortenText(text, maxLength) {
    if (text.length > maxLength) {
      return text.slice(0, maxLength - 3) + "...";
    }
    return text;
  }

  React.useEffect(() => {
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

  return (
    <>
      <Navbar url="/news" />

      <Bos.Container className="my-5 pt-5">
        <div className="text-center">
          <h3 className="fw-bold text-primary">News</h3>
        </div>

        <Bos.Row className="g-4 mt-3">
          {(() => {
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
                <Bos.Col md={4}>
                  <Bos.Card className="shadow rounded-5 overflow-hidden">
                    <Bos.CardImg
                      src={"http://lks.test/storage/" + item.file.split("/")[1]}
                    />
                    <Bos.Card.Body>
                      <h4 className="my-3">{item.judul}</h4>
                      <p className="text-muted">
                        {shortenText(item.isi.replace(/<[^>]*>/g, ""), 200)}
                      </p>
                      <Link to={"/news/"+item.slug}>
                        <Bos.Button className="my-2 w-100 btn-dark rounded-pill">
                          Open Artikel
                        </Bos.Button>
                      </Link>
                    </Bos.Card.Body>
                  </Bos.Card>
                </Bos.Col>
              ));
            }
          })()}
        </Bos.Row>
      </Bos.Container>

      <Bos.Button className="mx-auto d-block mb-4" id="load" onClick={loadMore}>
        Show More News
      </Bos.Button>

      <Footer />
    </>
  );
}

export default App;
