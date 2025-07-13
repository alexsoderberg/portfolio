import './App.css'
import { Routes, Route } from 'react-router';
import HomePage from './ui/page/HomePage';
import Layout from './ui/components/Layout';
import { useState } from 'react';
import { Languages } from './data/Languages';

function App() {
  const [currentLanguage, setCurrentLanguage] = useState(Languages.SWEDISH)

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout setLanguage={setCurrentLanguage}/>}>
          <Route index element={<HomePage language={currentLanguage}/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
