import React from "react";
import styled, { css } from 'styled-components';
import { NavLink as Link } from "react-router-dom";
import * as FaIcons from 'react-icons/fa';
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
      isOpen: false,
    }
  }

  openSidebar() {
    this.setState({ isOpen: !this.state.isOpen })
  }


  render() {
    const { isOpen } = this.state;

    return (
      <>
        <IconContext.Provider value={{color:'white'}}>
          <div className="navBar">
            <Link to="#" className="menu-bars" >
              <FaIcons.FaBars onClick={() => this.openSidebar()} />
            </Link>
          </div>

          <SideNavBarCont className={isOpen ? 'visible' : 'hidden'}>

            {/* Implement a hamburger icon slide in effect for small devices */}
            <SideNavMainLink className="menu_nav_link main_nav_link" to="/" exact>
              Wesley
              <NavIcon>
                <img src={Arrow} />
              </NavIcon>
            </SideNavMainLink>

            <SideNavMainLink className="menu_nav_link" to="/discover">
              Discover
              <NavIcon search></NavIcon>
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
  position: fixed;
  z-index: 9;
  width: 280px;
  height: 100%;
  background-color: ${colors.sideNavBar};
  display:flex;
  flex-direction: column;
  margin-top: 0;
`

const SideNavMainLink = styled(Link)`
  position: relative;
  display: block;
  padding: 25px 35px;
  font-size: 1.6em;
  font-weight: 700;
  color: white;
`

const NavIcon = styled.div`
  position: absolute;
  right: 35px;
  top: 50%;
  
`

const SideNavHeader = styled.div`

`

const HeaderText = styled.div`

  &:hiver{
    text: ${colors.sideNavBarHover};
  }
`

const NavLink = styled(Link)`
  display: block;
`