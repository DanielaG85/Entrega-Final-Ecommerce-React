import { useState } from "react";
import "../Styles/Producto.css"
import { dispararSweetBasico } from "../assets/SweetAlert";
import { Link, Navigate } from "react-router-dom";
import { Button, Card } from "react-bootstrap";



function CardProducto({producto}){

    return(
        <Card>
            <Card.Img variant="top" src={producto.imagen} style={{ maxHeight: "200px", objectFit: "cover" }} />
            <Card.Body>
                <Card.Title>{producto.name}</Card.Title>
                <Link to={"/productosF/" + producto.id}><Button variant="primary">Ver detalles del producto</Button></Link>
            </Card.Body>
        </Card>
    )
}

export default CardProducto