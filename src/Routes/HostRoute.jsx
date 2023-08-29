import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useHost from "../hooks/useHost";


const HostRoute = ({children}) => {
    const { user, loading } = useAuth();
    const [isHost, isHostLoading] = useHost();
    const location = useLocation();

    if(loading || isHostLoading){
        return <progress className="progress w-56"></progress>
    }

    if (user && isHost) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default HostRoute;