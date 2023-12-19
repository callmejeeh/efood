import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { GlobalCss } from './styles'

import Header from './Header'

// const Rotas = () => (
//   <Routes>
//     <Route path="/" element={<Home />} />
//     <Route path="/categories" element={<Categories />} />
//   </Routes>
// )

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Header />
      <div className="container"></div>
      {/* <Rotas /> */}
      {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default App
