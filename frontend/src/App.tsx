import 'App.css';
import Welcome from './pages/Welcome/Welcome'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App(){
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}