import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SubMenu = ({ item }) => {

    const [subnav, setSubnav] = useState(false)

    const showSubnav = () => setSubnav(!subnav)

    return (
        <>
            <SidebarLink
                to={item.path}
                onClick={item.subNav && showSubnav}>
                <div>
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                </div>
                <div>
                    {item.subNav && subnav
                        ? item.iconOpened
                        : item.subNav
                            ? item.iconClosed
                            : null}
                </div>
            </SidebarLink>
            {subnav && item.subNav.map((item, index) => {
                return (
                    <DropdownLink to={item.path} key={index}>
                        {item.icon}
                        <SidebarLabel>{item.title}</SidebarLabel>
                    </DropdownLink>
                )
            })}
        </>
    );
};

export default SubMenu;


/**
 * components for the menu
 */

const SidebarLink = styled(Link)`
    display: flex;
    color: #e1e9fc;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    list-style: none;
    height: 60px;
    text-decoration: none;
    font-size: 18px;
    box-shadow: 0 0 0 0 #000, inset -1px -1px 0 0px #CCC;


    &:hover {
    background: #252831;
    border-left: 4px solid white;
    cursor: pointer;
    color: white;
    text-decoration: none;
    }
`;
const SidebarLabel = styled.span`
    margin-left: 16px;
`;

const DropdownLink = styled(Link)`
    text-decoration: none;
    color:  white;
    display: block;
    font: inherit;
    background: none;
    border: none;
    cursor: pointer;
    border: 2px solid white;
    background-color: black;
    padding: .5rem 1rem;
    font-size: 1.25rem;
    font-weight: 500;
    border-radius: .25rem;
    box-shadow: 4px 4px 0 0 #000;
    transition: .15s ease;
    &:hover {
    color: white;
    outline: 0;
    transform: translate(4px, 4px);
    box-shadow: 0 0 0 0 #000, inset -2px -2px 0 4px #CCC;
    border: 2px solid white;
    background-color: black;
    }
`;