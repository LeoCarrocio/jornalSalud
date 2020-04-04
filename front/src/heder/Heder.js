import React,{ } from "react";
import { useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { Navbar, NavItem, Icon, Divider,Dropdown } from 'react-materialize';

import NavbarMenu from ".././navbar/NavbarMenu";

const Heder  = () =>{
  
  const user = useSelector(state => state.user.user);
  return(
    <div>
      <Navbar
        alignLinks="left"
        brand={<a className="brand-logo right" href="#">Logo</a>}
        menuIcon={<Icon>menu</Icon>}
        options={{
          draggable: true,
          edge: 'left',
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 200,
          preventScrolling: true
        }}
      >
      {/* <NavItem href="">
        Getting started
      </NavItem>
      <NavItem href="components.html">
        Components
      </NavItem> */}
      <Dropdown
        options={{
        alignment: 'left',
        autoTrigger: true,
        closeOnClick: true,
        constrainWidth: true,
        container: null,
        coverTrigger: true,
        hover: false,
        inDuration: 150,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        outDuration: 250
        }}
        // trigger={<a href="#!">Dropdown{' '}<Icon right>home</Icon></a>}
        trigger={<Link to="/clientes"><Icon right>arrow_drop_down</Icon></Link>}
     >
        <Link to="/clientes"> clientes</Link>
        <Link to="/servicios"> servicios</Link>
        <Link to="/presupuestos"> presupuestos</Link>
        <Link to="/abonos"> abonos</Link>
        <Divider />
        <Link to="/perfil"> perfil</Link>
      </Dropdown>
    </Navbar>
    </div>
  )
} 

export default Heder;
