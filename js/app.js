"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const welcomeBtn = document.getElementById("welcomeBtn");
  const welcomeMessage = document.getElementById("welcomeMessage");

  if (!welcomeBtn || !welcomeMessage) {
    console.warn("Welcome button or message element not found.");
    return;
  }

  welcomeBtn.addEventListener("click", () => {
    welcomeMessage.textContent =
      "Welcome to Git Workflow Mastery! Let's build great things with Git.";

    welcomeBtn.textContent = "You're Ready!";

    console.log("Get Started button clicked successfully.");
  });
});
