import { useState } from 'react'
import { BrowserRouter , Routes , Route} from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Contacts from './pages/Contacts'
import More from './pages/More'
import Notfound from './pages/Notfound'
import Footer from './components/Footer'
import Header from './components/Header'


function App() {

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path='/home' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/contacts' element={<Contacts/>} />
    <Route path='/more' element={<More/>} />
    <Route path='/notfound' element={<Notfound/>} />
    
    </Routes>
    <Footer />
    </BrowserRouter>

    
    </>
  )
}

export default App
