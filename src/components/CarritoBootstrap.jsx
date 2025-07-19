import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import { CarritoContext } from "../contexts/CarritoContext";
import CarritoCardBootstrap from "./CarritoCardBootstrap";
import { AuthContext } from "../contexts/AuthContext";
import { Row } from "react-bootstrap";

function CarritoBootstrap() {
    const {user} = useContext(AuthContext);
    const { productosCarrito, vaciarCarrito, borrarProductoCarrito } = useContext(CarritoContext);

    const total = productosCarrito.reduce(
        (subTotal, producto) => subTotal + producto.price * producto.cantidad, 0
    );

    function funcionDisparadora(id) {
        borrarProductoCarrito(id);
    }

    function funcionDisparadora2() {
        vaciarCarrito();
    }

    if (!user) {
        return <Navigate to="/login" replace />
    }

    return (
        <Container className="my-4">
        <h2 className="mb-3">Carrito de compras</h2>
        <Button variant="dark" className="mb-4" onClick={funcionDisparadora2}>
            Vaciar carrito
        </Button>
        <Row xs={1} md={1} lg={1}>
            {productosCarrito.length > 0 ? (
                productosCarrito.map((producto) => (
                <CarritoCardBootstrap
                    key={producto.id}
                    producto={producto}
                    funcionDisparadora={funcionDisparadora}
                />
                ))
            ) : (
                <p>Carrito vacío</p>
            )}
        </Row>

        {total > 0 && (
            <h4 className="mt-4 text-end">Total a pagar: $ {total.toFixed(2)}</h4>
        )}
        </Container>
    );
}

export default CarritoBootstrap;