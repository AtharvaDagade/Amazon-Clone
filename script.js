document.addEventListener("DOMContentLoaded", function () {
    
    // Back to Top Button
    const backToTop = document.createElement("button");
    backToTop.textContent = "↑ Top";
    backToTop.classList.add("back-to-top");
    document.body.appendChild(backToTop);

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });

    backToTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });   

    const searchInput = document.querySelector(".search-input");
    const searchButton = document.querySelector(".search-icon");

    searchButton.addEventListener("click", function () {
        const query = searchInput.value.trim();
        if (query) {
            alert(`Searching for: ${query}`);
            // Here you can redirect to search results page, e.g.
            // window.location.href = `https://www.amazon.com/s?k=${encodeURIComponent(query)}`;
        } else {
            alert("Please enter a search term!");
        }
    });
});
