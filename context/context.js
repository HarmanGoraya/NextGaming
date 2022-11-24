import React, { useContext, useEffect, useReducer, useState } from "react"
import reducer from '../reducers/statsreducer';
import { BEGIN_DATA_FETCH, CLOSE_MODAL, COLLAPSE_MENU, DATA_FETCHED, FETCH_GAME, FETCH_GAME_BEGIN, OPEN_MODAL, PAGE_SIZE, 
    POPULAR_DATA_FETCHED, SEARCH_DATA_FETCHED, UPCOMING_GAMES } from "../utilts/actions";
import {API_KEY} from '../config'
import axios from "axios";

const baseUrl = `https://api.rawg.io/api/games?key=${API_KEY}`


const StatsContext = React.createContext()

export const ContextProvider = ({ children }) => {

    const initialState = {
        collapsed: false,
        loading: false,
        page_size: 12,
        modal_open: false,
        modal_id: null,
        game_data: {
            platforms: [],
            genres: []
        },
        homepage_games: [],
        popular_games: [],
        upcoming_games: [],
        games: [],

    }

    const [state, dispatch] = useReducer(reducer, initialState)

    const fetchGames = async (url) => {
        dispatch({type: BEGIN_DATA_FETCH})
        try {
            const res = await axios.get(url)
            dispatch({
                type: DATA_FETCHED,
                payload: res.data.results
            })
        } catch (error) {
            console.log(err);
        }
    }


    //collapse menu
    const collapseMenu = () =>{
        dispatch({
            type: COLLAPSE_MENU
        })
    }

    console.log(state)

    useEffect(() =>{
        fetchGames(baseUrl)
    },[])

    return (
        <StatsContext.Provider value={{...state, collapseMenu}}>
            {children}
        </StatsContext.Provider>
    )
}

export const useStatsContext = () => {
    return useContext(StatsContext)
}