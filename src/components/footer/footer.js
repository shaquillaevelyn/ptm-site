import "./footer.css";

import {
  ContactFooter,
  ExternalLinks,
  FooterLinks,
  PTMFooter,
} from "./footer-links";

export default function Footer() {
  return (
    <>
      <footer id="footer" className="footer">
        <div className="footerSection">
          <PTMFooter />
        </div>
        <div className="usefulLinks footerSection">
          <FooterLinks />
          <ExternalLinks />
        </div>
        <div className="usefulLinks footerSection centre">
          <ContactFooter />
        </div>
      </footer>
    </>
  );
}
