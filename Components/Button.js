import React from 'react'
import styled from 'styled-components'
import { useThemeContext } from '../context/themeContext';


function Button({
    icon,
    name,
    background,
    selector,
    padding,
    borderRad,
    fw,
    fs,
    click,
    type,
    blob,
}) {

    const theme = useThemeContext()

    return (
        <ButtonStyled 
            theme={theme} 
            className={selector} 
            onClick={click}
            style={{
                background: background,
                padding:padding,
                borderRadius: borderRad,
                fontWeight: fw,
                fontSize: fs
            }}
        >
            {icon}
            {name}
            <span className={blob}></span>
        </ButtonStyled>
    )
}

const ButtonStyled = styled.button`
    display: flex;
    align-items: center;
    position: relative;
    color: ${props => props.theme.colorWhite};
    z-index: 5;
    overflow: hidden;
    i{
        margin-right: 1rem;
        color: ${props => props.theme.colorGrey0} !important;
        font-size: 1.5rem;
    }

    .blob{
        position: absolute;
        top: 30px;
        width: 120px;
        height: 120px;
        border-radius: 50%;
        right: -60px;
        z-index: -1;
        background-color:  ${props => props.theme.colorIcons};
        transition: all 0.4s ease-in-out;
        opacity: 0.7;
    }
    &:hover{
        .blob{
            transform: scale(1.7);
        }
    }
`;

export default Button