import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './components/Header.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Testomonails from './components/Testomonails.jsx'
import Contact from './components/Contact.jsx'
import { ToastContainer} from 'react-toastify';
import Footer from './components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer />
    <Header /> 
    <About />
    <Projects /> 
    <Testomonails />
    <Contact />
    <Footer />
  </StrictMode>,
)
