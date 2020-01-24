import React from 'react';
import './../../App.css';
import {Link} from "react-router-dom";
import Fab from '@material-ui/core/Fab';
import MediaCard from '../../components/Cards';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import SimpleTable from '../../components/Table';
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
      <div className="App-body" >
        <div >
          <SimpleTable rows={rows} columns={columns} />
        </div>
      </div>
    </div>
  );
}
export default Subscriptions;

export const dataPlans = [{id:0,title:'Semanal',textButton:'Pay',characters:[{desc:'-caracter dvervre rgtgt t hregeret et hetger gerhrt h tr tr thtrhtrhtyjo l'},{desc:'-caracter'},{desc:'-caracter'}],logo:'https://www.ttandem.com/media/diferentes-metodos-de-pago-que-existen-en-las-tiendas-online.jpg'},
                      {id:1,title:'Mensual',textButton:'Payy',characters:[{desc:'-caracter  fdsfr hyjt ger ger gtrjhyherg frfhyjy jtyhgergergfsdff j j  wef wtr yu tyuy'},{desc:'-caracter'},{desc:'-caracter'},{desc:'-caracter'},{desc:'-caracter'}],logo:'https://www.ttandem.com/media/diferentes-metodos-de-pago-que-existen-en-las-tiendas-online.jpg'},
                      {id:2,title:'Anual',textButton:'Payy',characters:[{desc:'-caracter ger y juy jtrgerfgergtrhjty jy htrger gtr htyjhtyhgrv rfv'},{desc:'-caracter'},{desc:'-caracter'},{desc:'-caracter'},{desc:'-caracter'},{desc:'-caracter'},{desc:'-caracter'}], logo: 'https://www.ttandem.com/media/diferentes-metodos-de-pago-que-existen-en-las-tiendas-online.jpg'}]


export const columns = ['Caracteristicas','Gratis','Basic','Premium'];

export const rows = [{'Caracteristicas':'PRECIO MENSUAL (USD)','Gratis':'$0','Basic':'$9.99','Premium':'$14.99'},
                      {'Caracteristicas':'PRECIO ANUAL (USD)','Gratis':'$0','Basic':'$99.9','Premium':'$149.99'},
                      {'Caracteristicas':'NO. SUSTANCIAS','Gratis':'X','Basic':'X','Premium':'X'},
                      {'Caracteristicas':'HAZOP','Gratis':'X','Basic':'X','Premium':'X'},
                      {'Caracteristicas':'LOPA','Gratis':'X','Basic':'X','Premium':'X'},
                      {'Caracteristicas':'POOLFIRE','Gratis':'X','Basic':'X','Premium':'X'},
                      {'Caracteristicas':'JETFIRE','Gratis':'X','Basic':'X','Premium':'X'},
                      {'Caracteristicas':'FIREBALL - BLEVE','Gratis':'X','Basic':'X','Premium':'X'},
                      {'Caracteristicas':'VAPOR CLOUD EXPLOSION','Gratis':'X','Basic':'X','Premium':'X'},
                      {'Caracteristicas':'PHYSICAL EXPLOSION','Gratis':'X','Basic':'X','Premium':'X'},
                      {'Caracteristicas':'RISK INDIVIDUAL','Gratis':'X','Basic':'X','Premium':'X'},
                      {'Caracteristicas':'SOCIETAL RISK','Gratis':'X','Basic':'X','Premium':'X'},
                      {'Caracteristicas':'PROBIT','Gratis':'X','Basic':'X','Premium':'X'},
                      {'Caracteristicas':'DOW INDEX','Gratis':'X','Basic':'X','Premium':'X'},
                      {'Caracteristicas':'DOW CHEM','Gratis':'X','Basic':'X','Premium':'X'}]