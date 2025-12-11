import { useContext } from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CarritoContext } from "../context/CarritoContext";

const ProductoDetalle = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const navigate = useNavigate();
  {/*Carrito */ }
  const { agregarAlCarrito } = useContext(CarritoContext);
  const [agregado, setAgregado] = useState(false);

  useEffect(() => {
    /*fetch(`https://fakestoreapi.com/products/${id}`)*/
    fetch(`https://6931991711a8738467cfaec7.mockapi.io/productos/${id}`)
      .then(respuesta => respuesta.json())
      .then(dato => setProducto(dato))
  }, [id]);//[id] renderiza a cada llamado

  /*si no encuentra el producto */
  if (!producto) {
    return <p>Cargando ...</p>
  }

  const handleAgregarAlCarrito = () => {

    agregarAlCarrito(producto);

    setAgregado(true);
    setTimeout(() => setAgregado(false), 2000);
  };
  return (
    <>
      {/* Tailwind */}
      <div className="container mx-auto p-4 lg:py-12 px-4 sm:px-6 lg:px-8 py-8 ">
        {/* CONTENEDOR PRINCIPAL:
              - Móvil/Tablet (por defecto): Se apilan los elementos.
              - Escritorio (lg): Se convierte en una cuadrícula de 2 columnas (lg:grid-cols-2).
              - Espacio entre columnas (gap-8)
            */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* === COLUMNA 1: IMAGEN === */}
          <div className="md:pr-8">
          <img
            alt={producto.title}
            src={producto.image}
            className="md:row-span-3 aspect-4/5 size-full object-contain bg-gray-200 sm:rounded-lg md:aspect-3/4"/*w-full */
          />
        </div>

        {/* === COLUMNA 2: DETALLES DEL PRODUCTO === */}
        <div className="flex flex-col">

          {/* 1. TÍTULO Y DETALLE */}
          <h2 className="text-sm text-gray-600 mt-2"> Detalle del Producto N°{id}</h2>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-6">{producto.title}</h1>

          {/* 2. DESCRIPCIÓN */}
          <div className="mt-6 md:col-span-2 md:row-span-2">
            <h2 className="text-sm font-bold text-gray-900">Descripción:</h2>

            <div className="mt-2 mb-8 space-y-4">
              <p className="text-sm text-gray-600">{producto.description}</p>
            </div>


            {/* Selector de cantidad y boton de compra */}
            {/* 3. BOTONES DE ACCIÓN (Selector de cantidad, botones, etc.) */}
            {/* El div se estira automáticamente gracias al flex-col del padre, 
                       y empuja el contenido al final si hay más espacio. */}
            <div className="mt-auto border-gray-200 pt-6">
              {/* Selector de Cantidad (Placeholder) */}
              {/* Botones de agregar a carrito y verlo */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleAgregarAlCarrito}
                  className={`sm:w-auto py-4 px-6 rounded-md font-semibold text-white transition-all duration-200 ${agregado
                      ? 'bg-green-600 hover:bg-green-700'
                      : 'bg-black hover:bg-gray-800'
                    }`}
                >
                  {agregado ? (
                    <span className="flex items-center justify-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      ¡Agregado al carrito!
                    </span>
                  ) : (
                    'Agregar al Carrito'
                  )}
                </button>

                <button
                  onClick={() => navigate('/carrito')}
                  className="w-full sm:w-auto py-4 px-6 border-2 border-black text-black rounded-md font-semibold hover:bg-black hover:text-white transition-colors duration-200"
                >
                  Ver Carrito
                </button>
              </div>
            </div>


          </div>
        </div>

      </div>
 </div>

    </>
  );
}

export default ProductoDetalle;