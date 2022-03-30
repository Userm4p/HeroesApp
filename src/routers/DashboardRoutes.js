import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { DcScreen } from '../components/dc/DcScreen'
import { Hero } from '../components/hero/HeroScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { SearchScreen } from '../components/search/SearchScreen'
import { Navbar } from '../components/ui/NavBar'


export const DashboardRoutes = () => {
  return (
    <>
        <Navbar/>

        <div className="container">
          <Routes>
              <Route path="/Marvel%20Comics" element={<MarvelScreen />} />
              <Route path="/DC%20Comics" element={<DcScreen/>} />
              
              <Route path="/search" element={<SearchScreen/>} />
              <Route path="/hero/:heroid" element = {<Hero/>} />
              <Route path="/" element={<MarvelScreen />} />
              
          </Routes>
        </div>

        

    </>
  )
}
