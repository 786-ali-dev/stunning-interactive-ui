document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.querySelector('.cta-button');
    const heroSection = document.querySelector('.hero-section');
    const navLinks = document.querySelectorAll('.nav-links a');

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - document.querySelector('.header').offsetHeight,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Interactive button click effect
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            alert('Welcome! You clicked the "Get Started" button. Explore our amazing features!');
            // You can add more complex interactions here, e.g.,
            // - Redirect to another page: window.location.href = "signup.html";
            // - Show a modal: openModal();
        });
    }

    // Example of a more subtle interactive effect on scroll (optional)
    // You could change header background, add class to elements etc.
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(74, 0, 224, 0.9)'; // Darker on scroll
            header.style.padding = '0.8rem 0';
        } else {
            header.style.background = 'linear-gradient(to right, var(--primary-color), var(--secondary-color))';
            header.style.padding = '1rem 0';
        }
    });

    // Basic form submission handling
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent default form submission
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;

            alert(`Thank you, ${name}! Your message has been sent. We will get back to you at ${email}.`);

            // In a real application, you would send this data to a server using fetch() or XMLHttpRequest
            // Example:
            /*
            fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, message })
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                alert('Your message has been sent successfully!');
                contactForm.reset();
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('There was an error sending your message. Please try again.');
            });
            */
            this.reset(); // Clear the form
        });
    }
});