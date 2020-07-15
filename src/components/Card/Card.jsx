import React from "react";
import { connect } from "react-redux";
import styles from "../Card/Card.module.css";
import { Button } from "react-bootstrap";
import { buyStocks } from "../../actions/actions.js";
export function Card({
  name,
  pais,
  ciudad,
  rubro,
  tendencia,
  valor,
  id,
  buyStocks,
}) {
  return (
    <div className={styles.card}>
      <h4 className={styles.h4}> {name} </h4>
      <div>
        <p>Pais: {pais}</p>
        <p>Ciudad: {ciudad}</p>
        <p>Rubro: {rubro}</p>
        <p>Tendencia: {tendencia}</p>
        <p>Valor: ${valor}</p>
      </div>
      <div className={styles.botones}>
        <Button variant="success">Vender</Button>
        <Button onClick={() => buyStocks({ valor, name, id })} variant="danger">
          Comprar
        </Button>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    empresas: state.empresas,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    buyStocks: (valor, name, id) => dispatch(buyStocks(valor, name, id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
