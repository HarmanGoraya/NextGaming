import React, { useContext, useEffect, useReducer, useState } from "react"
import reducer from '../reducers/statsreducer';
import { COLLAPSE_MENU } from "../utilts/actions";
import {API_KEY} from '../config'

const baseUrl = `https://api.rawg.io/api/games?key=${API_KEY}`

console.log(baseUrl)

const StatsContext = React.createContext()

export const ContextProvider = ({ children }) => {

    const initialState = {
        collapsed: false,
        
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    //collapse menu
    const collapseMenu = () =>{
        dispatch({
            type: COLLAPSE_MENU
        })
    }

    return (
        <StatsContext.Provider value={{...state, collapseMenu}}>
            {children}
        </StatsContext.Provider>
    )
}

export const useStatsContext = () => {
    return useContext(StatsContext)
}