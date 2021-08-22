import  Header   from './components/header';
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
      <QuoteTwo />
      <Testimonials />

    </div>
    </>
  );
}

export default App;
