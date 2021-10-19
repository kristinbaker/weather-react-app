import React from "react";

import "./Footer.css";

export default function Footer(){
return (

<div className="footer">
This project was coded by <a className="footer-links" href="https://www.linkedin.com/in/kristinbaker1/" alt="Personal Website"> Kristin Baker </a> and is  {""}
<a
  className="footer-links"
  href="https://github.com/kristinbaker/weather-react-app"
  alt="Github Link"
>
  open-sourced on GitHub {" "}
</a>{" "} and {""}
<a className="footer-links" href="https://competent-panini-20a53a.netlify.app/" alt="Netlify link"> hosted on Netlify</a>
</div>


);
}