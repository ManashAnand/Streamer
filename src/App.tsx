import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/custom/Layout'
import Base from './pages/Base'
import Helper from './components/custom/Helper'
import Pricing from './components/custom/Pricing'
import Dashboard from './pages/Dashboard'

function App() {

  return (
    <> 
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={
            <>
            <Base/>
            <Helper/>
            <Pricing/>
            </>
            } />
          <Route path='/dashboard' element={<Dashboard/>} />
        </Route>
      </Routes>

    </>
  )
}

export default App
