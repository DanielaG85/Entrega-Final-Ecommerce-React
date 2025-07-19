
export  const agregarProducto = async (producto) => {
    return(
        new Promise(async (res, rej) => {
            try {
                const respuesta = await fetch('https://6817f90e5a4b07b9d1cdaa9e.mockapi.io/productos', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(producto),
                });
          
                if (!respuesta.ok) {
                        throw new Error('Error al agregar el producto.');
                      }
                const data = await respuesta.json();
                      console.log('Producto agregado:', data);
                      res(data)
                      //alert('Producto agregado correctamente');
                    } catch (error) {
                      console.error(error.message);
                      //alert('Hubo un problema al agregar el producto.');
                      rej("Hubo un problema al agregar el producto.")
                    }

        })
    )
  
 };

export const eliminarProducto = (id) => {
 const confirmar = window.confirm('¿Estás seguro de eliminar?');
 if (confirmar) {
    return(
        new Promise(async (res, rej) => {
            try {
                const respuesta = await fetch(`https://mockapi.io/api/v1/productos/${id}`, {
                method: 'DELETE',
                });
                if (!respuesta.ok) throw new Error('Error al eliminar');
                alert('Producto eliminado correctamente.');
                res()
            } catch (error) {
                console.error(error.message);
                alert('Hubo un problema al eliminar el producto.');
                rej()
            }
        })
    )
 }
};