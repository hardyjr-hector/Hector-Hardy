import { initUI } from "./ui.js";
import { initJerseys } from "./jerseys.js";
import { initData } from "./data.js";

document.addEventListener("DOMContentLoaded", () => {
    initUI();
    initJerseys();
    initData();
});