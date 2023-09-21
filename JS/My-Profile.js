'use strict';

document.addEventListener("DOMContentLoaded", function () {
    const profileButton = document.getElementById("profile-button");
    const accountButton = document.getElementById("account-button");
    const profileForms = document.getElementById("profile-forms");
    const accountForms = document.getElementById("account-forms");

    profileButton.addEventListener("click", function () {
        profileForms.classList.toggle("hidden");
        accountForms.classList.add("hidden");
    });

    accountButton.addEventListener("click", function () {
        accountForms.classList.toggle("hidden");
        profileForms.classList.add("hidden");
    });
});


