import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'

function Layout({children}) {
    return (
            <React.Fragment>
                <Header />
                <Sidebar />
                {children}
            </React.Fragment>            
    )
}



export default Layout