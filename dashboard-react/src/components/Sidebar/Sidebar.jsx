import React from 'react'
import logo from '../../assets/logo_1.png'
import './Sidebar.css'
import { Link } from 'react-router-dom'

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <img src={logo} alt="Logo" className="logo" />
      <h2>Menú</h2>
      <ul className='links'>
        <li>
          <Link to="/">Catalogo</Link>
        </li>
        <li>
          <Link to="/last-product">Ultimo Producto</Link>
        </li>
      </ul>
    </div>
  )
}
