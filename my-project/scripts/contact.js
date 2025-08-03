// Form Handling
document.addEventListener('DOMContentLoaded', function() {
    const securityForm = document.getElementById('securityForm');
    
    if (securityForm) {
        securityForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                topic: document.getElementById('topic').value,
                message: document.getElementById('message').value,
                newsletter: document.getElementById('newsletter').checked
            };
            
            // Save to localStorage
            localStorage.setItem('securityFormData', JSON.stringify(formData));
            
            // Show success message
            alert('Thank you for your message! We will respond as soon as possible.');
            
            // Reset form
            securityForm.reset();
        });
        
        // Load saved form data if available
        const savedFormData = localStorage.getItem('securityFormData');
        if (savedFormData) {
            const formData = JSON.parse(savedFormData);
            document.getElementById('name').value = formData.name || '';
            document.getElementById('email').value = formData.email || '';
            document.getElementById('topic').value = formData.topic || '';
            document.getElementById('message').value = formData.message || '';
            document.getElementById('newsletter').checked = formData.newsletter || false;
        }
    }
});