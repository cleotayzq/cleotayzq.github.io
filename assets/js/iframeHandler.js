// iframeHandler.js

// Listen for messages from the iframe
window.addEventListener("message", function(event) {
    console.log("Received height from iframe:", event.data); // Debugging: log the received height
    var iframe = document.getElementById('shiny-frame');

    // Optional: Validate the origin for security (update with your Shiny app's URL)
    if (event.origin !== "https://cleotay.shinyapps.io") {
        console.warn("Unexpected origin:", event.origin);
        return;
    }

    // Adjust the iframe height to the received height
    iframe.style.height = event.data + 'px';
});
