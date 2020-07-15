import React from "react";
import { connect } from "react-redux";
import { Navbar, Container, Row, Col, Brand, text } from "react-bootstrap";
import styles from "./NavBar.module.css";
import { Button } from "react-bootstrap";
import Timer from "../Timer/Timer";
import { Link } from "react-router-dom";

export function NavBar(props) {
  console.log(props);
  return (
    <Navbar bg="dark" variant="dark" className={styles.nav}>
      <Navbar.Brand>Covid-Tycoon</Navbar.Brand>
      <div>
        <Navbar.Text className={styles.datos}>
          Jugador: {props.jugador.nombre}
        </Navbar.Text>
        <Navbar.Text className={styles.datos}>
          Dinero Disponible: ${props.jugador.dinero}
        </Navbar.Text>
      </div>

      <div>
        <Link to="/">
          <Button variant="secondary" className={styles.boton}>
            Instrucciones
          </Button>
        </Link>
        <Link to="/fin">
          <Button variant="warning" className={styles.boton}>
            Finalizar
          </Button>
        </Link>
      </div>
    </Navbar>
  );
}

export function mapStateToProps(state) {
  return {
    jugador: state.jugador,
  };
}

export function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
