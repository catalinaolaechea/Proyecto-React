import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import Header from './componentes/header/Header'
import Hero from './componentes/Hero/Hero'
import Inspo from './componentes/inspo-section/Inspo'
import App from './App'
import Footer from './componentes/footer/Footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Hero/>
    <main>
      <Inspo/>
      <App />
    </main>
    <Footer/>
  </StrictMode>
)
