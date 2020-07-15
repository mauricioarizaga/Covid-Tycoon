import React, { useState } from "react";
import { connect } from "react-redux";
import { setName } from "../../actions/actions";
import { Link } from "react-router-dom";
import {
  Button,
  InputGroup,
  FormControl,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import style from "./Home.module.css";

function Home(props) {
  console.log(props);

  const [username, setUserName] = useState("");

  return (
    <Container className={style.container}>
      <Row>
        <h3>Eliga un nombre de Usuario</h3>
      </Row>
      <Row>
        <Col>
          <div className={style.input}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                props.setName(username);
              }}
            >
              <input
                type="text"
                placeholder="nombre"
                name="username"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />
              <button type="submit">Que Comience el Juego!!!</button>
            </form>
          </div>
        </Col>
      </Row>

      <Link to="juego">
        <Button>Juego </Button>
      </Link>
    </Container>
  );
}

function mapStateToProps(state) {
  console.log(state);
  return {
    empresas: state.empresas,
    nombre: state.jugador,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setName: (algo) => dispatch(setName(algo)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
