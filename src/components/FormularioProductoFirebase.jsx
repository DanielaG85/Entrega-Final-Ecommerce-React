import React, { useState } from 'react';
import { useAuthContext } from '../contexts/AuthContext';
import { useProductosContext } from '../contexts/ProductosContext';
import { ToastContainer, toast } from "react-toastify";

function FormularioProductoFirebase({}) {
  const {agregarProductoFirebase} = useProductosContext();
  const {admin} = useAuthContext();

  const [producto, setProducto] = useState({
    name: '',
    price: '',
    description: '',
    imagen: ""
  });
    

  const validarFormulario = () => {
    if (!producto.name.trim()) {
      return("El nombre es obligatorio.")
    }
    if (!producto.price || producto.price <= 0) {
      return("El precio debe ser mayor a 0.")
    }
    console.log(producto.description.trim())
    if (!producto.description.trim() || producto.description.length < 10) {
      return("La descripción debe tener al menos 10 caracteres.")
    }
    if(!producto.imagen.trim()){
      return("La url de la imgaen no debe estar vacía")
    }
    else{
      return true
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto({ ...producto, [name]: value });
  };

  const handleSubmit2 = (e) => {
    e.preventDefault();
    const validarForm = validarFormulario()
    if (validarForm == true) {
      console.log("Formulario válido. Enviando a Firebase...");
      agregarProductoFirebase(producto).then((data) => {
        setProducto({ name: '', price: '', description: '', imagen: ""});
        toast.success("Producto agregado correctamente", {theme:'dark'});
      }).catch((error) => {
         toast.error("Hubo un problema al agregar el producto." + error.message);
      })
    } else{
      toast.error(validarForm);
    }
  }
  

  return ( 
    <div className='d-flex flex-column justify-content-center align-items-center min-vh-100'>
    <form onSubmit={handleSubmit2} className="p-4 border rounded shadow">
      <h3>Agregar Producto</h3>
      <div>
        <label className="form-label">Nombre:</label>
        <input
          type="text" className="form-control" name="name" value={producto.name} onChange={handleChange} required/>
      </div>
      <div>
        <label className="form-label">Imagen URL:</label>
        <input
          type="text" className="form-control" name="imagen" value={producto.imagen} onChange={handleChange} required/>
      </div>
      <div>
        <label className="form-label">Precio:</label>
        <input className="form-control" type="number" name="price" value={producto.price} onChange={handleChange} required
          min="0"/>
      </div>
       <div>
        <label className="form-label">Descripción:</label>
        <textarea
          name="description"
          value={producto.description}
          onChange={handleChange}
          required
          className="form-control"
        />
      </div>
      <button type="submit">Agregar Producto</button>
    </form>
    <ToastContainer />
    </div>
  );
}

export default FormularioProductoFirebase;