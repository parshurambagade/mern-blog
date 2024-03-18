import { useSelector } from "react-redux";

const useIsAuthenticated = () => {
    const token = useSelector(state => state.user.token);
    
    return !!token; // Returns true if token exists, false otherwise
}

export default useIsAuthenticated;
