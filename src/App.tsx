import './App.css'
import { Routes, Route } from 'react-router';
import HomePage from './ui/page/HomePage';
import Layout from './ui/components/Layout';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
