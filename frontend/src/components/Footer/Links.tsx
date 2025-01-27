import React from "react";
import { FooterLinks } from "../../constants/FooterLinks";

// import CSS
import "./Footer.module.css";

const Links = () => {
  return (
    <>
      {FooterLinks.map((link) => (
        <React.Fragment key={link.title}>
          <a href={link.url}>{link.title}</a>
          <span>|</span>
        </React.Fragment>
      ))}
    </>
  );
};

export default Links;
