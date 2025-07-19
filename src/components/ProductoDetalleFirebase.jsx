import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../Styles/ProductoDetalle.css";
import { dispararSweetBasico } from "../assets/SweetAlert";
import { CarritoContext } from "../contexts/CarritoContext";
import { useAuthContext } from "../contexts/AuthContext";
import { useProductosContext } from "../contexts/ProductosContext";
import Producto from "./BotonCompra";
import { Col, Row } from "react-bootstrap";

function ProductoDetalleFirebase({}) {

  const navegar = useNavigate();

  const {admin} = useAuthContext();
  const {agregarAlCarrito} = useContext(CarritoContext);
  const {productoEncontrado, eliminarProductoFirebase, obtenerProductoFirebase} = useProductosContext();

  const { id } = useParams();
  //const [producto, setProducto] = useState(null);
  const [cantidad, setCantidad] = useState(1);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  console.log(id)

  useEffect(() => {
    obtenerProductoFirebase(id).then(() => {
      console.log("test")
      setCargando(false);
    }).catch((error) => {
      if(error == "Producto no encontrado"){
        setError("Producto no encontrado")
      }
      if(error == "Hubo un error al obtener el producto."){
        setError("Hubo un error al obtener el producto.");
      }
      setCargando(false);
    })
  }, [id]);


  function funcionCarrito() {
    if (cantidad < 1) return;
    dispararSweetBasico("Producto Agregado", "El producto fue agregado al carrito con éxito", "success", "Cerrar");
    agregarAlCarrito({ ...productoEncontrado, cantidad });
  }

  function dispararEliminar(){
    eliminarProductoFirebase(id).then(() => {
      navegar("/productos")
    }).catch((error) => {
      dispararSweetBasico("Hubo un problema al agregar el producto", error, "error", "Cerrar")
    })
  }

  function sumarContador() {
    setCantidad(cantidad + 1);
  }

  function restarContador() {
    if (cantidad > 1) setCantidad(cantidad - 1);
  }

  if (cargando) return <p>Cargando producto...</p>;
  if (error) return <p>{error}</p>;
  if (!productoEncontrado) return null;

  return (
    <div className="detalle-container">
      <Row xs={1} md={2} lg={2}>
        <Col>
          <img className="detalle-imagen" src={productoEncontrado.imagen} alt={productoEncontrado.name} />
        </Col>
        <Col>
          <div className="detalle-info">
            <h2>{productoEncontrado.name}</h2>
            <p>{productoEncontrado.description}</p>
            <p>$ {productoEncontrado.price}</p>
              {!admin && (
                <div className="detalle-contador">
                  <button onClick={restarContador}>-</button>
                  <span>{cantidad}</span>
                  <button onClick={sumarContador}>+</button>
                </div>
              )}
            {admin ? <Link to={"/admin/editarProducto/" + id}> <button>Editar producto</button></Link> : <button onClick={funcionCarrito}>Agregar al carrito</button> }
            {admin ? <button onClick={dispararEliminar} >Eliminar Producto</button> : <></>}
          </div>        
        </Col>
      </Row>    
      
    </div>
  );
}

export default ProductoDetalleFirebase;