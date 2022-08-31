import React from 'react'
import { useThemeContext } from '../context/themeContext';
import styled from 'styled-components';
import menu from '../utilts/menu'
import Link from 'next/link';

function Sidebar() {
    const theme = useThemeContext()
    return (
        <SidebarStyled theme = {theme}>
            <nav className="navigation">
                <div className="top-nav">
                    <ul className="nav-items">
                        {
                            menu.map((item) => {
                                return <li key={item.id} className={"nav-item"}>
                                    {item.icon}
                                    <Link href={item.url}>{item.name}</Link>
                                </li>
                            })
                        }
                    </ul>

                </div>
            </nav>
        </SidebarStyled>
    )
}

const SidebarStyled = styled.div`
    width: ${props => props.theme.sidebarWidth};
    background-color: ${props => props.theme.colorBg2};
    position: fixed;
    height: calc(100vh - 8vh);

    .navigation{
        margin: 1rem 0;
        disply: flex;
        flex-direction: column;
        justify-content: space-between;
        heght: 100%;
        .nav-item{
            padding: .5rem 2rem;
            display: grid;
            grid-template-columns: 40px 1fr;
            margin: .3rem 0;
            cursor: pointer;
            position: relative;

        }
    }
`;

export default Sidebar

