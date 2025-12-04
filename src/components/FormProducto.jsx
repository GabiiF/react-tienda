import { useState } from "react";

const FormProducto = ({onAgregar}) => {

  const [errores, setErrores] = useState({});
  const [producto, setProducto] = useState({
    title: '',
    price: '',
    image: '',
    description: ''
  });
  
  const manejarChange = (evento) => {
    const {name, value} =  evento.target;
    setProducto({...producto, [name]: value});
  };

  const validarForm = () => {
    const nuevosErrores = {};

    if(!producto.title.trim())
      nuevosErrores.title = 'El nombre es obligatorio.'

    if(!producto.price || producto.price < 0)
      nuevosErrores.price = 'El precio debe ser mayor a 0.'

    if (!producto.image.trim() || producto.image.length < 6)  
      nuevosErrores.image = 'Debes subir la URL de una imagen valida.'; 

    if (!producto.description.trim() || producto.description.length < 10)  
      nuevosErrores.description = 'La descripción debe tener al menos 10 caracteres.';  
 
    setErrores(nuevosErrores); 
    return Object.keys(nuevosErrores).length === 0; 
  }; 

  const manejarSubmit = (evento) => {
    evento.preventDefault();
    {/*valida si los datos el formulario estan bien */}
    if (!validarForm())
      return; 
    
    const productoAEnviar = {
      ...producto,
      price: parseFloat(producto.price) 
    };
    
    onAgregar(productoAEnviar);
    // Limpiamos el formulario
    setProducto({title: '', price:'', image:'', description:''});
    setErrores({});
  }
 
  return(
    <>
      <form onSubmit={manejarSubmit}>
        <h2>Agregar Producto</h2>
        <div>
          <label>Nombre:</label>
          <br/>
          <input
            type='text'
            name='title'
            value={producto.title}
            onChange={manejarChange}    
          />
          {errores.title && <p style={{ color: 'red' }}>{errores.title}</p>} 
        </div>
        <div>
          <label>Precio:</label>
          <br/>
          <input
            type='number'
            name='price'
            value={producto.price}
            onChange={manejarChange}
            min={0}
            step='any'
          />
          {errores.price && <p style={{ color: 'red' }}>{errores.price}</p>} 
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
          {errores.image && <p style={{ color: 'red' }}>{errores.image}</p>} 
        </div>
        <div>
          <label>Descripcion:</label>
          <br/>
          <textarea
            name='description'
            value={producto.description}
            onChange={manejarChange}
          />
          {errores.description && <p style={{ color: 'red' }}>{errores.description}</p>} 
        </div>
        <button type='submit'>Agregar Productos</button>  
      </form>   
    </>
  );
}

export default FormProducto;