import { BrowserRouter, Routes, Route } from 'react-router-dom'
import sushi from './assets/images/sushi.png'

import { GlobalCss } from './styles'

import Home from './components/Pages/home'
import Pratos from './components/Pages/Pratos'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/pratos" element={<Pratos />} />
  </Routes>
)

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Rotas />
    </BrowserRouter>
  )
}

export default App
