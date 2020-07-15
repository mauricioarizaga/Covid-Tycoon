import React , {useEffect}from 'react';
import {connect} from 'react-redux'
import News from './News'
import {Container , Row} from 'react-bootstrap'
import style from './NewsFeed.module.css'
import {newNews} from '../../actions/index'

export  function NewsFeed(props) {
    useEffect(() => { 
        setInterval(() => { console.log("se disparo el interval")
            const obj = props.newNews()
            console.log('action creada', obj) 
        }, 6000);
    }, []);
    console.log(props.news)
    return (
        <Container className = {style.news}>
            <Row>
                <h2>News Feed</h2>
            </Row>
            <Row className = {style.invertir}>
            {props.news.map(c=>
            <News
            titulo = {c.titulo}
            descripcion = {c.descripcion}
            influencia = {c.influencia}
            id= {c.id}
            />)}
            </Row>
                
          
            
        </Container>
    )
}

function mapStateToProps(state) {
   
    return {
      news: state.news,
      
    };
  }

  function mapDispatchToProps(dispatch) {
    return {
        
       newNews:() => {
           console.log('y esto?');
           dispatch(newNews())
        }
    };
  }

  export default connect(
      mapStateToProps,
      mapDispatchToProps,
  )(NewsFeed)