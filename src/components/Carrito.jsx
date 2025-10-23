const Carrito = ({ productosEnCarrito, productosEliminados }) => {

    return (
        <div>
            <h2>Carrito</h2>
            {productosEnCarrito.map((producto, indice) =>
                <div key={indice}>
                    <img src={producto.image} alt={producto.title} width={80} height={80} ></img>
                    <h3>{producto.title}: ${producto.price}</h3>
                    <button onClick={() => productosEliminados(indice)}
                        className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-red-500 active:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Eliminar</button>
                </div>
            )}

        </div>
    );

}
export default Carrito;