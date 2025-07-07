import './App.css'
import { Routes, Route } from 'react-router';
import HomePage from './ui/HomePage';
import AboutPage from './ui/AboutPage';
import Layout from './ui/Layout';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
