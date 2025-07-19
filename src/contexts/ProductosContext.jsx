import React, { createContext, useState, useContext } from 'react';
import { crearProducto, editarProductoFirebase, eliminarProductoF, obtenerProductoEnFirebase, obtenerProductosF } from '../auth/firebase';

// Crear el contexto de autenticación
const ProductosContext = createContext();
export function ProductosProvider({ children }) {
    const [productos, setProductos] = useState([])
    const [productoEncontrado, setProductoEncontrado] = useState([]);
    const [productosOriginales, setProductosOriginales] = useState([]);

     function obtenerProductosFirebase(){
        return(
            new Promise((res, rej) => {
                obtenerProductosF().then(productos => {
                    setProductos(productos)
                    setProductosOriginales(productos)
                    res()
                }).catch(error => {
                    rej(error)
                })
            })
        )
    }

    function obtenerProductoFirebase(id){
        console.log("test1")
        return(
            new Promise((res, rej)=>{
                obtenerProductoEnFirebase(id).then((producto) =>{
                    setProductoEncontrado(producto)
                    res()
                }).catch((err) => {
                        console.log("Error: ", err);
                        rej("Hubo un error al obtener el producto.");
                    });
            })
        )
    }

    function editarProductoF(producto){
        return(
            new Promise((res, rej) => {
                editarProductoFirebase(producto).then(producto => {
                    setProductoEncontrado(producto)
                    //console.log(producto)
                    res()
                }).catch(error => {
                    rej (error)
                })
            })
        )
    }

    function eliminarProductoFirebase(id){
        return(
            new Promise((res, rej) => {
                eliminarProductoF(id).then(() => {
                    res()
                }).catch(error => {
                    rej(error)
                })
            })
        )
    }

   function agregarProductoFirebase(producto) {
  return new Promise(async (res, rej) => {
    try {
      const resultado = await crearProducto(producto); 
      res(resultado); 
    } catch (error) {
      console.log("Error al agregar producto en Firebase:", error);
      rej(error); 
    }
  });
}

    function filtrarProductos(filtro){
        if(filtro.length < 0){
            setProductos(productosOriginales)
            return;
        }

        const productosFiltrados = productosOriginales.filter((producto) =>
            producto.name.toLowerCase().includes(filtro.toLowerCase())
        );
        setProductos(productosFiltrados)
    }

    return (
        <ProductosContext.Provider value={{ agregarProductoFirebase, filtrarProductos, eliminarProductoFirebase, editarProductoF, obtenerProductosFirebase, obtenerProductoFirebase, productos, productoEncontrado, crearProducto }}>
        {children}
        </ProductosContext.Provider> 
    );
}
export const useProductosContext = () => useContext(ProductosContext);