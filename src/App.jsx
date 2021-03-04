import React from 'react'
import { Banner } from './components/banner/Banner'
import { NavBar } from './components/navbar-material-ui/NavBar'
import { NavInformation} from './components/nav-information/NavInformation'
import { NavTools} from './components/nav-tools/NavTools'

export const App = () => {
    return (
        <>
            <NavBar/>
            <Banner/>
            <NavInformation/>
            <NavTools/>
        </>
    )
}
