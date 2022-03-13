
import Home from './components/Home'
import Nav from './components/Nav';
import About from './components/About';
import Cmt from './components/Cmt';
import Submission from './components/Submission';
import Contact from './components/Contact';
import CallPapers from './components/CallPapers';
import Speaker from './components/Speaker';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">

      <Nav />
      <Home />
      <About />
      <Cmt />
      <CallPapers />
      <Speaker />
      <Submission />

      <Contact />

      <Footer />

    </div>
  );
}

export default App;
