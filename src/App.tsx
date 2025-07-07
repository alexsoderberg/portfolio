import './App.css'
import { Routes, Route } from 'react-router';
import HomePage from './ui/page/HomePage';
import AboutPage from './ui/page/AboutPage';
import Layout from './ui/components/Layout';

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
