import React,{ useState, useEffect }from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect, Switch, Link } from 'react-router-dom';

import Home from './vistas/home/Home';
import Login from './Login';
import Clientes from './vistas/clientes/Clientes';
import Abonos from "./vistas/abonos/Abonos";
import Servicios from "./vistas/servicios/Servicios";
import Presupuestos from "./vistas/presupuestos/Presupuestos";

import NavbarMenu from './navbar/NavbarMenu';
import Heder from  "./heder/Heder";


 const Main = (props) =>{
  const [isLoguin, setLoguin] = useState(false)
  const user = useSelector(state => state.user.user);
  
  useEffect(()=>{
    if(Object.keys(user).length != 0){
      setLoguin(true)
    }
  })
    
  return(

			<div style = {styles.contenedor}>
       <div> { isLoguin ? <Heder /> : <div/>}</div> 
        <Switch>
          <Route exact path='/' render={({ history }) => (isLoguin ? <Home history={history} user={user}/> : <Redirect to='/login' />)} />
          <Route exact path='/login' render={({ history }) => (<Login history={history} />)} />
          <Route exact path='/home' render={({ history }) => (<Home history={history} user={user}/>)} />
          <Route exact path='/clientes' render={({ history }) => (<Clientes history={history} user={user}/>)} />
          <Route exact path='/abonos' render={({ history }) => (<Abonos history={history} user={user}/>)} />
          <Route exact path='/servicios' render={({ history }) => (<Servicios history={history} user={user}/>)} />
          <Route exact path='/presupuestos' render={({ history }) => (<Presupuestos history={history} user={user}/>)} />
        </Switch>      
      </div>
    )
  
}

const styles = {
  contenedor:{
    height: '100vh',
    display: 'grid',
	  gridGap: '10px',
	  // gridTemplateColumns: '250px repeat(4 , minmax(200px, 1fr))',
	  // gridTemplateRows: '1fr 3fr 1fr',
  }
}

export default Main;
