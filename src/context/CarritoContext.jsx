import { createContext, useState } from 'react';
// Creo el contexto de carrito
export const CarritoContext = createContext();
// Proveedor del contexto
export function CarritoProvider({ children }) {
    const [carrito, setCarrito] = useState([]);
    const agregarAlCarrito = (producto) => {
        setCarrito([...carrito, producto]);
    };
    // Usamos filter() para crear un nuevo array que excluye el elemento con el índice dado.
    const eliminarDelCarrito = (indiceAEliminar) => {
        setCarrito(carrito.filter((_, indice) => indice !== indiceAEliminar));
    };
    const vaciarCarrito = () => {
        setCarrito([]);
    };
    return (
        <CarritoContext.Provider value={{ carrito, agregarAlCarrito, eliminarDelCarrito, vaciarCarrito }}>
            {children}
        </CarritoContext.Provider>
    );
}
