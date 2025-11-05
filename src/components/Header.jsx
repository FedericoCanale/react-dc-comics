import logo from "../assets/img/dc-logo.png";

export default function Header() {
    const navLinks = [
        "Characters",
        "Comics",
        "Movies",
        "TV",
        "Games",
        "Collectibles",
        "Videos",
        "Fans",
        "News",
        "Shop",
    ];

    return (
        <header className="bg-white border-bottom">
            <div className="container-fluid px-5 d-flex align-items-center justify-content-between py-3">
                {/* LOGO */}
                <img
                    src={logo}
                    alt="DC Logo"
                    style={{ width: 60, height: 60, objectFit: "contain" }}
                />

                {/* NAVBAR DINAMICA */}
                <nav>
                    <ul className="nav text-uppercase fw-bold small gap-4 mb-0">
                        {navLinks.map((label, index) => (
                            <li key={index} className="nav-item">
                                <a href="#" className="nav-link text-dark px-0">
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}