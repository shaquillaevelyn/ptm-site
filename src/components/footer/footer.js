import "./footer.css";
import { useEffect, useRef } from "react";

import {
  ContactFooter,
  ExternalLinks,
  FooterLinks,
  PTMFooter,
} from "./footer-links";

export default function Footer(props) {
  const footerLocation = useRef(null);

  return (
    <>
      <footer id="footer" className="footer" ref={props.footerLocation}>
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
