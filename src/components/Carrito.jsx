const Carrito = ({ productosEnCarrito, productosEliminados }) => {

    return (
        <div>
            <h2 className="text-3xl font-bold mb-8">Carrito</h2>
            {productosEnCarrito.map((producto, indice) =>
                <div key={indice} className="grid grid-cols-3 gap-4 mb-6">
                    <img src={producto.image} alt={producto.title} width={80} height={80}></img>
                    <span className="col-span-2">
                        <h3>{producto.title}: ${producto.price}</h3>
                        <button onClick={() => productosEliminados(indice)}
                            className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-red-500 active:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            Eliminar</button>
                    </span>
                </div>
            )}

        </div>
    );

}
export default Carrito;