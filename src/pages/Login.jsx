import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
// No se pide para la pre-entrega
const Login = () => {
    const [usuario, setUsuario] = useState('');
    const [contrasenia, setContrasenia] = useState('');

    const { login } = useAuthContext();
    const navigate = useNavigate();

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
                        src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                        className="mx-auto h-10 w-auto"
                    />
                    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Ingresa tu cuenta</h2>
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
                            <div className="mt-2">
                                <input
                                    id="password"
                                    type="text" /*password */
                                    name="password"
                                    value={contrasenia}
                                    onChange={(evento) => setContrasenia(evento.target.value)}
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
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