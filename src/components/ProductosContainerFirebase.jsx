import { useEffect, useState } from "react"
import "../Styles/Producto.css"
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Helmet } from "react-helmet";
import { useProductosContext } from "../contexts/ProductosContext";
import CardProducto from "./Card";
import { FaSearch } from "react-icons/fa";


function ProductosContainerFirebase({}){
    const {productos, obtenerProductosFirebase, filtrarProductos} = useProductosContext();
    //const [productos, setProductos] = useState([])
    const productosPorPagina = 8;
    const [paginaActual, setPaginaActual] = useState(1);
        // Calcular el índice de los productos a mostrar en la página actual
    const indiceUltimoProducto = paginaActual * productosPorPagina;
    const indicePrimerProducto = indiceUltimoProducto - productosPorPagina;
    const productosActuales = productos.slice(indicePrimerProducto, indiceUltimoProducto);
    
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);
    const [filtro, setFiltro] = useState("")

    {useEffect(() => {
        obtenerProductosFirebase()
            .then(() => {
                setCargando(false);
            })
            .catch((error) => {
                console.log("Error", error)
                setError('Hubo un problema al cargar los productos.');
                setCargando(false);
            });
    }, []);}

    useEffect(() => {
        filtrarProductos(filtro)
    },[filtro])//filtro

    const totalPaginas = Math.ceil(productos.length / productosPorPagina);
    const cambiarPagina = (numeroPagina) => setPaginaActual(numeroPagina);


    if (cargando) {
        return <p>Cargando productos...</p>;
    }else if (error){
        return <p>{error}</p>;
    }else{
        return(
            <div>
                <Helmet>
                    <title>Productos | Beauty Shop</title>
                    <meta name="description" content="Explora nuestra variedad de productos." />
                </Helmet>
                <div className="input-group mb-3 mt-3">
                    <span className="input-group-text">
                        <FaSearch />
                    </span>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Buscar productos..."
                        value={filtro}
                        onChange={(e) => setFiltro(e.target.value)}
                    />
                </div>
                <Row xs={1} md={2} lg={4} className="g-4">{/*Grid nde boostrap*/ }
                    {productosActuales.length > 0 ? productosActuales.map((producto) => (
                        <Col>
                            <CardProducto
                                producto={producto}
                            />
                        </Col>
                    )): <></>}
                </Row>
                <div className="d-flex justify-content-center my-4"> {/*Componente de paginacion*/ }
                    {Array.from({ length: totalPaginas }, (_, index) => (
                    <button
                        key={index + 1}
                        className={`btn mx-1 ${paginaActual === index + 1 ? "btn-dark" : "btn-outline-dark"}`}
                        onClick={() => cambiarPagina(index + 1)}
                    >
                        {index + 1}
                    </button>
                    ))}
                </div>
            </div>
        )
    }

    
}

export default ProductosContainerFirebase
