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
                <img src={logo} alt="DC Logo" className="dc-logo" />

                <nav>
                    <ul className="nav text-uppercase fw-bold small gap-4 mb-0">
                        {navLinks.map((label, i) => (
                            <li key={i} className="nav-item">
                                <a href="#" className="nav-link px-0">
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