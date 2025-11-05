import bgImage from "../assets/img/footer-bg.jpg";
import logoBg from "../assets/img/dc-logo-bg.png";

export default function FooterLinks() {
  return (
    <section
      className="footer-links text-white py-5 px-5 position-relative"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
      }}
    >
      <div className="container position-relative">
        <div
          className="d-flex flex-wrap text-start"
          style={{
            gap: "20px",
            maxWidth: "700px",
          }}
        >
          {/* --- Colonna 1 --- */}
          <div style={{ flex: "1 1 180px" }}>
            <h5 className="text-uppercase fw-bold mb-2">DC Comics</h5>
            <ul className="list-unstyled small mb-3">
              <li><a href="#" className="text-white-50 text-decoration-none">Characters</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Comics</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Movies</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">TV</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Games</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Videos</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">News</a></li>
            </ul>

            <h5 className="text-uppercase fw-bold mb-2">Shop</h5>
            <ul className="list-unstyled small">
              <li><a href="#" className="text-white-50 text-decoration-none">Shop DC</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Shop DC Collectibles</a></li>
            </ul>
          </div>

          {/* --- Colonna 2 --- */}
          <div style={{ flex: "1 1 180px" }}>
            <h5 className="text-uppercase fw-bold mb-2">DC</h5>
            <ul className="list-unstyled small mb-0">
              <li><a href="#" className="text-white-50 text-decoration-none">Terms Of Use</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Privacy Policy</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Ad Choices</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Advertising</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Jobs</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Subscriptions</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Talent Workshops</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">CPSC Certificates</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Ratings</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Shop Help</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Contact Us</a></li>
            </ul>
          </div>

          {/* --- Colonna 3 --- */}
          <div style={{ flex: "1 1 180px" }}>
            <h5 className="text-uppercase fw-bold mb-2">Sites</h5>
            <ul className="list-unstyled small mb-0">
              <li><a href="#" className="text-white-50 text-decoration-none">DC</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">MAD Magazine</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">DC Kids</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">DC Universe</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">DC Power Visa</a></li>
            </ul>
          </div>
        </div>

        {/* --- Logo grande a destra --- */}
        <img
          src={logoBg}
          alt="DC Logo"
          className="position-absolute end-0 top-50 translate-middle-y"
          style={{
            width: "550px",
            opacity: 0.25,
            transform: "translate(40%, -50%)",
          }}
        />
      </div>
    </section>
  );
}