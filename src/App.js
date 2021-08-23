import  Header from './components/header';
import About from './components/about';
import Footer from './components/footer';
import QuoteOne from './components/quote-1';
import QuoteTwo from  './components/quote-2';
import './App.css';
import Testimonials from './components/testimonial';

function App() {
  return (
    <>
    <div className="App">
      <Header />

      <QuoteOne />
      <About />
      <QuoteTwo />
      <Testimonials />
      <Footer />

    </div>
    </>
  );
}

export default App;
