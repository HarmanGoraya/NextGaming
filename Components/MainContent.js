import React from 'react'
import styled from 'styled-components';
import { useThemeContext } from '../context/themeContext';

function MainContent({children}) {
    const theme = useThemeContext()
    return (
        <MainContentStyled theme={theme}> 
        {children}
        </MainContentStyled>
    )
}

const MainContentStyled = styled.main`
    min-height: 100vh;
    background-color: ${props => props.theme.colorBg3};
    margin-top: 8vh;
    padding: 2rem 1.5rem;
    margin-left: ${props => props.theme.sidebarWidth};

`;
export default MainContent