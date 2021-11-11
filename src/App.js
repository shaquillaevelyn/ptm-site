import React from 'react'
import Content from './components/styles/layout'
import Header from './components/header'
import Footer from './components/footer'
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
