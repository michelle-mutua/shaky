const button = document.getElementById('order-btn');
button.addEventListener('click', function() {
    alert("Order placed!");
});



const aboutLink = document.querySelector('a[href="about.html"]')
    if (aboutLink) {
         //  NEW: Check if the user manually reloaded/refreshed the page
    const navigationEntries = performance.getEntriesByType('navigation')[0];
    if (navigationEntries && navigationEntries.type === 'reload') {
        // If they refreshed, completely erase the memory so it goes back to normal
        sessionStorage.removeItem('visitedAbout');
    }
    // CHECK MEMORY: When the page loads, check if they already clicked it before
    if (sessionStorage.getItem('visitedAbout') === 'true') {
        aboutLink.textContent = "Thanks for visiting!"; /* Swapped text here */
    }

    // LISTEN FOR CLICK: Save to memory right when they click it
    aboutLink.addEventListener('click', function() {
        // 1. Save the memory trick into the browser tab
        sessionStorage.setItem('visitedAbout', 'true');
        
        // 2. Change the text instantly
        aboutLink.textContent = "Thanks for visiting!"; /* Swapped text here */
    });
}


