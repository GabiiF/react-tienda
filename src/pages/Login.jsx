import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import EyeOpen from "../assets/EyeOpen";
import EyeClosed from "../assets/EyeClosed";

// No se pide para la pre-entrega
const Login = () => {
    const [usuario, setUsuario] = useState('');
    const [contrasenia, setContrasenia] = useState('');

    const { login } = useAuthContext();
    const navigate = useNavigate();

    // Inicializamos el estado en 'false' (oculto)
    const [showPassword, setShowPassword] = useState(false);

    // Función para alternar el estado (toggle)
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const manejarSubmit = (evento) => {
        evento.preventDefault();
        // Simulamos la Autenticacion
        if (login(usuario, contrasenia)) {
            navigate("/");
        } else {
            alert("Usuario o Contraseña invalido");
        }
    };

    return (
        <>
            {/*Agrego Tailwind*/}
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        alt="Your Company"
                        src="../ventaOnline.png"
                        className="mx-auto h-35 w-auto"
                    />
                    <h2 className="mt-8 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Ingresa tu cuenta</h2>
                </div>
                {/*Usuario*/}
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form action="#" method="POST" className="space-y-6" onSubmit={manejarSubmit}>
                        <div>
                            <label htmlFor='usuario' className="block text-sm/6 font-medium text-gray-900">Usuario</label>
                            <div className="mt-2">
                                <input
                                    id="usuario"
                                    type='text'
                                    name="usuario"
                                    value={usuario}
                                    onChange={(evento) => setUsuario(evento.target.value)}
                                    autoComplete="email"
                                    required
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>
                        {/*Contraseña*/}
                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor='password' className="block text-sm/6 font-medium text-gray-900">
                                    Contraseña
                                </label>
                                <div className="text-sm text-center">
                                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Olvidaste la contraseña?
                                    </a>
                                </div>
                            </div>
                            {/* AQUÍ se cambia el 'type' basado en el estado*/}
                            <div className="relative mt-2">
                                <input
                                    id="password"
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    value={contrasenia}
                                    onChange={(evento) => setContrasenia(evento.target.value)}
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                                {/* Botón/Icono del Ojo */}
                                <button
                                    type="button"
                                    onClick={togglePasswordVisibility}
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                >
                                    {/* AQUÍ se cambia el icono basado en el estado */}
                                    {showPassword ? <EyeOpen className=""/> : <EyeClosed className="sm:size-3"/>}
                                </button>
                            </div>
                        </div>
                        {/*Boton*/}
                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Iniciar Sesion
                            </button>
                        </div>
                    </form>

                </div>
            </div>

            {/*Termina Tailwind*/}
        </>
    );
}

export default Login;