import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router'
import { Box } from '@mui/system'
import Navbar from './Components/Navbar'
import Home from './pages/Home'
import ExercisesDetail from './pages/ExercisesDetail'
import Footer from './Components/Footer'

const App = () => {
  return (
    <Box width="400px" sx={{width:{xl: '1488px'}}} m="auto">
      <Navbar></Navbar>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/exercise/:id' element={<ExercisesDetail/>}/>
      </Routes>
      <Footer/>
    </Box>
  )
}

export default App