import React from 'react'
import Content from './components/layout'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import './App.css'
import Landing from './pages/landing/landing'

function App() {
    return (
        <>
            <div className="App">
                <Header />
                <Landing />
                <Footer />
            </div>
        </>
    )
}

export default App
