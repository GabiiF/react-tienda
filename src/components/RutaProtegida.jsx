import { useAuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";


const RutaProtegida = ({children}) => {
  const { usuario } = useAuthContext();

  if(!usuario)//se fija si esta el usuario, sino lo redirige a login
    return <Navigate to="/login" replace />;//repalce - que no pueda volver atras

  return children;//sino retorna esto
}

export default RutaProtegida;