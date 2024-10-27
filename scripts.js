    document.querySelector('.btn').addEventListener('click', function() {
        alert('Product added to cart!');
    });

    const contactForm = document.querySelector('.contact-section form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset(); // Reset the form fields
    });

    const newsletterForm = document.querySelector('.newsletter-section form');
    newsletterForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        alert('You have subscribed to our newsletter!');
        newsletterForm.reset(); // Reset the input field
    });

