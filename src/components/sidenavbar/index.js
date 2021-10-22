import React from "react";
import styled, { css } from 'styled-components';
import { NavLink as Link } from "react-router-dom";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons/lib";

import '../../css/sidenavbar.scss'

import * as colors from "../../colors";
import Arrow from "../../images/arrow-icon.png";
import SearchWhite from "../../images/search-icon-white.png";

export default class SideNavBar extends React.Component {

  /* Write the necessary functions to show and hide the side bar on small devices */
  constructor(props) {
    super(props)
    this.state = {
      isOpen: true
    }
  }

  openSidebar() {
    this.setState({ isOpen: !this.state.isOpen })
  }


  render() {
    const { isOpen } = this.state;

    return (
      <>
        <IconContext.Provider value={{ color: 'white' }}>
          <Nav>
            <NavHambuger to="#">
              <FaIcons.FaBars onClick={() => this.openSidebar()} />
            </NavHambuger>
            <h1
              style={{
                textAlign: "center",
                marginLeft: "200px",
                color: "white"
              }}
            >
              Movie Search
            </h1>
          </Nav>
          <SideNavBarCont isOpen={isOpen}>

            {/* Implement a hamburger icon slide in effect for small devices */}
            <NavHambuger to="#">
              <AiIcons.AiOutlineClose onClick={() => this.openSidebar()} />
            </NavHambuger>
            <SideNavMainLink className="menu_nav_link main_nav_link" to="/" exact>
              Wesley
              <NavIcon>
                <img src={Arrow} />
              </NavIcon>
            </SideNavMainLink>

            <SideNavMainLink className="menu_nav_link" to="/discover">
              Discover
              <NavIcon>
                <img src={SearchWhite} />
              </NavIcon>
            </SideNavMainLink>

            <SideNavHeader><HeaderText>Watched</HeaderText></SideNavHeader>
            <NavLink className="menu_nav_link" to="/watched/movies">Movies</NavLink>
            <NavLink className="menu_nav_link" to="/watched/tv-shows">Tv Shows</NavLink>

            <SideNavHeader><HeaderText>Saved</HeaderText></SideNavHeader>
            <NavLink className="menu_nav_link" to="/saved/movies">Movies</NavLink>
            <NavLink className="menu_nav_link" to="/saved/tv-shows">Tv Shows</NavLink>

          </SideNavBarCont>
        </IconContext.Provider>
      </>
    );
  }
}

// text hover use ${colors.sideNavBarHover}; 

const SideNavBarCont = styled.div`
  z-index: 9;
  width: 200px;
  height: 100%;
  background-color: ${colors.sideNavBar};
  display:flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  transition: 400ms;
`

const SideNavMainLink = styled(Link)`
  position: relative;
  display: block;
  padding: 25px 35px;
  font-size: 1.6em;
  font-weight: 700;
  color: white;
  text-align: center;

  &:hover{
    color: #DFDFDF;
  }
`

const NavIcon = styled.div`
  position: absolute;
  left: 6%;
  top: 30%;
  
`

const SideNavHeader = styled.div`
  text-align: center;
  font-size: 1.3rem;
  margin-top: 0.7rem;
`

const HeaderText = styled.div`

`

const NavLink = styled(Link)`
  display: block;
  color: white;
  text-align: center;
  margin-top: 0.3rem;

  &:hover{
    color: #DFDFDF;
  }
`

const Nav = styled.div`
  background-color: ${colors.sideNavBar};
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavHambuger = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;