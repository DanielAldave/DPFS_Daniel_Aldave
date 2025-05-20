// General JavaScript for all pages
document.addEventListener('DOMContentLoaded', () => {
    console.log('General JS loaded');

    // Search box submission handler
    const searchForm = document.querySelector('form.search-box');
    if (searchForm) {
        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const query = searchForm.querySelector('input.search-input').value.trim();
            if (query) {
                alert(`Buscar: ${query}`);
                // Implement actual search logic or redirect here
            } else {
                alert('Por favor ingrese un término de búsqueda.');
            }
        });
    }

    // Login form submission handler (simulate)
    const loginForm = document.querySelector('form.iniciar-sesion');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = loginForm.querySelector('input.email-input').value.trim();
            const password = loginForm.querySelector('input.password-input').value.trim();
            if (email && password) {
                alert(`Intentando iniciar sesión con email: ${email}`);
                // Implement actual login logic here
            } else {
                alert('Por favor complete todos los campos.');
            }
        });
    }

    // Newsletter subscription handler
    const newsletterButton = document.querySelector('.newsletter button');
    if (newsletterButton) {
        newsletterButton.addEventListener('click', () => {
            const emailInput = document.querySelector('.newsletter input[type="text"]');
            if (emailInput) {
                const email = emailInput.value.trim();
                if (email) {
                    alert(`Gracias por suscribirte con el email: ${email}`);
                    emailInput.value = '';
                } else {
                    alert('Por favor ingrese un email válido.');
                }
            }
        });
    }

    // Toggle password visibility
    const passwordBox = document.querySelector('.password-box');
    if (passwordBox) {
        const toggleIcon = passwordBox.querySelector('.material-symbols-outlined');
        const passwordInput = passwordBox.querySelector('input.password-input');
        if (toggleIcon && passwordInput) {
            toggleIcon.style.cursor = 'pointer';
            toggleIcon.addEventListener('click', () => {
                if (passwordInput.type === 'password') {
                    passwordInput.type = 'text';
                    toggleIcon.textContent = 'visibility';
                } else {
                    passwordInput.type = 'password';
                    toggleIcon.textContent = 'visibility_off';
                }
            });
        }
    }
});
