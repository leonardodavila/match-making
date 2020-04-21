import React, { Component } from "react";
import "./styles.css";
import CarErro from "../assets/CarErro.png";
import { history } from "../navigation/history";

class NotFound extends Component {
  render() {
    return (
      <div className="notfound">
        <div className=" ">
          <h1 className="number">404</h1>
          <h1 className="msg">Página não encontrada</h1>
          <div>
            <img
              className="imgCarErro"
              src={CarErro}
              alt="Imagem para Erro 404"
            />
          </div>
        </div>
        <button
          className="btn btn-primary"
          onClick={() => {
            redirect();
          }}
        >
          Página inicial
        </button>
      </div>
    );
  }
}
function redirect() {
  history.push("/Home");
}
export default NotFound;