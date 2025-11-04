import fb from "../assets/img/footer-facebook.png";
import tw from "../assets/img/footer-twitter.png";
import yt from "../assets/img/footer-youtube.png";
import pin from "../assets/img/footer-pinterest.png";
import periscope from "../assets/img/footer-periscope.png";

export default function Footer() {
    return (
        <footer className="footer-bar py-4">
            <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
                {/* --- Bottone Sign-Up --- */}
                <button className="btn btn-outline-primary text-uppercase fw-bold px-4 mb-3 mb-md-0">
                    Sign-Up Now!
                </button>

                {/* --- Social Icons --- */}
                <div className="d-flex align-items-center gap-3">
                    <h5 className="text-uppercase mb-0 me-2 fw-bold fs-6"
                        style={{ color: "#0282F9" }}>Follow Us</h5>

                    <a href="#"><img src={fb} alt="Facebook" className="social-icon" /></a>
                    <a href="#"><img src={tw} alt="Twitter" className="social-icon" /></a>
                    <a href="#"><img src={yt} alt="YouTube" className="social-icon" /></a>
                    <a href="#"><img src={pin} alt="Pinterest" className="social-icon" /></a>
                    <a href="#"><img src={periscope} alt="Periscope" className="social-icon" /></a>
                </div>
            </div>
        </footer>
    );
}