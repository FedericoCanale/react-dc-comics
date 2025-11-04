import digital from "../assets/img/buy-comics-digital-comics.png";
import merch from "../assets/img/buy-comics-merchandise.png";
import subs from "../assets/img/buy-comics-subscriptions.png";
import locator from "../assets/img/buy-comics-shop-locator.png";
import visa from "../assets/img/buy-dc-power-visa.svg";

export default function BlueBar() {
    return (
        <section className="blue-bar py-4">
            <div className="container">
                <div className="row justify-content-center align-items-center text-white text-uppercase fw-semibold text-center g-4">
                    <div className="col-6 col-md d-flex align-items-center justify-content-center gap-2">
                        <img src={digital} alt="Digital Comics" style={{ width: 50 }} />
                        <span>Digital Comics</span>
                    </div>
                    <div className="col-6 col-md d-flex align-items-center justify-content-center gap-2">
                        <img src={merch} alt="DC Merchandise" style={{ width: 50 }} />
                        <span>DC Merchandise</span>
                    </div>
                    <div className="col-6 col-md d-flex align-items-center justify-content-center gap-2">
                        <img src={subs} alt="Subscription" style={{ width: 50 }} />
                        <span>Subscription</span>
                    </div>
                    <div className="col-6 col-md d-flex align-items-center justify-content-center gap-2">
                        <img src={locator} alt="Shop Locator" style={{ width: 50 }} />
                        <span>Shop Locator</span>
                    </div>
                    <div className="col-6 col-md d-flex align-items-center justify-content-center gap-2">
                        <img src={visa} alt="Power Visa" style={{ width: 50 }} />
                        <span>Power Visa</span>
                    </div>
                </div>
            </div>
        </section>
    );
}