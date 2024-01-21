import { Routes, Route } from "react-router-dom"

import styles from './style.js';

import { Navbar, Home, Events, Dashboard, Calendar, Login, Footer } from "./components"

function App() {
    return(
      <>
      <div className='bg-black w-full overflow-hidden text-white'>
        <div className={`${styles.paddingX}${styles.flexCenter}`}>
          <Navbar />
          <Routes className={`${styles.boxWidth}`}>
            <Route path="/" element={<Home />}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/events" element={<Events />}/>
            <Route path="/calendar" element={<Calendar />}/> 
            <Route path="/login" element={<Login/>}/>          
          </Routes>
        </div>
      </div>
      <Footer />
      </>
    );
}

export default App
