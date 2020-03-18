import React,{ } from "react";
import { useSelector } from 'react-redux';
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
        trigger={<a href="#!">Dropdown{' '}<Icon right>arrow_drop_down</Icon></a>}
      >
        <a href="#">
          one
        </a>
        <a href="#">
          two
        </a>
        <Divider />
        <a href="#">
          three
        </a>
      </Dropdown>
    </Navbar>
    </div>
  )
} 

export default Heder;
