import { useContext } from 'react';
import { useState } from 'react';
import { createContext } from 'react';

// creamos el contexto de Autenticacion 
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);
  
  const login = (nombreUsuario) => {
    // Simulamos la creacion del token 
    const token = `fake-token-${nombreUsuario}`;
    localStorage.setItem('authToken', token);
    setUsuario(nombreUsuario);
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