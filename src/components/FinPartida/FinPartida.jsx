import React from 'react'
import {connect} from 'react-redux'
import { Button , Container , Col , Row } from 'react-bootstrap'
import {Link} from 'react-router-dom'

export  function FinPartida () {
    return(
        <Container>
                <div>
                    <h1>Tus Resultados</h1>
                </div>
                <div>
                    <h3>Jugador nombre</h3>
                    <Col>
                        <Row>
                          <h4>Dinero</h4>
                        </Row>
                        <Row>
                            <p>Dinero Inicial: </p>
                            <p>Dinero Final: </p>
                        </Row>
                    </Col>
                    <Link to='/'>
                             <Button variant='success'>Reiniciar partida</Button>
                    </Link>
                    
                </div>
        </Container>
    )
}

function mapStateToProps(state) {
   
    return {
        state: state,
      
    };
  }

  function mapDispatchToProps(dispatch) {
    return {
       
    };
  }

  export default connect(
      mapStateToProps,
      mapDispatchToProps,
  )(FinPartida)