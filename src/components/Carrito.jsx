const Carrito = ({ productosEnCarrito, productosEliminados }) =>{

    return(
        <div>
            <h2>Carrito</h2>
            {productosEnCarrito.map((producto,indice) =>
            <div key={indice}>
                <img src={producto.image} alt={producto.title} width={80} height={80} ></img>
                <h3>{producto.title}: ${producto.price}</h3>
                <button onClick={() => productosEliminados(indice)}>Eliminar</button>
            </div>
            )}

        </div>
    );

}
export default Carrito;