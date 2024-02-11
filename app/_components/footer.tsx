import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="py-10 text-center border-t">
      <p>&copy; {year} All rights reserved</p>
    </footer>
  );
};

export default Footer;
