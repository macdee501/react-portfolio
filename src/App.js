import './index.css';
import Header from './components/header/Header';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import MyProjects from './components/myprojects/MyProjects';
import Contact from './components/contacts/Contact';
import Footer from './components/footer/Footer';
import NavBar from './components/nav/NavBar';

function App() {
  return (
    <>
        <Header/>
        <NavBar/>
        <About/>
        <Experience/>
        <MyProjects/>
        <Contact/>
        <Footer/>
    </>
  );
}

export default App;
