import digital from "../assets/img/buy-comics-digital-comics.png";
import merch from "../assets/img/buy-comics-merchandise.png";
import subs from "../assets/img/buy-comics-subscriptions.png";
import locator from "../assets/img/buy-comics-shop-locator.png";
import visa from "../assets/img/buy-dc-power-visa.svg";

export default function BlueBar() {
    return (
        <section className="blue-bar py-4">
            <div className="container">
                <div className="row g-4 justify-content-center">
                    <div className="col-6 col-md bb-item">
                        <img src={digital} alt="Digital Comics" className="bb-icon" />
                        <span>Digital Comics</span>
                    </div>
                    <div className="col-6 col-md bb-item">
                        <img src={merch} alt="DC Merchandise" className="bb-icon" />
                        <span>DC Merchandise</span>
                    </div>
                    <div className="col-6 col-md bb-item">
                        <img src={subs} alt="Subscription" className="bb-icon" />
                        <span>Subscription</span>
                    </div>
                    <div className="col-6 col-md bb-item">
                        <img src={locator} alt="Shop Locator" className="bb-icon" />
                        <span>Shop Locator</span>
                    </div>
                    <div className="col-6 col-md bb-item">
                        <img src={visa} alt="Power Visa" className="bb-icon" />
                        <span>Power Visa</span>
                    </div>
                </div>
            </div>
        </section>
    );
}