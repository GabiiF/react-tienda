import { useState, useEffect } from "react";

const EditarProducto = ({productoSeleccionado}) => {
  
  const [producto, setProducto] = useState(productoSeleccionado || {
    title: '',
    price: '',
    image: '',
    description: ''
  });

  const API = "https://6931991711a8738467cfaec7.mockapi.io/productos";

  useEffect(() => {
    if (productoSeleccionado)
      setProducto(productoSeleccionado);

  },[productoSeleccionado]);

  const manejarChange = (evento) => {
    const { name, value } = evento.target;
    setProducto({ ...producto, [name]: value });
  };

  const manejarSubmit = async (evento) => {
    evento.preventDefault();
    try {
      const respuesta = await fetch(`${API}/${producto.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(producto),
      });

      if (!respuesta.ok) throw new Error("Error al actualizar el producto");

      /*const datos = await respuesta.json();
      onActualizar(datos);*/
      alert("Producto actualizado correctamente.");
      
    } catch (error) {
      console.error(error.message);
      alert("Hubo un error al actualizar producto.");
    }
  };

  return (
    <form onSubmit={manejarSubmit}>
      <h2>Editar Producto</h2>
      <div>
        <label>Nombre:</label>
        <br/>
        <input
          type="text"
          name="title"
          value={producto.title || ''}
          onChange={manejarChange}
          required
        />
      </div>
      <div>
        <label>Precio:</label>
        <br/>
        <input
          type='number'
          name='price'
          value={producto.price || ''}
          onChange={manejarChange}
          required
          min='0'
          step='any'
        />
      </div>
      <div>
        <label>URL de Imagen:</label>
        <br/>
        <input
          type='text'
          name='image'
          value={producto.image}
          onChange={manejarChange}    
        />
      </div>
      <div>
        <label>Descripción:</label>
        <br/>
        <textarea
          name="description"
          value={producto.description || ''}
          onChange={manejarChange}
          required
        />
      </div>
      <button type="submit">Actualizar Producto</button>
    </form>
  );
}

export default EditarProducto;