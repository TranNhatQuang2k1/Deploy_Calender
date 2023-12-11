"use client";
import Script from "next/script";
import React from "react";

const Silde = () => {
  return (
    <div className="z-[1000]">
      <div id="three-container"></div>
      <div id="instructions">click and drag to control the animation</div>
      <Script
        src="//cdnjs.cloudflare.com/ajax/libs/three.js/r75/three.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="//cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/TweenMax.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/175711/bas.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/175711/OrbitControls-2.js"
        strategy="beforeInteractive"
      />
      <Script src="./javascript.js" strategy="beforeInteractive" />
    </div>
  );
};

export default Silde;
