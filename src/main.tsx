import React from 'react'
import App from "./App";
import Nav from  "./components/Nav/NavBar";
import Rarity from "./components/Rarity/Rarity";
import RoadMap from "./components/Roadmap/Timeline";
import Faq from "./components/Faq/Faq";
import Video from "./components/Video/Video";
import Text from "./components/Text/Text";
import Team from "./components/Team/Team";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import "./main.css"

export default function main() {
  return (
    <div className='main-dev'>
                <div id="Home"><Nav/></div>
                <div className='mt-5'><Rarity/></div>
                <div id="Text"className='mt-5'><Text/></div>
                <div className='mt-5'id="Mint"><App/></div>
                <div className='mt-5' id="Video"><Video/></div>
                <div id="About"><About/></div>
                <div id="Roadmap"><RoadMap/></div>
                <div id="Team"className='mt-5'><Team/></div>
                <div id="Faq" className='mt-5'><Faq/></div>
                <div className='mt-5'><Footer/></div>
               

    </div>
  )
}
