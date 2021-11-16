import React from 'react'
import Content from './components/layout'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import './App.css'

function App() {
    return (
        <>
            <div className="App">
                <Header />
                <Content />
                <Footer />
            </div>
        </>
    )
}

export default App
