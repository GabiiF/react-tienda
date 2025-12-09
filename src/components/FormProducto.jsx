import { useState } from "react";
import { useProductosContext } from "../context/ProductosContext";
import styles from "./FormProducto.module.css";
import X from "../assets/X";

const FormProducto = ({ productoInicial = {}, modo = "agregar", onCerrar }) => {
  
  const [producto, setProducto] = useState(productoInicial);
  const { agregarProducto, editarProducto } = useProductosContext();

  const manejarChange = (evento) => {
    const { name, value } = evento.target;
    setProducto({ ...producto, [name]: value });
  };

  const manejarSubmit = async (evento) => {
    evento.preventDefault();
    if (modo === "agregar") {
      await agregarProducto(producto);
    } else {
      await editarProducto(producto);
    }
    onCerrar();
  };

  return (
    <div 
      className={styles.modalOverlay}
      aria-modal="true"
      role="dialog"
    >
      <div className={styles.modalContainer}>
        {/* Contenido del Modal */}
        <div className={styles.modalContent}>   
          {/* Encabezado del Modal */}
          <div className={styles.modalHeader}>
            <h3 className={styles.modalHeaderTitle}>
              {modo === "agregar" ? "Agregar Producto" : "Editar Producto"}
            </h3>
            <button 
              type="button" 
              onClick={onCerrar}
              className={styles.closeButton}
            >
              <X />
            </button>
          </div>
          {/* Cuerpo del Modal */}
          <form onSubmit={manejarSubmit}>
            <div className={styles.formGrid}>
              {/* Campo Nombre */}
              <div className={styles.colSpan2}>
                <label className={styles.formLabel}>
                  Nombre
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  className={styles.formInputBase}
                  placeholder="Ingrese el nombre del producto"
                  value={producto.title || ""}
                  onChange={manejarChange}
                  required
                />
              </div>
              {/* Campo Precio */}
              <div className={`${styles.colSpan2} ${styles.smColSpan1}`}>
                <label className={styles.formLabel}>
                  Precio
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  className={styles.formInputBase}
                  placeholder="$0.00"
                  value={producto.price || ""}
                  onChange={manejarChange}
                  required
                  min="0"
                  step="any"
                />
              </div>
              
              {/* Campo URL de Imagen */}
              <div className={`${styles.colSpan2} ${styles.smColSpan1}`}>
                <label className={styles.formLabel}>
                  URL de Imagen
                </label>
                <input
                  type="text"
                  name="image"
                  id="image"
                  className={styles.formInputBase}
                  placeholder="https://ejemplo.com/imagen.jpg"
                  value={producto.image || ""}
                  onChange={manejarChange}
                />
              </div>
              {/* Campo Descripcion */}
              <div className={styles.colSpan2}>
                <label className={styles.formLabel}>
                  Descripción del Producto
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows="4"
                  className={styles.formInputBase}
                  placeholder="Escriba la descripción del producto aquí"
                  value={producto.description || ""}
                  onChange={manejarChange}
                  required
                ></textarea>
              </div>
            </div>
            {/* Botones de Accion */}
            <div className={styles.modalActions}>
              {/* Boton Primario */}
              <button 
                type="submit" 
                className={`${styles.btnBase} ${styles.btnPrimary}`}
              >
                {modo === "agregar" ? <>Agregar</> : <>Actualizar</>}
              </button>
              {/* Boton Secundario o de cancelar */}
              <button 
                type="button" 
                onClick={onCerrar}
                className={`${styles.btnBase} ${styles.btnSecondary}`}
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormProducto;




{/* 
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

export default FormProducto;*/}