import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import './../../App.css';

export const Title = styled.div`
font-family: "Samarkan";
display: flex;
align-items: start;
z-index: 11;
color: red
font-size: 10em;
`;
export const Nav = styled.nav`
  background: #F5F5F5;
  display: flex;
  justify-content: space-between;
  align-items: start;
  z-index: 10;
  padding: 0;
  position: absolute;
  top: 4.5    em;
  right: 0;
`;


export const NavLink = styled(Link)`
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  padding: 1rem 4rem;
  height: 100%;
  cursor: pointer;
  font-size: 1.5em;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: lightyellow;
    color: black;
  }
  &.active {
    color: black;
  }
  .sanskrit-text {
    color: brown; 
    font-size: 0.8em;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #256ce1;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

export const Dropbtn = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  height: 100%;
  text-align: center;
  padding: 1.55rem 4rem;
  font-size: 1.5em;
  align-items: center;
  text-decoration: none;
  

  .sanskrit-text {
    color: brown; 
    font-size: 0.8em;
  }
`;

export const DropDownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

export const StyledLi = styled.li`
  float: left;
`;

export const DropDownLi = styled(StyledLi)`
  display: inline-block;
  &:hover {
    background-color: lightyellow;
  }
  &:hover ${DropDownContent} {
    display: block;
  }
`;


export const SubA = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  padding: 1rem 4rem;
  text-align: left;
  &:hover {
    background-color: #f1f1f1;
  }
`;
