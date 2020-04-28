import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return <footer>Copyright &copy; {currentYear}</footer>;
}

export default Footer;
