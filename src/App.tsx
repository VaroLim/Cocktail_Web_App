import Footer from './components/Footer'
import Router from './containers/Router'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
