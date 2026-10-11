// Keep native POST so Netlify handles CAPTCHA validation and the success page.
(function () {
    "use strict";
    var form = document.getElementById("banaulas");
    if (!form) return;
    var fields = [form.elements.namedItem("number"), form.elements.namedItem("message")];
    fields.forEach(function (field) {
        field.addEventListener("input", function () { field.setCustomValidity(""); });
    });
    form.addEventListener("submit", function (event) {
        fields.forEach(function (field) {
            field.value = field.value.trim();
            field.setCustomValidity(field.value ? "" : "Please fill out this field.");
        });
        if (!form.reportValidity()) event.preventDefault();
    });
}());
