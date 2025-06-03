// import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Catalog } from '../Catalogo/Catalog'
import { Counter } from '../counter/counter'
import { LastProduct } from '../lastProduct/last-product'
import { ProductDetail } from '../productDetail/productDetail'
import './Dashboard.css'

export const Dashboard = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={
          <div className='container-dashboard'>
            <div className="dash-CC">
              <div className="count-last">
              <Counter />
              <LastProduct/>
              </div>
              <Catalog />
            </div>
          </div>
        } />
        <Route path='/catalog' element={
          <>
            <Catalog />
          </>
        } />
        <Route path='/last-product' element={
          <>
            <LastProduct />
          </>
        } />
        <Route path='/counter' element={
          <>
            <Counter />
          </>
        } />
        <Route path='/product-detail/:id' element={
          <>
            <ProductDetail />
          </>
        } />
      </Routes>

    </>
  )
}