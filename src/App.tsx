import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './components/header.component'
import Home from './pages/home.page'
import Skills from './pages/skills.page'
import Projects from './pages/projects.page'
import Contact from './pages/contact.page'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="Skills" element={<Skills />} />
          <Route path="Projects" element={<Projects />} />
          <Route path="Contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
