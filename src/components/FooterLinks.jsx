import logoBg from "../assets/img/dc-logo-bg.png";

export default function FooterLinks() {
  const dcComics = [
    { label: "Characters", link: "" },
    { label: "Comics", link: "" },
    { label: "Movies", link: "" },
    { label: "TV", link: "" },
    { label: "Games", link: "" },
    { label: "Videos", link: "" },
    { label: "News", link: "" },
  ];

  const shop = [
    { label: "Shop DC", link: "" },
    { label: "Shop DC Collectibles", link: "" },
  ];

  const dc = [
    { label: "Terms Of Use", link: "" },
    { label: "Privacy Policy", link: "" },
    { label: "Ad Choices", link: "" },
    { label: "Advertising", link: "" },
    { label: "Jobs", link: "" },
    { label: "Subscriptions", link: "" },
    { label: "Talent Workshops", link: "" },
    { label: "CPSC Certificates", link: "" },
    { label: "Ratings", link: "" },
    { label: "Shop Help", link: "" },
    { label: "Contact Us", link: "" },
  ];

  const sites = [
    { label: "DC", link: "" },
    { label: "MAD Magazine", link: "" },
    { label: "DC Kids", link: "" },
    { label: "DC Universe", link: "" },
    { label: "DC Power Visa", link: "" },
  ];

  return (
    <section className="footer-links position-relative">
      <div className="container-fluid px-5 position-relative">
        <div className="row g-2">
          {/* Colonna 1: DC Comics + Shop */}
          <div className="col-12 col-md-3">
            <h5 className="footer-col-title">DC Comics</h5>
            <ul className="list-unstyled small mb-3">
              {dcComics.map((item, i) => (
                <li key={i}>
                  <a href={item.link} className="footer-link">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <h5 className="footer-col-title">Shop</h5>
            <ul className="list-unstyled small mb-3">
              {shop.map((item, i) => (
                <li key={i}>
                  <a href={item.link} className="footer-link">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonna 2: DC */}
          <div className="col-12 col-md-3">
            <h5 className="footer-col-title">DC</h5>
            <ul className="list-unstyled small mb-3">
              {dc.map((item, i) => (
                <li key={i}>
                  <a href={item.link} className="footer-link">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonna 3: Sites */}
          <div className="col-12 col-md-3">
            <h5 className="footer-col-title">Sites</h5>
            <ul className="list-unstyled small mb-3">
              {sites.map((item, i) => (
                <li key={i}>
                  <a href={item.link} className="footer-link">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Logo grande a destra */}
        <img src={logoBg} alt="DC Logo" className="footer-bg-logo" />
      </div>
    </section>
  );
}