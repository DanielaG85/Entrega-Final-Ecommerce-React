import { useAuthContext } from "../contexts/AuthContext"
import { Navigate } from 'react-router-dom';

export default function Admin(){
    const {admin} = useAuthContext();

    if(!admin){
        return(
            <Navigate to="/login" replace/>
        )
    }
    
    return(
        <div>
            <p>Componente Admin</p>
        </div>
    )
}