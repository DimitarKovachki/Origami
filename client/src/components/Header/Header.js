import { Link, NavLink} from "react-router-dom";
function Header() {
    return (
        <header className="app-header">
            <div className="header-container">
                <div className="logo-wrapper">
                    <img src="../logo/logo.png" alt="" />
                </div>
                <ul className="header-nav-list">
                    <li className="header-list-item">
                        <Link to={"/"} state="Hi"> 
                            Home
                        </Link>
                    </li>
                    <li className="header-list-item">
                        <Link to={"/about"}>
                            About
                        </Link>
                    </li>

                    <li className="header-list-item">
                        <Link to={"/contact-us"}>
                            Contact Us
                        </Link>
                    </li>
                    <li className="header-list-item">
                        <Link to="/about/pesho">
                            Pesho
                        </Link>
                    </li>
                    <li className="header-list-item">
                        <Link to={"/about/gosho"}>
                            Gosho
                        </Link>
                    </li>
                    <li className="header-list-item">
                        <NavLink to={"/about/toshko"}>
                            Toshko
                        </NavLink>
                    </li>
                    <li className="header-list-item">
                        <NavLink to={"/about/new"}>
                            New About
                        </NavLink>
                    </li>
                    <li className="header-list-item">
                        <Link to={"/testForNotFouthing"}>
                            Undefined Page
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header;