import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import DiagnosticPage from './pages/DiagnosticPage'
import ConfigurationPage from './pages/ConfigurationPage'
import MaterielPage from './pages/MaterielPage'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/diagnostic" element={<DiagnosticPage />} />
          <Route path="/configuration-4-10-personnes" element={<ConfigurationPage />} />
          <Route path="/materiel-recommande" element={<MaterielPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
