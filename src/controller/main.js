import * as React from "react";
import * as Bos from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export function CekAkun() {
  const Navigate = useNavigate();
  if (!localStorage._token) {
    Navigate("/login");
  } else {
    var _token = localStorage._token;
    const data = new FormData();
    data.append("token", _token);
    const fetchReq = {
      method: "POST",
      body: data,
    };

    fetch("http://lks.test/api/user/show/" + _token, fetchReq)
      .then((res) => res.json())
      .then(
        (result) => {
          sessionStorage.setItem("is_admin", result.is_admin);
          return result;
        },
        (error) => {
          return false;
        }
      );
  }
}
