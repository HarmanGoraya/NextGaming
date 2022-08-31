import React, { useContext, useEffect, useReducer, useState } from "react"


const StatsContext = React.createContext()

export const ContextProvider = ({ children }) => {

    return (
        <StatsContext.Provider value={'Hello World'}>
            {children}
        </StatsContext.Provider>
    )
}

export const useStatsContext = () => {
    return useContext(StatsContext)
}