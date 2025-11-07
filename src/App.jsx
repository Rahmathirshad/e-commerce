import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import ProductsScreen from './screens/ProductsScreen'
import HomeScreen from './screens/HomeScreen'
import AboutScreen from './screens/AboutScreen'
import ContactScreen from './screens/ContactScreen'
import Header from './components/Header'
import CartScreen from './screens/CartScreen'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/Theme'
import ProductScreen from './screens/ProductScreen'
import Footer from './components/Footer'
import { GlobalStyle } from './styles/GlobalStyles'
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ToastContainer />
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/products' element={<ProductsScreen />} />
          <Route path='/product/:id' element={<ProductScreen />} />
          <Route path='/about' element={<AboutScreen />} />
          <Route path='/contact' element={<ContactScreen />} />
          <Route path='/cart' element={<CartScreen />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  )
}

export default App
