'use strict';
import counter from "./modules/counter.js";
import header from "./modules/header.js";
import switcher from "./modules/switcher.js";
import featured from "./modules/featured.js";

const documentReady = () => {
  counter();
  header();
  switcher();
  featured();
};

document.addEventListener('DOMContentLoaded', documentReady);