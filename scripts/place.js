// Calculate and display wind chill
function calculateWindChill(temp, windSpeed) {
    return 35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16);
}

document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const tempElement = document.getElementById('temp');
    const windSpeedElement = document.getElementById('wind-speed');
    const windChillElement = document.getElementById('wind-chill');
    
    // Get values
    const temp = parseFloat(tempElement.textContent);
    const windSpeed = parseFloat(windSpeedElement.textContent);
    
    // Calculate wind chill if conditions are met
    if (temp <= 50 && windSpeed > 3) {
        const windChill = calculateWindChill(temp, windSpeed);
        windChillElement.textContent = Math.round(windChill * 10) / 10 + "°F";
    } else {
        windChillElement.textContent = "N/A";
    }
    
    // Display current year
    const currentYearElement = document.getElementById('current-year');
    currentYearElement.textContent = new Date().getFullYear();
    
    // Display last modified date
    const lastModifiedElement = document.getElementById('last-modified');
    lastModifiedElement.textContent = document.lastModified;
});