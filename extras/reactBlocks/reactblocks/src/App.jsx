import { useState } from 'react'
import MainContent from './components/MainContent/MainContent';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import './App.css'

function App() {
    return (
        <div className="appContainer">
            <Header />
            <div className="mainSection">
                <Navigation />
                <MainContent />
            </div>
        </div>
    )
}

export default App
