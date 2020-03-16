import React from "react";
import { useSelector } from 'react-redux';
import { SideNav, SideNavItem, Button } from 'react-materialize';



const NavbarMenu = () =>{
  const user = useSelector(state => state.user.user);

  return (
    <div>
      <SideNav
        options={{
        closeOnClick: true
        }}
        trigger={<Button node="button">SIDE NAV DEMO</Button>}
      >
        <SideNavItem
          user={{
            background: 'https://placeimg.com/640/480/tech',
            email: 'jdandturk@gmail.com',
            image: 'static/media/react-materialize-logo.824c6ea3.svg',
            name: 'John Doe'
          }}
          userView
        />
        <SideNavItem
          href="#!icon"
          icon="cloud"
        >
        First Link With Icon
        </SideNavItem>
        <SideNavItem href="#!second">
          Second Link
        </SideNavItem>
        <SideNavItem divider />
        <SideNavItem subheader>
          Subheader
        </SideNavItem>
        <SideNavItem
          href="#!third"
         waves
        >
          Third Link With Waves
        </SideNavItem>
      </SideNav>
    </div>
  )
}

export default NavbarMenu;