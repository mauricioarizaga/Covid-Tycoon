import React from "react";
import { connect } from "react-redux";
import NewsFeed from "../News/NewsFeed";
import Card from "../Card/Card";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./juego.module.css";

export function Juego(props) {
  return (
    <Container>
      <Row>
        <Col sm={4}>
          <NewsFeed />
        </Col>
        <Col sm={8} className={styles.cards}>
          {props.empresas.map((c) => (
            <Card
              name={c.name}
              pais={c.pais}
              rubro={c.rubro}
              tendencia={c.tendencia}
              valor={c.valor}
              id={c.id}
            />
          ))}
        </Col>
      </Row>
    </Container>
  );
}

function mapStateToProps(state) {
  return {
    empresas: state.empresas,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Juego);
