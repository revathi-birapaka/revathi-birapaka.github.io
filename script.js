document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Scroll-to-top button
    const scrollTopButton = document.createElement('button');
    scrollTopButton.innerText = 'Top';
    scrollTopButton.id = 'scrollTopButton';
    document.body.appendChild(scrollTopButton);

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollTopButton.style.display = 'block';
        } else {
            scrollTopButton.style.display = 'none';
        }
    });

    scrollTopButton.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Style the scroll-to-top button
    const style = document.createElement('style');
    style.innerHTML = `
        #scrollTopButton {
            position: fixed;
            bottom: 30px;
            right: 30px;
            display: none;
            background-color: #333;
            color: white;
            border: none;
            padding: 10px 15px;
            cursor: pointer;
            border-radius: 5px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        #scrollTopButton:hover {
            background-color: #555;
        }
    `;
    document.head.appendChild(style);
});
