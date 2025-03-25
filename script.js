document.addEventListener("DOMContentLoaded", function () {
    const ctaButton = document.querySelector(".cta-button");
    const ctaText = document.querySelector(".cta-text");

    ctaButton.addEventListener("mouseover", function () {
        ctaText.style.display = "block";
    });

    ctaButton.addEventListener("mouseout", function () {
        ctaText.style.display = "none";
    });
});
