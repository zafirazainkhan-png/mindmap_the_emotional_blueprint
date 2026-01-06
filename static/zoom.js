document.addEventListener("DOMContentLoaded", () => {
    const brainImage = document.getElementById("brainImage");
    const zoomBtn = document.getElementById("zoomBtn");

    if (brainImage && zoomBtn) {
        zoomBtn.addEventListener("click", () => {
            brainImage.classList.add("zoom-effect");

            setTimeout(() => {
                window.location.href = "/amygdala";
            }, 1200); // Matches animation duration
        });
    }

    // Remove zoom-effect class when navigating back or on page load if present
    if (brainImage) {
        window.addEventListener("pageshow", () => {
            brainImage.classList.remove("zoom-effect");
        });
    }
});