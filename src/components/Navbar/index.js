import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  DropDownContent,
  DropDownLi,
  SubA,
  Dropbtn
} from './NavbarElements';

const Navbar = () => {
  return (
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to="/" className="active">
            <span>Home</span>
            <span className="sanskrit-text">मुख्यपटः</span>
          </NavLink>
          <NavLink to='/curicullum' activeStyle>
            <span>Curicullum</span>
            <span className="sanskrit-text">पाठ्यक्रमः</span>
          </NavLink>
          <DropDownLi>
            <Dropbtn to="/" activeStyle>
              <span>Participate</span>
              <span className="sanskrit-text">पाठ्यक्रमः</span>
            </Dropbtn>
            <DropDownContent>
              <SubA to ="/study" >Study</SubA>
              <SubA to ="/volunteer" activeStyle>Volunteer</SubA>
            </DropDownContent>
          </DropDownLi>
          <NavLink to='/about' activeStyle>
            <span>About Us</span>
            <span className="sanskrit-text">सस्थांविशये</span>
          </NavLink>
          <NavLink to='/contact' activeStyle>
            <span>Contact Us</span>
            <span className="sanskrit-text">सम्पर्कः</span>
          </NavLink>

        </NavMenu>
      </Nav>
  );
};

export default Navbar;