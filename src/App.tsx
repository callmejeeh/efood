import { BrowserRouter, Routes, Route } from 'react-router-dom'
import sushi from './assets/images/sushi.png'

import { GlobalCss } from './styles'

import Header from './components/Header'
import Home from './components/Pages/home'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    {/* <Route path="/categories" element={<Pratos />} /> */}
  </Routes>
)

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Header />
      <div className="container">
        <Home />
      </div>
      {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default App
