import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductoDetalle = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(respuesta => respuesta.json())
      .then(dato => setProducto(dato))
  }, [id]);//[id] renderiza a cada llamado


  /*si no encuentra el producto */
  if (!producto) {
    return <p>Cargando ...</p>
  }
  return (
    <>
      {/* Tailwind */}
      <div className="columns-2 row-4">
        <div className="mx-auto mt-2 sm:pr-6 lg:grid lg:max-w-7xl lg:grid-cols-1 lg:gap-2 lg:px-8">
          <img
            alt={producto.title}
            src={producto.image}
            className="row-span-2 aspect-4/5 size-full object-contain bg-gray-200 sm:rounded-lg lg:aspect-3/4"
            />
        </div>
        <div className="lg:col-span-2 lg:pr-8">
          <h2 className="text-sm text-gray-600 mt-2 mx-auto"> Detalle del Producto N°{id}</h2>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{producto.title}</h1>
        </div>

        <div className="mt-10">
          <h2 className="text-sm font-medium text-gray-900">Descripción</h2>

          <div className="mt-4 space-y-6">
            <p className="text-sm text-gray-600">{producto.description}</p>
          </div>
        </div>

        </div>


    </>
  );
}

export default ProductoDetalle;