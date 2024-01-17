import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Portfolio from './Portfolio.tsx'
import Intro from './Intro.tsx'
function App (): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
