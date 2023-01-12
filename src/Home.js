
import About from './About';
import './App.css';
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import Howworks from './Howworks';
import Navbar from './Navbar';
import Sendmoney from './Sendmoney';

function Home() {
  return (
    <>

    <Navbar/>
    <Header/>
    <Howworks/>
    <About/>
    <Sendmoney/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default Home;
