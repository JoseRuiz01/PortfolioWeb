document.addEventListener('DOMContentLoaded', () => {
    // Toggle menu functionality
    const toggleMenuButton = document.getElementById('toggle-menu');
    const menu = document.getElementById('menu');

    if (toggleMenuButton && menu) {
        toggleMenuButton.addEventListener('click', () => {
            menu.classList.toggle('active');
        });
    }

    // Hover effect for project items
    const projectItems = document.querySelectorAll('.project-item');
    projectItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.classList.add('hover');
        });
        item.addEventListener('mouseleave', () => {
            item.classList.remove('hover');
        });
    });

    const textElement = document.getElementById('animated-text');
    const text = "JoseRz ";
    let index = 0;
    let isDeleting = false;

    function typeEffect() {
        textElement.textContent = isDeleting
            ? text.substring(0, index--)
            : text.substring(0, index++);
    
        textElement.style.color = "white"; 
        textElement.style.fontSize = "5rem";
        textElement.style.fontWeight = "bold";
        textElement.style.textShadow = "0 0 20px rgba(82, 82, 82, 0.8)";
        
        if (!isDeleting && index === text.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1500); // Pause before deleting
        } else if (isDeleting && index === 0) {
            isDeleting = false;
            setTimeout(typeEffect, 500); // Pause before typing again
        } else {
            setTimeout(typeEffect, 250); // Typing speed
        }
    }

    if (textElement) {
        typeEffect();
    }
});