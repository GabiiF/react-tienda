import { useState, useContext, createContext } from 'react';


const USUARIOS_FAKE = [
  { 
    id: 1, 
    usuario: 'admin', 
    contrasenia: '1234', 
    rol: 'admin',
    nombre: 'Admin'
  },
  { 
    id: 2, 
    usuario: 'gabriela', 
    contrasenia: '1234', 
    rol: 'usuario',
    nombre: 'Gabi'
  }
];

// creamos el contexto de Autenticacion 
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);
  
    const login = (nombreUsuario, contrasenia) => {
    const usuarioLogin = USUARIOS_FAKE.find(
      u => u.usuario === nombreUsuario && u.contrasenia === contrasenia
    );

    if (usuarioLogin) {
      // Simulamos la creacion del token
      const token = `fake-token-${nombreUsuario}`;
      localStorage.setItem('authToken', token);
      setUsuario(usuarioLogin);
      return true;
    }
    return false;
  }                                         
  const logout = () => {
    //al cerrar sesion lo remueve
    localStorage.removeItem('authToken');
    setUsuario(null);
  };

  return (
    <AuthContext.Provider value={{usuario, login, logout}}>
      {children}
    </AuthContext.Provider>
  ); 
}
//useAuthContext→ es un hook que yo creo(un Hook personalizado)
//me permite es llevar el useContext(AuthContext)
export const useAuthContext = () => useContext(AuthContext);