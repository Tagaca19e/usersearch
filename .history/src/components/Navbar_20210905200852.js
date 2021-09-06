import React from "react";
import FingerprintIcon from "@material-ui/icons/Fingerprint";
const Navbar = ({ toggleTheme }) => {
  return (
    <div className="mynav">
      <h2></h2>
      <FingerprintIcon />
      {/* <button className="btn" onClick={()=> toggleTheme()}>toggle</button> */}
    </div>
  );
};

export default Navbar;
