document.addEventListener('DOMContentLoaded', () => {
    // If already logged in, go to dashboard
    if (sessionStorage.getItem('isLoggedIn') === 'true') {
        window.location.href = 'dashboard.html';
        return;
    }

    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('errorMessage');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const username = usernameInput.value.trim();
        const password = passwordInput.value;

        // Simple check
        if (username === 'suolalamod' && password === 'suolalameme2932') {
            sessionStorage.setItem('isLoggedIn', 'true');
            window.location.href = 'dashboard.html';
        } else {
            errorMessage.style.display = 'block';
            passwordInput.value = '';

            // Shake animation
            const card = document.querySelector('.login-card');
            card.style.transform = 'translateX(5px)';
            setTimeout(() => card.style.transform = 'translateX(-5px)', 50);
            setTimeout(() => card.style.transform = 'none', 100);
        }
    });
});
