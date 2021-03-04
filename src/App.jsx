import React from 'react'
import { Banner } from './components/banner-data/Banner'
import { NavBar } from './components/navbar-material-ui/NavBar'
import { NavInformation} from './components/nav-information/NavInformation'
import { NavTools} from './components/nav-tools/NavTools'

export const App = () => {
    return (
        <>
            <NavBar/>
            <Banner/>
            <NavInformation/>
            <NavTools id="1" title="Crea tu cuenta" subtitle="Crea o ingresa tu cuenta para comenzar." paragraph="Registra a todas tus mascotas en tu cuenta pra llevarlas siempre contigo."/>
            <NavTools id="2" title="Explora el historial medico" subtitle="Registra y consulta historiales medicos." paragraph="Puedes registrar cualquier evento de tus mascotas y no perderlos de vista."/>
        </>
    )
}
