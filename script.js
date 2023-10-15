document.addEventListener("DOMContentLoaded", function () {
    // Email button
    const btn = document.getElementById("copyEmailBtn");
    const tooltip = document.getElementById("tooltip");

    btn.addEventListener("click", function () {
        navigator.clipboard.writeText("hola@jorgeteixeira.es")
            .then(() => {
                // Show tooltip
                tooltip.classList.remove("invisible");
                tooltip.classList.add("opacity-100");

                // Hide tooltip after 2 seconds with fade-out animation
                setTimeout(() => {
                    tooltip.classList.remove("opacity-100");
                    tooltip.classList.add("opacity-0");

                    // Actually hide it after animation
                    setTimeout(() => {
                        tooltip.classList.add("invisible");
                    }, 300);
                }, 2000);
            })
            .catch(err => {
                console.error("Could not copy email: ", err);
            });
    });
});