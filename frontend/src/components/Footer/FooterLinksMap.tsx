// import locals
import React from "react";

// import constants
import { FooterLinks } from "../../constants/FooterLinks";

const FooterLinksMap = () => {
  return (
    <>
      {FooterLinks.map((link) => (
        <React.Fragment key={link.title}>
          <a href={link.url}>{link.title}</a>
          <span>-</span>
        </React.Fragment>
      ))}
    </>
  );
};

export default FooterLinksMap;
