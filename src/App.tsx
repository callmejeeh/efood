import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { GlobalCss } from './styles/styles'

import Rotas from './routes'
import Footer from './Containers/Footer'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <Rotas />
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
