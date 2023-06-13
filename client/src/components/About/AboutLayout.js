import { Outlet } from "react-router-dom";

function AboutLayout() {
    return (
        <>
            <div className="container-aboutLayout">
                <p>This is Main Layout for About Pages !</p>
                <Outlet />
            </div>
        </>
    )
}

export default AboutLayout;