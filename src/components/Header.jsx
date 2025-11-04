import logo from "../assets/img/dc-logo.png"; // aggiorna il percorso se serve

export default function Header() {
    return (
        <header className="bg-white border-bottom">
            <div className="container d-flex align-items-center justify-content-between py-3">
                {/* LOGO */}
                <img
                    src={logo}
                    alt="DC Logo"
                    style={{ width: 60, height: 60, objectFit: "contain" }}
                />

                {/* NAVBAR */}
                <nav>
                    <ul className="nav text-uppercase fw-bold small">
                        <li className="nav-item">
                            <a href="#" className="nav-link text-dark px-2">Characters</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link text-dark px-2">Comics</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link text-dark px-2">Movies</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link text-dark px-2">TV</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link text-dark px-2">Games</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link text-dark px-2">Collectibles</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link text-dark px-2">Videos</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link text-dark px-2">Fans</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link text-dark px-2">News</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link text-dark px-2">Shop</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}