// shinyheight.js

// Listen for messages from the iframe
window.addEventListener("message", function(event) {
    console.log("Received message from iframe:", event.data); // Log the message

    var iframe = document.getElementById('shiny-frame');

    // Optional: Validate the event origin for security
    if (event.origin !== "https://cleotay.shinyapps.io") {
        console.warn("Unexpected origin:", event.origin);
        return;
    }

    // Adjust iframe height based on the received data
    iframe.style.height = event.data + 'px';
});
