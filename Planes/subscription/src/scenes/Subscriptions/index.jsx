import React from 'react';
import './../../App.css';
import {Link} from "react-router-dom";
import Fab from '@material-ui/core/Fab';
import MediaCard from '../../components/Cards';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
function Subscriptions() {
  //const baseURL = process.env.REACT_APP_API_URL;
  return (
    <div className="App">
      <header className="App-header">
      <Typography style={{alignItems:'left'}} variant="h4">Plans</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={2}>
              {dataPlans.map(value => (
                <Grid key={value.id} item>
                  <MediaCard {...value} />
                </Grid>
              ))}
            </Grid>
          </Grid>          
        </Grid> 
        <Link to='/'>
          <Fab style={{margin: '10px 0px'}} color="primary">
            <i className="material-icons"> keyboard_backspace </i>
          </Fab>
        </Link> 
      </header>
    </div>
  );
}
  
export default Subscriptions;

export const dataPlans = [{id:0,title:'Semanal',logo:'https://www.ttandem.com/media/diferentes-metodos-de-pago-que-existen-en-las-tiendas-online.jpg'},
                      {id:1,title:'Mensual',logo:'https://www.ttandem.com/media/diferentes-metodos-de-pago-que-existen-en-las-tiendas-online.jpg'},
                      {id:2,title:'Anual', logo: 'https://www.ttandem.com/media/diferentes-metodos-de-pago-que-existen-en-las-tiendas-online.jpg'}]