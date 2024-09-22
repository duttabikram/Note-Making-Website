import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright {year} made by Bikram</p>
    </footer>
  );
}

export default Footer;
