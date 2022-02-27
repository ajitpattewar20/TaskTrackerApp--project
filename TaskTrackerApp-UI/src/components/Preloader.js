import React from "react";
import "./Preloader.css";

function Preloader() {
  setTimeout( function(){
    document.querySelector('body').classList.add("loaded")}  ,2000)
  return (
    <div class="loader-wrapper">
      <div class="loader"></div>
      <div class="loader-section section-left"></div>
      <div class="loader-section section-right"></div>
    </div>
  );
}

export default Preloader;

/* 
<!--  Page Content goes here  -->
<div class="container">
  <h1>Spinner Preloader using <abbr title="Cascade Style Sheet">CSS</abbr> & <abbr title="Javascript">JS</abbr></h1>
</div> 
#ec705d
#00ffb5
#00caea
window.addEventListener('load',function(){
    document.querySelector('body').classList.add("loaded")  
  });
*/
