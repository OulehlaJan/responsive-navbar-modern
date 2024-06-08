import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SharedLayout from './components/SharedLayout'
import Home from './pages/Home'
import About from './pages/About'
import News from './pages/News'

const App = () => {
  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='news' element={<News />} />
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App