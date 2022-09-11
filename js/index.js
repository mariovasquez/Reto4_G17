'use strict';
import counter from "./modules/counter.js";
import header from "./modules/header.js";
import switcher from "./modules/switcher.js";
import featured from "./modules/featured.js";
import slider from "./modules/slider.js";

const documentReady = () => {
  counter();
  header();
  switcher();
  featured();
  slider();
};

document.addEventListener('DOMContentLoaded', documentReady);