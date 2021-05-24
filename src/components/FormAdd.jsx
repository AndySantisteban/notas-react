import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { crearRegistro } from '../actions/nomina'

const FormAdd = () => {
  const dispatch = useDispatch()
  const [viewForm, setViewForm] = useState(false)

  const [notanueva, setnotanueva] = useState({
    nota: null,
    numero: null,
  })

  const { numero } = notanueva

  const handleAdd = () => {
    setViewForm(!viewForm)
  }

  const handleChange = (e) => {
    setnotanueva({
      ...notanueva,
      [e.target.name]: e.target.value,
    })
  }

  const handleSave = () => {
    const ncontacto = numero
    dispatch(crearRegistro(ncontacto))
    setnotanueva({
      nota: null,
      numero: null,
    })
  }

  return (
    <div>
      <button onClick={handleAdd} className="btn amber darken-4">
        {!viewForm ? 'Agregar' : 'Cerrar'}
      </button>
      {viewForm && (
        <div className="animate__animated animate__fadeIn">
          {/*<div className="input-field col s12">
            <label htmlFor="icon_prefix1">Titulo de la nota </label>
            <input id="icon_prefix1" type="text" value={nota} onChange={handleChange} name="nota" />
      </div>*/}
          <div className="input-field col s12">
            <label htmlFor="icon_prefix2">Texto de la nota </label>
            <input
              id="icon_prefix2"
              type="text"
              value={numero}
              onChange={handleChange}
              name="numero"
            />
          </div>

          <button onClick={handleSave} className="btn cyan darken-3">
            Guardar
          </button>
        </div>
      )}
    </div>
  )
}

export default FormAdd
