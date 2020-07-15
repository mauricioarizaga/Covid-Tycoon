import React  from 'react';
import {connect} from 'react-redux'
import {Container , Row, Col} from 'react-bootstrap'
import styles from './News.module.css'




export function News({titulo, descripcion, influencia,id}){
    
   

    
    return(
        <Container > 
            <Row key={id}>
                <h4> {titulo} </h4>
            </Row>
            <Row>
               <p>{descripcion}</p> 
            </Row>
            <Row>
               <p>{influencia}</p> 
            </Row>
          
        </Container>
    )
    
} 



// function NoticiaRandom(props){
//     return Math.floor(Math.random() * (props.total.length - 0 + 1)) + 0
// }


function mapStateToProps(state,) {
    
    return {
   
      
    };
  }

  function mapDispatchToProps(dispatch) {
    return {
        
    };
  }

  export default connect(
      mapStateToProps,
      mapDispatchToProps,
  )(News)