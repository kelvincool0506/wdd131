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
    // Update review counter
    updateReviewCounter();
    
    // Display review details
    displayReviewDetails();
});

// Update review counter display
function updateReviewCounter() {
    let reviewCount = localStorage.getItem('reviewCount');
    if (reviewCount === null) {
        reviewCount = 0;
    } else {
        reviewCount = parseInt(reviewCount);
    }
    
    document.getElementById('confirmation-count').textContent = reviewCount;
}

// Display review details
function displayReviewDetails() {
    // Get URL parameters
    const params = new URLSearchParams(window.location.search);
    
    // Find product name
    const productId = params.get('product');
    let productName = "Unknown Product";
    if (productId) {
        const product = products.find(p => p.id === productId);
        if (product) {
            productName = product.name;
        }
    }
    
    // Update the review details
    document.getElementById('review-product').textContent = productName;
    document.getElementById('review-rating').textContent = params.get('rating') + " stars";
    document.getElementById('review-date').textContent = params.get('installDate');
    
    // Handle features (checkboxes can have multiple values)
    const features = params.getAll('features');
    document.getElementById('review-features').textContent = 
        features.length > 0 ? features.join(', ') : 'None selected';
    
    // Handle review text
    const reviewText = params.get('review');
    document.getElementById('review-text').textContent = 
        reviewText ? reviewText : 'No review provided';
    
    // Handle username
    const username = params.get('username');
    document.getElementById('review-name').textContent = 
        username ? username : 'Anonymous';
}