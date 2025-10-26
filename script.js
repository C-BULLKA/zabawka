document.addEventListener('DOMContentLoaded', function() {
    const correctPassword = 'tajnehaslo';

    const passwordInput = document.getElementById('password-input');
    const passwordButton = document.getElementById('password-button');
    const passwordOverlay = document.getElementById('password-overlay');
    const errorMessage = document.getElementById('error-message');
    const mainContentWrapper = document.getElementById('main-content-wrapper');
    const backgroundDiv = document.getElementById('background');

    function checkPassword() {
        if (passwordInput.value === correctPassword) {
            // Ukryj overlay z hasłem
            passwordOverlay.style.opacity = 0;
            passwordOverlay.style.visibility = 'hidden';
            
            // Pokaż ekran ładowania
            const loadingScreen = document.getElementById('loading-screen');
            loadingScreen.style.visibility = 'visible';
            loadingScreen.style.opacity = 1;
            
            // Symuluj ładowanie (3 sekundy)
            setTimeout(() => {
                // Ukryj ekran ładowania
                loadingScreen.style.opacity = 0;
                loadingScreen.style.visibility = 'hidden';
                
                // Pokaż główną zawartość
                mainContentWrapper.classList.remove('hidden');
                mainContentWrapper.classList.add('visible');
                
                // Inicjalizuj gwiazdy
                initStars();
            }, 3000);
        } else {
            // Błędne hasło: pokaż komunikat o błędzie
            errorMessage.textContent = 'Nieprawidłowe hasło, spróbuj ponownie.';
            errorMessage.style.opacity = 1;
        }
    }

    // Obsługa kliknięcia przycisku
    passwordButton.addEventListener('click', checkPassword);

    // Obsługa wciśnięcia klawisza Enter
    passwordInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            checkPassword();
        }
    });

    // Funkcja do generowania gwiazd
    function initStars() {
        const numStars = 300;

        for (let i = 0; i < numStars; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.top = `${Math.random() * 100}vh`;
            star.style.left = `${Math.random() * 100}vw`;
            star.style.animationDelay = `${Math.random() * 2}s`;
            backgroundDiv.appendChild(star);
        }
    }
});