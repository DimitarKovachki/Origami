import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            // -1 = one back button -2 = two back button etc.
            navigate(-1);
        }, 1000);
    }, [])
    return (
        <h1>This url it`s not found!</h1>
    )
}

export default NotFound;