import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../actions/auth'
import { limpiar } from '../actions/nomina'

const Navbar = () => {
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(limpiar())
    dispatch(logout())
  }

  return (
    <nav className="deep-purple darken-3">
      <div className="nav-wrapper container center">
        <span className="brand-logo left">Notas</span>
        <ul id="nav-mobile" className="right ">
          <li>
            <button onClick={handleLogout} className="btn red waves-effect waves-light ">
              Salir
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
