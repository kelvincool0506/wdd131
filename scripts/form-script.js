// Product array as provided
const products = [
    { id: "hc", name: "Coding Hoodie" },
    { id: "hp", name: "Coding Tee" },
    { id: "dp", name: "Duck Plush" },
    { id: "ct", name: "Coffee Thermos" },
    { id: "mt", name: "Coffee Mug" }
];

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Populate product dropdown
    const productSelect = document.getElementById('product');
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
    
    // Update review counter
    updateReviewCounter();
    
    // Set date constraints
    const installDateInput = document.getElementById('installDate');
    if (installDateInput) {
        const today = new Date().toISOString().split('T')[0];
        installDateInput.setAttribute('max', today);
    }
    
    // Handle form submission
    const form = document.getElementById('reviewForm');
    form.addEventListener('submit', function() {
        // Increment review counter
        let reviewCount = localStorage.getItem('reviewCount');
        if (reviewCount === null) {
            reviewCount = 1;
        } else {
            reviewCount = parseInt(reviewCount) + 1;
        }
        localStorage.setItem('reviewCount', reviewCount);
    });
});

// Update review counter display
function updateReviewCounter() {
    let reviewCount = localStorage.getItem('reviewCount');
    if (reviewCount === null) {
        reviewCount = 0;
    } else {
        reviewCount = parseInt(reviewCount);
    }
    
    document.getElementById('reviewCount').textContent = reviewCount;
}