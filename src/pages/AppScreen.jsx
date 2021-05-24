import React from 'react'
import { useSelector } from 'react-redux'
import Element from '../components/Element'
import FormAdd from '../components/FormAdd'

import Navbar from '../components/Navbar'

const AppScreen = () => {
  const name = useSelector((state) => state.auth.displayName)

  const data = useSelector((state) => state.nomina.data)

  return (
    <>
      <Navbar />

      <div className="container animate__animated animate__backInUp">
        <h4 className="center">Bienvenido {name}.</h4>
        <hr />

        <FormAdd />

        <table>
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Nota</th>
              <th>Borrar</th>
            </tr>
          </thead>

          <tbody>
            {data.map((elemento) => {
              return (
                <tr className="animate__animated animate__fadeInDown " key={elemento.id}>
                  <Element data={elemento} />
                </tr>
              )
            })}
          </tbody>
        </table>

        <footer>
          <p> Creado por Andy Santisteban</p>
        </footer>
      </div>
    </>
  )
}

export default AppScreen
