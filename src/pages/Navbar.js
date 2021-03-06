/**
 * 
 */

import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import * as AiIcons from 'react-icons/ai'
import { IconContext } from 'react-icons/lib'
import { BiDotsVerticalRounded } from '@react-icons/all-files/bi/BiDotsVerticalRounded'

/**menu data*/
import { Navbar_data } from '../components/Navbar/Navbar_data'
/**menu */
import Menu from '../components/Navbar/Menu'
/**styles */
import '../components/Navbar/styles.css'


const Navbar = () => {

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav>
                    <NavIcon to='#'>
                        <BiDotsVerticalRounded className='icon' onClick={showSidebar} />
                    </NavIcon>
                </Nav>
                <SidebarNav sidebar={sidebar}>
                    <SidebarWrap className='menu_container'>
                        <NavIcon to='#' >
                            <AiIcons.AiOutlineClose onClick={showSidebar} />
                        </NavIcon>
                        {Navbar_data.map((item, index) => {
                            return (
                                <Menu item={item} key={index} />
                            )
                        })}
                    </SidebarWrap>
                </SidebarNav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar


/**
 * styles
 */

// container of icon 
const Nav = styled.div`
    background : #15171c;
    height : 40px;
    display : flex;
    justify-content : flex-start;
    align-items : center;
`
//icon 
const NavIcon = styled(Link)`
    margin-left: 2rem;
    font-size: 2rem;
    height: 40px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color : white;
`

// container of menu
const SidebarNav = styled.nav`
    background: #15171c;
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
    transition: 350ms;
    z-index: 10;  
`;

const SidebarWrap = styled.div`
    width: 100%;
`;