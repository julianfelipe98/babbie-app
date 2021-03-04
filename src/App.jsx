import React from 'react'
import { Banner } from './components/banner-data/Banner'
import { NavBar } from './components/navbar/NavBar'
import { NavInformation} from './components/banner-info/BannerInfo'
import { NavTools} from './components/card-info/CardInfo'
import { Footer } from './components/footer/Footer'

export const App = () => {
    return (
        <>
            <NavBar/>
            <Banner id="1" title="Aplicacion para la gestion veterinaria" subtitle="¡El amor es una palabra de cuatro patas!" paragraph="Descarga nuestra app en dispositivos android"/>
            <NavInformation/>
            <NavTools id="1" title="Crea tu cuenta" subtitle="Crea o ingresa tu cuenta para comenzar." paragraph="Registra a todas tus mascotas en tu cuenta pra llevarlas siempre contigo."/>
            <NavTools id="2" title="Explora el historial medico" subtitle="Registra y consulta historiales medicos." paragraph="Puedes registrar cualquier evento de tus mascotas y no perderlos de vista."/>
            <NavTools id="3" title="Siempre contigo" subtitle="Todo el historial medico a tus manos." paragraph="Consulta el historial medico de tus mascotas en cualquier momento y lugar."/>
            <Banner id="2" title="" subtitle="Descarga la aplicacion ahora!" paragraph="Disponible para tu dispositivo Android. comienza la experiencia ahora."/>
            <Footer/>
        </>
    )
}
