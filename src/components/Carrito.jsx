import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";
import { Link } from "react-router-dom";
import BroomIcon from "../assets/BroomIcon";

const Carrito = () => {
  //llamamos del context
  const { carrito, eliminarDelCarrito, vaciarCarrito} = useContext(CarritoContext);

  {/*Si no hay produsctos en el carrito */ }
  if (carrito.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
        <div className="text-center">
          <svg className="mx-auto h-24 w-24 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Tu carrito está vacío</h2>
          <p className="text-gray-600 mb-6">¡Agregá productos para comenzar tu compra!</p>
          <Link to="/" className="inline-block bg-black text-white px-6 py-3 rounded-md font-semibold hover:bg-[#333] transition-colors duration-200">
            Ir a comprar
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Carrito</h2>
              {/* Botón para agregar producto */}
              <button
                onClick={() => vaciarCarrito()}
                className="flex items-center justify-center gap-2 px-4 py-2 text-gray-600 border border-gray-400 bg-gray-200 hover:text-red-500 rounded-md font-semibold transition-colors duration-200"
              >
                {/*<CirclePlus className="w-5 h-5" />*/}
                {/* Uso el icono de la escoba */}
                <BroomIcon className="h-5 w-5" />
                <span>Vaciar Carrito</span>
              </button>
            </div>

      {/*<h2 className="text-3xl font-bold mb-8">Carrito</h2>*/}
      {carrito.map((producto, indice) =>
        <div key={indice} className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6">
          <div className="grid grid-cols-3 gap-4 mb-6">
            <img src={producto.image} alt={producto.title} width={80} height={80}></img>
            <span className="col-span-2">
              <h3>{producto.title}: ${producto.price}</h3>
              <button onClick={() => eliminarDelCarrito(indice)}
                className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-red-500 active:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Eliminar</button>
            </span>
          </div>
        </div>
      )}

    </div>
  );

}
export default Carrito;