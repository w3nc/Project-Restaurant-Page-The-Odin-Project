import "./style.css";
import { displayHome } from "./home.js";
import { displayMenu } from "./menu.js";
import { displayReservations } from "./reservation.js";

const homeBtn = document.getElementById("home");
const menuBtn = document.getElementById("menu");
const reserveBtn = document.getElementById("reserve");
const storyBtn = document.getElementById("story");
const contactBtn = document.getElementById("contact");

document.addEventListener("DOMContentLoaded", () => {
  // 1. Grab the buttons
  const homeBtn = document.getElementById("home");
  const menuBtn = document.getElementById("menu");
  const reserveBtn = document.getElementById("reserve");
  const storyBtn = document.getElementById("story");
  const contactBtn = document.getElementById("contact");

  // 2. Load the home page by default
  displayHome();

  // 3. Attach event listeners (with safety checks so it doesn't crash if a button is missing)
  if (homeBtn) {
    homeBtn.addEventListener("click", displayHome);
  }

  if (menuBtn) {
    menuBtn.addEventListener("click", displayMenu);
  }

  if (reserveBtn) reserveBtn.addEventListener("click", displayReservations);

  // As you build the other pages, just add them here:
  // if (reserveBtn) reserveBtn.addEventListener("click", displayReserve);
  // if (storyBtn) storyBtn.addEventListener("click", displayStory);
  // if (contactBtn) contactBtn.addEventListener("click", displayContact);
});
