document.addEventListener('DOMContentLoaded', () => {
    // 1. Obtener referencias a las vistas y enlaces
    const loginView = document.getElementById('login-view');
    const registerView = document.getElementById('register-view');
    
    const showRegisterLink = document.getElementById('show-register');
    const showLoginLink = document.getElementById('show-login');
    
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    // Función para cambiar de vista
    function switchView(fromView, toView) {
        fromView.classList.remove('active');
        fromView.classList.add('hidden');
        
        toView.classList.remove('hidden');
        toView.classList.add('active');
    }

    // 2. Eventos para cambiar entre login y registro
    if (showRegisterLink && loginView && registerView) {
        showRegisterLink.addEventListener('click', (e) => {
            e.preventDefault();
            switchView(loginView, registerView);
        });
    }

    if (showLoginLink && loginView && registerView) {
        showLoginLink.addEventListener('click', (e) => {
            e.preventDefault();
            switchView(registerView, loginView);
        });
    }

    // 3. Manejo básico de envío de formularios (solo para el ejemplo)
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Previene el envío por defecto
            console.log('Intento de Inicio de Sesión...');
            // Aquí iría la lógica de autenticación (Fetch API, etc.)
            alert('¡Inicio de Sesión simulado exitoso!');
            // Redireccionar al dashboard...
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Previene el envío por defecto
            
            const password = document.getElementById('register-password').value;
            const confirmPassword = document.getElementById('confirm-password').value;

            if (password !== confirmPassword) {
                alert('¡Error! Las contraseñas no coinciden.');
                return;
            }

            console.log('Intento de Registro...');
            // Aquí iría la lógica de registro (Fetch API, etc.)
            alert('¡Registro simulado exitoso!');
            // Opcional: Volver a la vista de Login
            switchView(registerView, loginView);
        });
    }
});
