import React from 'react'
import styled from "styled-components"

const Navbar = () => {
    const scrollfooter=()=>window.scrollTo({
        top:document.documentElement.scrollHeight,
        behavior:"smooth"
    });
    return (
        <NavbarContainer>
            <nav className="navbar navbar-expand-lg">
                <label className="navebar_frfpd" style={{marginLeft: "20px" }} >
                Student Association
                    </label>
             
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="nav_items">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home </a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link">About</a>
                        </li> */}
                        <li className="nav-item">
                            <a className="nav-link" onClick={scrollfooter}>Contact us</a>
                        </li>
                    </ul>
                    </div>

                </div>
            </nav>

        </NavbarContainer>
    );
};

export default Navbar
//Main NAvbar container 
const NavbarContainer = styled.div`
    background : var(--yellow);
    .nav-link{
    color : #fff !important  ;
   
    &:hover {
        background : var(--light-black);
    }
`;