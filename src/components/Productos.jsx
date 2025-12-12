import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CarritoContext } from "../context/CarritoContext";
import { useProductosContext } from "../context/ProductosContext";

const Productos = () => {
    /*const [producto, setProducto] = useState([]);//vacio
    const [cargando, setCargando] = useState(true);//al principio esta cargando
    const [error, setError] = useState(null);//al principio no contiene error*/

    /*uso el contexto*/
    const { productos, cargando, error } = useProductosContext();
    const { agregarAlCarrito } = useContext(CarritoContext);
    
    // Logica de Paginacion 
    const productosPorPagina = 4;
    const [paginaActual, setPaginaActual] = useState(1);

    if (cargando) return 'Cargando productos...';
    if (error) return error;

    // Calcular el índice de los productos a mostrar en la página actual
    const indiceUltimoProducto = paginaActual * productosPorPagina;
    const indicePrimerProducto = indiceUltimoProducto - productosPorPagina;
    const productosActuales = productos.slice(indicePrimerProducto, indiceUltimoProducto);

    // Cambiar de pagina
    const totalPaginas = Math.ceil(productos.length / productosPorPagina);

    // Función que se dispara al hacer clic
    const cambiarPagina = (numeroPagina) => {
        setPaginaActual(numeroPagina);
        // 1. Obtiene el elemento de destino por su ID
        const destinoElemento = document.getElementById('header');
        
        // 2. Si el elemento existe, desplaza la ventana hacia él
        if (destinoElemento) {
            destinoElemento.scrollIntoView({ 
                behavior: 'smooth', // Desplazamiento suave (opcional)
                block: 'end'      // Alinea la parte superior de la sección con la parte superior de la ventana
            });
        }
    }
    return (
        <div id="productos" className="px-4 sm:px-6 lg:px-8 py-8">
            <h2 className="text-3xl font-bold pb-8">Productos</h2>
            {/*Comienza el Card */}
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {productosActuales.map((producto) => (
                    <span key={producto.id} className="border-gray-700 shadow-2xl">
                        <Link to={`/productos/${producto.id}`} className="group">
                            <img alt={producto.title}
                                src={producto.image}
                                className="aspect-square w-full rounded-lg bg-gray-200 object-contain group-hover:opacity-75 xl:aspect-7/8"
                            />
                        </Link>
                        <h3 className="mt-4 text-sm text-gray-700 px-2 sm:px-6 sm:pt-2">{producto.title}</h3>
                        <p className="mt-1 text-lg font-medium text-gray-900 px-2 sm:pl-6 sm:pt-2">${producto.price}</p>

                        {/*Botones Tailwind */}
                        <div className="mt-5 mb-2 px-2 flex items-center justify-start sm:px-6 sm:pt-2 gap-x-2">
                            <button className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 active:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                onClick={() => agregarAlCarrito(producto)}>Agregar</button>
                            <Link to={`/productos/${producto.id}`} className="text-sm font-semibold text-gray-900   rounded-md px-3.5 py-2.5 bg-gray-400/50 hover:bg-gray-200 shadow-2xl">Detalles <span aria-hidden="true">→</span></Link>
                        </div>
                        {/*Termina Botones */}
                    </span>
                ))}
            </div>
            {/*Termina el Card */}

            {/* Paginador */}
            <div className="flex justify-center gap-2 my-8">
                {Array.from({ length: totalPaginas }, (_, indice) => (
                    <button
                        key={indice + 1}
                        className={`px-4 py-2 rounded ${paginaActual === indice + 1
                                ? "bg-black text-white"
                                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                            }`}
                        onClick={() => cambiarPagina(indice + 1)}
                    >
                        {indice + 1}
                    </button>
                ))}
            </div>

        </div>
    );
}

export default Productos;