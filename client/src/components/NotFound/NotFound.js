import { Navigate } from "react-router-dom";

const NotFound = () => {
    return (
        // <h1>This url it`s not found!</h1>
        <Navigate to="/" />
    )
}

export default NotFound;