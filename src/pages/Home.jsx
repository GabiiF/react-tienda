import Carrito from "../components/Carrito"
import Productos from "../components/Productos";

const Home = () => {
    return (
        <>
            <Productos />
            <hr className="border-gray-300 my-8" />
            <Carrito />
        </>
    );
}
export default Home;