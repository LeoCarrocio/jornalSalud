import React,{ } from "react";
import { useSelector } from 'react-redux';
import { Navbar, NavItem, Icon } from 'react-materialize';

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
      <NavItem onClick={function noRefCheck(){}}>
        Getting started
      </NavItem>
      <NavItem href="components.html">
        Components
      </NavItem>
      <NavbarMenu />
      </Navbar>
    </div>







  )
} 

export default Heder;
